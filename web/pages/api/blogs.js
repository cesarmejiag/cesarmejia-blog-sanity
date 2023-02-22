import { getAllBlogs } from "@/lib/api";

export default async function handler(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const blogs = await getAllBlogs({ offset });
  return res.status(200).json(blogs);
}
