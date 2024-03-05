import CartButton from "@/components/common/CartButton";
import ProductsHero from "@/components/pages/products/ProductHero";
import { urlForImage } from "@/sanity/lib/image";
import getAllProducts from "@/services/getAllProducts";
import Image from "next/image";
import Link from "next/link";
// types
interface IProdcuts {
  productHeroImage: {
    title: string;
    description: string;
    Mobile: any;
    Dekstop: any;
  };
  series: series[];
  _id: string;
}

interface series {
  _id: string;
  seriesTitle: string;
  Description: string;
  products: Iproduct[];
}

export interface Iproduct {
  _id: string;
  productTitle: string;
  price: number;
  mainImage: {
    asset: any;
    alt: string;
  };
  currentSlug: string;
  subTitle: string;
}
const ProductsPage = async () => {
  const products: IProdcuts[] = await getAllProducts();
  return (
    <section className=" pb-10 space-y-5 lg:space-y-8">
      {products.map((p, index) => (
        <div key={p._id || index}>
          <ProductsHero
            title={p.productHeroImage.title}
            description={p.productHeroImage.description}
            images={{
              mobile: urlForImage(p.productHeroImage.Mobile),
              desktop: urlForImage(p.productHeroImage.Dekstop),
            }}
          />

          <div>
            {p.series.map((series, index) => (
              <div key={series._id || index} className=" relative container">
                <div className=" py-5 lg:py-10">
                  <div>
                    <span className=" text-lg sm:text-2xl font-roboto font-bold text-black">
                      {series.seriesTitle}
                    </span>
                  </div>
                  <div className=" pt-1 max-w-[600px]">
                    <span className=" text-sm font-normal opacity-[0.7]">
                      {series.Description}
                    </span>
                  </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                  {series.products.map((product, index) => (
                    <div key={product._id || index}>
                      <div className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <Link
                          className=" block w-full"
                          href={`/products/${product.currentSlug}`}
                        >
                          {/* <div className=" relative overflow-hidden h-[260px]">
                            <img
                              className=" scale-100 transition-all duration-300  hover:scale-110   h-auto block mx-auto "
                              quality={80}
                              src={urlForImage(product.mainImage.asset)}
                              alt={product.mainImage.alt}
                            />
                          </div> */}
                          <div className="  flex justify-center w-full">
                            <div className=" w-[10rem] h-[10rem]  flex justify-center">
                              <Image
                                width={260}
                                height={200}
                                src={urlForImage(product.mainImage.asset)}
                                alt={product.mainImage.alt}
                                className="rounded-md max-w-[210px] w-full  block mx-auto object-cover"
                              />
                            </div>
                          </div>
                        </Link>
                        <Link href={`/products/${product.currentSlug}`}>
                          <h2 className="text-3xl my-5">
                            {product.productTitle}
                          </h2>
                          <p className="mb-2">{product.subTitle}</p>
                          <h3 className="font-semibold mb-3">
                            ${product.price}
                          </h3>
                        </Link>
                        <CartButton
                          name={product.productTitle}
                          price={product.price}
                          feturesImage={urlForImage(product.mainImage.asset)}
                          slug={product.currentSlug}
                          title=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
