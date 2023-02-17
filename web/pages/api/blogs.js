import { getAllBlogs } from "@/lib/api";

export default async function handler(req, res) {
  const blogs = await getAllBlogs();
  return res.status(200).json(blogs);
}
