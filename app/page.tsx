import Categorys from "@/components/Landing/Category";
import Hero from "@/components/Landing/Hero";
import OurProducts from "@/components/Landing/OurProducts";
import OurServices from "@/components/Landing/OurServices";
import Products from "@/components/Landing/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Categorys />
      <OurProducts />
      <OurServices />
      <Products />
    </>
  );
}
