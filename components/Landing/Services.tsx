import features from "@/data/features.json";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "../ui/button";
const Services = () => {
  const t = useTranslations("Services");
  const local = useLocale(); // local return th and en value

  return (
    <section className="">
      <div className=" bg-[#f3f5f7] py-8">
        <div className=" container">
          <div className=" space-y-7">
            <p>{local}</p>
            <h2 className=" text-center text-3xl font-sans font-bold lg:text-[2.5rem]  ">
              {t("mainTitle")}
            </h2>
            <p className="text-center text-base  lg:font-semibold font-sans font-medium text-skin-neutral-700">
              {t("mainDescription")}
            </p>
            <Button className=" h-[60px] px-10 mx-auto block rounded-full font-sans font-bold text-xl lg:text-2xl">
              {t("buttonTxt")}
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/screen-4-content-1 3.png')",
          backgroundPosition: "100% 100%",
        }}
        className=" bg-cover my-10 relative overflow-hidden   min-h-[180px] sm:min-h-[350px] lg:min-h-[592px]"
      >
        <div className="  z-50  cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/icons/play.svg"}
            alt="play_video"
            className=" max-w-[40%] sm:max-w-[70%] xl:max-w-[95%] block mx-auto"
            width={144}
            height={144}
          />
        </div>
        <div className=" w-full h-full  z-10  absolute overflow-hidden hidden  lg:block">
          <div className=" w-full h-full overflow-hidden relative container ">
            <div className=" space-y-4  mt-10  absolute left-4 bottom-12   max-w-[400px] xl:max-w-[535px]  rounded-[16px] p-4 bg-white/60">
              <div>
                <h2 className=" text-center sm:text-left text-2xl text-primary font-sans font-bold">
                  SUNMI V2
                </h2>
              </div>
              <p className=" text-center sm:text-left font-sans font-normal text-base">
                {local === "en"
                  ? "As the official importer and distributor of SUNMI brand products, we have a professional team that has received extensive training to provide guidance, usage instructions, and post-sales consultation services to troubleshoot product-related issues. Our aim is to help your business run smoothly and deliver the best service to our customers nationwide. SUNMI's innovative products meet global standards."
                  : "เป็นผู้นำเข้าและจัดจำหน่ายสินค้าอย่างเป็นทางการ ของแบรนด์ SUNMI ทางเรามีทีมงานผู้เชี่ยวชาญ ที่ได้รับการฝึกอบรมมาอย่างมืออาชีพให้คำแนะนำ การใช้งานและบริการให้คำปรึกษาหลังการขายในการ แก้ไขปัญหา การใช้งานสินค้า เพื่อช่วยให้ธุรกิจของท่าน ดำเนินไปได้ อย่างราบรื่นและมอบการบริการที่ดีที่สุด ให้แก่ลูกค้าของเราจากทั่วทั้งประเทศ สินค้านวัตกรรม ของทาง SUNMI ได้รับมาตรฐานระดับโลก"}
              </p>
              <Button className=" gap-2 hover:gap-x-4 transition-all duration-300 rounded-full px-5">
                {local === "en" ? "Buy now" : "ซื้อเลย "}
                <IoChevronForward className=" w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4  flex flex-col items-center mt-10  lg:hidden   lg:max-w-[535px]  rounded-[16px] p-4 bg-white/60">
        <div>
          <h2 className=" text-center sm:text-left text-2xl text-primary font-sans font-bold">
            SUNMI V2
          </h2>
        </div>
        <p className=" text-center sm:text-left font-sans font-normal text-base">
          เป็นผู้นำเข้าและจัดจำหน่ายสินค้าอย่างเป็นทางการ ของแบรนด์ SUNMI
          ทางเรามีทีมงานผู้เชี่ยวชาญ
          ที่ได้รับการฝึกอบรมมาอย่างมืออาชีพให้คำแนะนำ
          การใช้งานและบริการให้คำปรึกษาหลังการขายในการ แก้ไขปัญหา
          การใช้งานสินค้า เพื่อช่วยให้ธุรกิจของท่าน ดำเนินไปได้
          อย่างราบรื่นและมอบการบริการที่ดีที่สุด
          ให้แก่ลูกค้าของเราจากทั่วทั้งประเทศ สินค้านวัตกรรม ของทาง SUNMI
          ได้รับมาตรฐานระดับโลก
        </p>
        <Button className=" gap-2 hover:gap-x-4 transition-all duration-300 rounded-full px-5">
          ซื้อเลย <IoChevronForward className=" w-4 h-4 text-white" />
        </Button>
      </div>
      <div className="  my-10 bg-skin-orange-200 py-10">
        <div className=" container grid grid-cols-2  xl:grid-cols-4 gap-7">
          {local === "en"
            ? features.en.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-4 flex flex-col items-center"
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={53}
                      height={60}
                    />
                  </div>
                  <h4 className=" text-primary text-lg sm:text-xl lg:text-2xl font-bold font-sans">
                    {item.title}
                  </h4>
                  <div
                    className=" text-center"
                    dangerouslySetInnerHTML={{ __html: item.des }}
                  />
                </div>
              ))
            : features.th.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-4 flex flex-col items-center"
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={53}
                      height={60}
                    />
                  </div>
                  <h4 className=" text-primary text-lg sm:text-xl lg:text-2xl font-bold font-sans">
                    {item.title}
                  </h4>
                  <div
                    className=" text-center"
                    dangerouslySetInnerHTML={{ __html: item.des }}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
