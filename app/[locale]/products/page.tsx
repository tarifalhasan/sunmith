import ProductsHero from "@/components/pages/products/ProductHero";
import { dummyProductsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <section className=" pb-10">
      {dummyProductsData.map((item, index) => (
        <div key={index}>
          <div className=" mx-auto">
            <ProductsHero
              title={item.category}
              description={item.description}
              images={{
                mobile: item.hero_images.mobile,
                desktop: item.hero_images.desktop,
              }}
            />
            {item.series.map((series, index) => (
              <div key={series.id} className=" relative container">
                <div className=" py-5 lg:py-10">
                  <div>
                    <span className=" text-lg sm:text-2xl font-roboto font-bold text-black">
                      {series.name}
                    </span>
                  </div>
                  <div className=" pt-1 max-w-[600px]">
                    <span className=" text-sm font-normal opacity-[0.7]">
                      {series.description}
                    </span>
                  </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {series.products.map((product, index) => (
                    <Link
                      href={`/products/${product.slug}`}
                      style={{
                        background: "rgb(240, 240, 240)",
                      }}
                      key={product.slug}
                      className=" py-6"
                    >
                      <div className=" h-[260px]  relative overflow-hidden">
                        <Image
                          className=" w-full scale-100 transition-all duration-300  hover:scale-110 h-auto block mx-auto "
                          height={100}
                          width={260}
                          quality={80}
                          src={product.feturesImage}
                          alt={product.title}
                        />
                      </div>
                      <div className="   text-center">
                        <div>
                          <span className=" text-xl font-roboto font-bold">
                            {product.name}
                          </span>
                        </div>
                        <div>
                          <span
                            className=" text-base font-roboto font-normal"
                            style={{
                              color: "rgb(102, 102, 102)",
                            }}
                          >
                            {product.title}
                          </span>
                        </div>
                      </div>
                    </Link>
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
