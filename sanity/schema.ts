import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import gallery from "./schemas/gallery";
import post from "./schemas/post";
import productHeroImage from "./schemas/products/productHeroImage";
import products from "./schemas/products/products";
import series from "./schemas/products/series";
import singleProduct from "./schemas/products/singleProduct";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    products,
    productHeroImage,
    series,
    singleProduct,
    gallery,
  ],
};
