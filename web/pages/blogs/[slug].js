import Layout from "@/components/Layout";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";

const BlogDetail = ({ blog }) => {
  return (
    <Layout>
      <h1>{blog.title}</h1>
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
