import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import moment from "moment";

import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FilteringMenu from "@/components/FilteringMenu";
import ListItem from "@/components/ListItem";
import Item from "@/components/Item";
import ItemBlank from "@/components/ItemBlank";
import ListItemBlank from "@/components/ListItemBlank";

import { getPaginatedBlogs } from "@/lib/api";
import { useGetBlogsPages } from "@/actions/pagination";

export const BlogList = ({ data, filter }) => {
  return data.map((page) =>
    page.map(({ title, subtitle, date, coverImage, slug, author }) => {
      return filter.view.list ? (
        <Col key={slug} md="10">
          <ListItem
            author={author}
            title={title}
            subtitle={subtitle}
            date={moment(date).format("LLL")}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={slug} md="4">
          <Item
            slug={slug}
            author={author}
            title={title}
            subtitle={subtitle}
            date={moment(date).format("LLL")}
            coverImage={coverImage}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${slug}`,
            }}
          />
        </Col>
      );
    })
  );
};

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });
  const { data, size, setSize, hitEnd, isValidating } = useGetBlogsPages({
    filter,
  });

  return (
    <Layout>
      <Intro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className="mb-5">
        <BlogList data={data || [blogs]} filter={filter} />
        {isValidating &&
          Array(3)
            .fill(0)
            .map((_, i) =>
              filter.view.list ? (
                <Col key={`${i}-item`} md="10">
                  <ListItemBlank />
                </Col>
              ) : (
                <Col key={`${i}-item`} md="4">
                  <ItemBlank />
                </Col>
              )
            )}
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button
          size="lg"
          variant="outline-secondary"
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
        >
          Load More
        </Button>
      </div>
    </Layout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
    },
  };
}

/* export async function getServerSideProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
} */

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html

// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching
