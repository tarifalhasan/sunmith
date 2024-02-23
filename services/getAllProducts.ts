import { client } from "@/sanity/lib/client";

export default async function getAllProducts() {
  const query = ` *[_type == 'products'] {
    _id,
    category,
    description,
   series,
      "productHeroImage": productHeroImage->{Mobile, title, description,Dekstop},
              "series": series[]->{seriesTitle,Description,"products":singleProducts[]->{
               featuresImage,productTitle,subTitle,price,'curentSlug':slug.current
              }},

  }
  `;
  const data = await client.fetch(query);

  return data;
}
