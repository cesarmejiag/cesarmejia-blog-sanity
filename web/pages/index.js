import { Row, Col } from "react-bootstrap";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import ListItem from "@/components/ListItem";
import Item from "@/components/Item";
import { getAllBlogs } from "@/lib/api";
import FilteringMenu from "@/components/FilteringMenu";
import { useState } from "react";
import { useGetBlogs } from "@/actions";

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
