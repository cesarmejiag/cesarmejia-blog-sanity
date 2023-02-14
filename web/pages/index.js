import { Row, Col } from "react-bootstrap";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import ListItem from "@/components/ListItem";
import Item from "@/components/Item";
import { getAllBlogs } from "@/lib/api";
import FilteringMenu from "@/components/FilteringMenu";
import { useState } from "react";

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({ view: { list: 0 } });
  return (
    <Layout>
      <Intro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <ListItem />
          </Col> */}
        {blogs.map(({ title, subtitle, date, coverImage, slug, author }) => {
          return filter.view.list ? (
            <Col key={slug} md="10">
              <ListItem />
            </Col>
          ) : (
            <Col key={slug} md="4">
              <Item
                slug={slug}
                author={author}
                title={title}
                subtitle={subtitle}
                date={date}
                coverImage={coverImage}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${slug}`,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
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
