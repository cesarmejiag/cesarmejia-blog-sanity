import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

const builder = imageUrlBuilder(client);

export async function getAllBlogs(
  { offset, date } = { offset: 0, date: "desc" }
) {
  return await client.fetch(`*[_type == "blog"] | order(date ${date}) {
    title,
    subtitle,
    "slug": slug.current,
    coverImage,
    date,
    "author": author->{
      name,
      "avatar": avatar.asset->url
    },
  } [${offset}...${offset + 6}]`);
}

export async function getBlogBySlug(slug) {
  return await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, {
    slug,
  });
}

export function urlFor(source) {
  return builder.image(source);
}
