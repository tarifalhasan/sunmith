import Image from "next/image";

const OurProducts = () => {
  return (
    <section id="our_products" className=" py-10 sm:py-12">
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
        className=" mt-[30px] relative overflow-hidden  min-h-[700px] bg-p_bg_lg bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "100% 100%",
        }}
      >
        <div className=" absolute w-full h-full">
          <div className=" container flex flex-col gap-10 xl:flex-row w-full h-full  xl:items-center justify-between">
            <div className=" flex-1 bg-white/40 h-[539px] rounded-[20px]"></div>
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
      </div>
    </section>
  );
};

export default OurProducts;
