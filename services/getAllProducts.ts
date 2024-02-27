import { client } from "@/sanity/lib/client";

export default async function getAllProducts() {
  const query = `*[_type == 'products'] {
    _id,
    category,
    description,
    series,
    "productHeroImage": productHeroImage->{Mobile, title, description, Dekstop},
    "series": series[]->{
      seriesTitle,
      Description,
      "products": singleProducts[]->{
        _id,
        mainImage{alt,asset},
        productTitle,
        subTitle,
        price,
        'currentSlug': slug.current
      }
    },
  } `;
  const data = await client.fetch(query);

  return data;
}
