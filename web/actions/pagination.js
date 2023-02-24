import { Col } from "react-bootstrap";
import ListItem from "@/components/ListItem";
import Item from "@/components/Item";
import { useSWRPages } from "swr";
import { useGetBlogs } from "./";

export const useGetBlogsPages = ({ blogs, filter }) => {
  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;
      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset }, initialData)
      );

      if (!paginatedBlogs) {
        return "Loading...";
      }

      return paginatedBlogs.map(
        ({ title, subtitle, date, coverImage, slug, author }) => {
          return filter.view.list ? (
            <Col key={slug} md="10">
              <ListItem
                author={author}
                title={title}
                subtitle={subtitle}
                date={date}
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
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 3;
    },
    [filter]
  );
};
