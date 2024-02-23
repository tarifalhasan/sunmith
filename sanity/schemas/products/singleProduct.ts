import { defineField, defineType } from "sanity";

export default defineType({
  name: "singleProduct",
  title: "Product in Series",
  type: "document",
  fields: [
    defineField({
      name: "featuresImage",
      title: "Features Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "productTitle",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productTitle",
        maxLength: 96,
      },
    }),
  ],
});
