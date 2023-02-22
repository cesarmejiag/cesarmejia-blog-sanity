import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

const builder = imageUrlBuilder(client);

export async function getAllBlogs(params) {
  const offset = params?.offset || 0;
  console.log(offset);
  return await client.fetch(`*[_type == "blog"] | order(date desc) {
    title,
    subtitle,
    "slug": slug.current,
    coverImage,
    date,
    "author": author->{
      name,
      "avatar": avatar.asset->url
    },
  } [${offset}...${offset + 3}]`);
}

export async function getBlogBySlug(slug) {
  return await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, {
    slug,
  });
}

export function urlFor(source) {
  return builder.image(source);
}
