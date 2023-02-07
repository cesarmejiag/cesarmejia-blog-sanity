import { Row, Col } from "react-bootstrap";
import Layout from "@/components/Layout";
import PreviewAlert from "@/components/PreviewAlert";
import BlogHeader from "@/components/BlogHeader";
import BlogContent from "@/components/BlogContent";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import { urlFor } from "@/lib/api";
import moment from "moment";

const BlogDetail = ({ blog }) => {
  return (
    <Layout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {false && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format("LL")}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  // paths: [{ params: { slug: "my-first-blog" } }, ...]
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export default BlogDetail;
