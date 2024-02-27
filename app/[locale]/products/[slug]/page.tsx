import CartButton from "@/components/common/CartButton";
import { urlForImage } from "@/sanity/lib/image";
import getSingleProduct from "@/services/getSingleProduct";
import Image from "next/image";
import { Iproduct } from "../page";

const ProductsDetails = async ({ params }: { params: { slug: string } }) => {
  const data: Iproduct = await getSingleProduct(params.slug);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className=" mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {data?.productTitle}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>

            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                {data?.price}$
              </span>
              <div className="flex items-center gap-2">
                <CartButton
                  name={data?.productTitle}
                  price={data?.price}
                  feturesImage={urlForImage(data.mainImage.asset)}
                  slug={data.currentSlug}
                  title=""
                />
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  w-full  lg:h-[40rem]  object-cover object-center rounded">
            <Image
              width={600}
              height={300}
              quality={80}
              alt={data.mainImage.alt}
              className="  w-full max-w-[800px] block mx-auto h-full"
              src={urlForImage(data.mainImage.asset)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
