import { useSWRPages } from "swr";
import { useGetBlogs } from "./";

export const useGetBlogsPages = ({ blogs }) => {
  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      let initialData = blogs;
      const { data: blogs } = withSWR(useGetBlogs());

      if (!blogs) {
        return "Loading...";
      }

      return blogs.map(
        ({ title, subtitle, date, coverImage, slug, author }) => {
          return filter.view.list ? (
            <Col key={slug} md="10">
              <ListItem
                slug={slug}
                author={author}
                title={title}
                subtitle={subtitle}
                date={date}
                coverImage={coverImage}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={slug} md="4">
              <Item
                slug={slug}
                author={author}
                title={title}
                subtitle={subtitle}
                date={date}
                coverImage={coverImage}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${slug}`,
                }}
              />
            </Col>
          );
        }
      );
    },
    // Here you will compute offset that will get passed into preview
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      return 0;
    }
  );
};
