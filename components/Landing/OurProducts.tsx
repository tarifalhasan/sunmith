import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import StaticProductCard1 from "../common/StaticProductCard1";

const OurProducts = () => {
  return (
    <section id="our_products" className="  w-full h-full  py-10 sm:py-12">
      <div>
        <div>
          <h2 className=" relative after:absolute after:w-[56px] after:h-[2px] after:bg-[#9A9A9A] after:left-1/2 text-center text-3xl font-sans font-bold lg:text-[2.5rem] after:-translate-x-1/2 after:top-[162%]">
            ผลิตภัณฑ์ของเรา
          </h2>
        </div>
        <p className=" max-w-[1000px] mx-auto pt-[40px] sm:pt-[60px] text-center text-base lg:text-lg lg:font-semibold font-sans font-medium text-skin-neutral-700">
          สินค้านวัตกรรมของทาง <b>SUNMI</b> ได้รับมาตรฐานระดับโลก
          เรามีสินค้าหลากหลายรุ่นเพื่อรองรับทุกความต้องการ ไม่ว่าจะเป็นร้านค้า
          หรือร้านอาหารขนาดเล็กไปจนถึงธุรกิจขนาดใหญ่ 
        </p>
      </div>
      <div
        className=" mt-[30px]   flex  h-full  bg-p_bg_lg bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "100% 100%",
        }}
      >
        <div className=" py-7 lg:py-14 container flex flex-col gap-10 xl:flex-row w-full h-full  xl:items-center justify-between">
          <div className="  p-4 xl:p-10 bg-white/40 rounded-[20px]">
            <div className=" px- lg:px-5 grid lg:grid-cols-2 gap-6">
              <StaticProductCard1
                prductImage="/images/products/1.svg"
                title="Boost your business abilities."
                productName="V2s"
                subTitle="Smart Mobile Terminal  "
                bg="/images/g1.png"
              />
              <StaticProductCard1
                prductImage="/images/products/sunmi-d3-mini_2-removebg-preview 1.svg"
                title="High-speed operation, stable and smooth."
                productName="D3 Mini"
                subTitle="Smart Desktop Terminal "
                bg="/images/g2.png"
              />
            </div>
            <div className="  mt-6  grid grid-cols-12 gap-6">
              <div
                style={{
                  backgroundImage: "url('/images/Remote Assistance.png')",
                }}
                className=" min-h-[226px] col-span-12 xl:col-span-5 bg-cover bg-center w-full flex flex-col items-center gap-4 p-6 bg-no-repeat rounded-[8px]"
              >
                <div>
                  <h2 className=" text-xl text-white font-bold lg:text-2xl font-roboto">
                    Remote Assistance
                  </h2>
                </div>
                <p className=" text-sm text-center lg:text-base font-sans font-normal text-white Troubleshoot, with no geographic restrictions.">
                  Troubleshoot, with no geographic restrictions.
                </p>
                <Link href={"/"}>
                  <button className=" transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-2 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal  font-roboto">
                    Learn more <FaArrowRight className=" w-[17px] h-[15px]" />
                  </button>
                </Link>
              </div>
              <div className=" grid col-span-12 xl:col-span-7  gap-6 lg:grid-cols-2">
                <div
                  style={{
                    backgroundImage: "url('/images/sunmit home.png')",
                  }}
                  className=" min-h-[226px] c bg-cover bg-center w-full  gap-4 p-6 bg-no-repeat rounded-[8px]"
                >
                  <div>
                    <h2 className=" text-xl text-white font-bold lg:text-2xl font-roboto">
                      SUNMI TH Home
                    </h2>
                  </div>
                  <Link href={"/"}>
                    <button className=" transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-2 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal  font-roboto">
                      Learn more <FaArrowRight className=" w-[17px] h-[15px]" />
                    </button>
                  </Link>
                </div>
                <div
                  style={{
                    backgroundImage: "url('/images/SUNMI TH Care +.png')",
                  }}
                  className=" min-h-[226px] c bg-cover bg-center w-full  gap-4 p-6 bg-no-repeat rounded-[8px]"
                >
                  <div>
                    <h2 className=" text-xl text-white font-bold lg:text-2xl font-roboto">
                      SUNMI TH Care +
                    </h2>
                  </div>
                  <Link href={"/"}>
                    <button className=" transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-2 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal  font-roboto">
                      Learn more <FaArrowRight className=" w-[17px] h-[15px]" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/ภาพถ่ายหน้าจอ_2567-02-10_เวลา_10.21 2.png"}
              alt="ภาพถ่ายหน้าจอ_2567-02-10_เวลา_10.21 2"
              width={356}
              height={371}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
