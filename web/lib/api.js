import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

const builder = imageUrlBuilder(client);

export async function getAllBlogs() {
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
  }`);
}

export async function getPaginatedBlogs(
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
  return await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug] {
      ...,
      "author": author-> {
        name,
        "avatar": avatar.asset->url
      }
    }[0]
  `,
    { slug }
  );
}

export function urlFor(source) {
  return builder.image(source);
}
