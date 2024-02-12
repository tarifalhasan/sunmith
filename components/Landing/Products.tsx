import { getProducts } from "@/services/products";
import Image from "next/image";
import ProductCard from "../common/ProductCard";

interface IProduct {
  image: string;
  title: string;
  desciption: string;
  reviews: string[];
  price: number;
  discount: number;
  id: string;
}
const Products = async () => {
  const products = await getProducts();

  return (
    <div className=" py-16 container">
      <div className=" py-7 mx-auto max-w-[246px] ">
        <Image
          src={"/images/POS Product.svg"}
          alt=""
          className=" block mx-auto"
          width={160}
          height={48}
        />
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products &&
          products.map((product: IProduct, index: number) => (
            <ProductCard
              title={product.title}
              desciption={product.desciption}
              discount={product.discount}
              price={product.price}
              features_image={product.image}
              reviews={product.reviews as any}
              key={product.id + index}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
