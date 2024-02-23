import CartButton from "@/components/common/CartButton";
import ProductsHero from "@/components/pages/products/ProductHero";
import { urlForImage } from "@/sanity/lib/image";
import getAllProducts from "@/services/getAllProducts";
import Image from "next/image";
import Link from "next/link";

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
  products: products[];
}

interface products {
  _id: string;
  productTitle: string;
  price: number;
  featuresImage: any;
  curentSlug: string;
  subTitle: string;
}
const ProductsPage = async () => {
  const products: IProdcuts[] = await getAllProducts();

  return (
    <section className=" pb-10 space-y-5 lg:space-y-8">
      {products.map((p, index) => (
        <div key={p._id}>
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
              <div key={series._id} className=" relative container">
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
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {series.products.map((product, index) => (
                    <div
                      style={{
                        background: "rgb(240, 240, 240)",
                      }}
                      key={product._id}
                      className=" py-6"
                    >
                      <div>
                        <div className="flex items-center justify-end pr-4">
                          <CartButton
                            name={product.productTitle}
                            price={product.price}
                            feturesImage={urlForImage(product.featuresImage)}
                            slug={product.curentSlug}
                            title=""
                          />
                        </div>
                        <Link href={`/products/${product.curentSlug}`}>
                          <div className=" h-[260px]  relative overflow-hidden">
                            <Image
                              className=" w-full scale-100 transition-all duration-300  hover:scale-110 h-auto block mx-auto "
                              height={100}
                              width={260}
                              quality={80}
                              src={urlForImage(product.featuresImage)}
                              alt={product.productTitle}
                            />
                          </div>
                          <div className="   text-center">
                            <div>
                              <span className=" text-xl font-roboto font-bold">
                                {product.productTitle}
                              </span>
                            </div>
                            <div>
                              <span
                                className=" text-base font-roboto font-normal"
                                style={{
                                  color: "rgb(102, 102, 102)",
                                }}
                              >
                                {product.subTitle}
                              </span>
                            </div>
                          </div>
                        </Link>
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
