import { client } from "@/sanity/lib/client";

export default async function getBlogDetails(slug: string) {
  const query = `
      *[_type == "post" && slug.current == '${slug}'] {
          "currentSlug": slug.current,
            title,
            mainImage,
           publishedAt,
           category-> {
            title
          },
            body,

            author->{
              name,
              image,
            },
        }[0]`;

  const data = await client.fetch(query);
  return data;
}
