import client from "./client";

export async function getAllBlogs() {
  return await client.fetch(`*[_type == "blog"] {
    title,
    subtitle,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    date,
    "author": author->{
      name,
      "avatar": avatar.asset->url
    },
  }`);
}

export async function getBlogBySlug(slug) {
  return await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, {
    slug,
  });
}
