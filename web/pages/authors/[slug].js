import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Layout from "@/components/Layout";
import client from "@/lib/client";

const authorQuery = `
*[_type == 'author' && slug.current == $slug] {
  "avatar": avatar.asset->url,
  name,
}[0]
`;

const allAuthorsQuery = `
  *[_type == 'author'] {
    "slug": slug.current
  }
`;

function Author({ author }) {
  return (
    <Layout>
      <Row>
        <Col xs={{ span: 3, offset: 1 }}>
          <Image src={author?.avatar} alt={author?.name} width={30} height={30} />
        </Col>
        <Col xs={{ span: 7, offset: 1 }}>
          <h1>{author?.name}</h1>
        </Col>
      </Row>
    </Layout>
  );
}

/* export async function getServerSideProps({ query }) {
  const author = await client.fetch(authorQuery, {
    slug: query.slug,
  });
  return { props: { author } };
} */

export async function getStaticProps({ params }) {
  const author = await client.fetch(authorQuery, { slug: params.slug });
  return { props: { author } };
}

export async function getStaticPaths() {
  const slugs = await client.fetch(allAuthorsQuery);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: true,
  };
}

export default Author;
