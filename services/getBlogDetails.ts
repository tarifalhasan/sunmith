import { client } from "@/sanity/lib/client";

export default async function getBlogDetails(slug: string) {
  const query = `
  *[_type == "post" && _id == '${slug}'] {
    title,
    mainImage,
    _id,
   publishedAt,
   category-> {
    title
  },
    body,
     description,
    author->{
      name,
      image,
    },
}[0]`;

  const data = await client.fetch(query);
  return data;
}
