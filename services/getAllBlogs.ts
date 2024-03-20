import { client } from "@/sanity/lib/client";

export default async function getAllBlogs() {
  // const query = `
  // *[_type == 'post'] | order(_createdAt desc) {
  //     title,
  //       "currentSlug": slug.current,
  //       mainImage,
  //       description,
  //        publishedAt,
  //        category-> {
  //         title
  //       },
  //   }`;

  const query = `*[_type == "post" ] | order(_createdAt desc){
      _id,
      title,
      description,
      "currentSlug": slug.current,
      author-> {
        _id,
        name,
      },
      mainImage,
      category-> {
        title
      },
      publishedAt,
      body,
    }`;

  const data = await client.fetch(query);

  return data;
}
