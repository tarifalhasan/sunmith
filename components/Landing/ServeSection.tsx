import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "../ui/button";

const ServeSection = () => {
  const features = [
    {
      icon: "/icons/features/trophy.svg",
      title: "จำหน่าย",
      des: (
        <p className="text-xs sm:text-xl font-sans font-medium text-skin-neutral-600 text-center">
          พร้อมบริการ! จำหน่าย สินค้าของ <br className=" hidden sm:block" />{" "}
          <b>SUNMI</b> ทุกรุ่นทุกแบบ
        </p>
      ),
    },
    {
      icon: "/icons/features/check.svg",
      title: " รับประกัน",
      des: (
        <p className="text-xs sm:text-xl font-sans font-medium text-skin-neutral-600 text-center">
          ทีมงานผู้เชี่ยวชาญของเรา <br className=" hidden sm:block" />
          ที่พร้อมจะดูแลให้ธุรกิจของท่าน
        </p>
      ),
    },
    {
      icon: "/icons/features/shipping.svg",
      title: "บริการซ่อมบำรุง",
      des: (
        <p className="text-xs sm:text-xl font-sans font-medium text-skin-neutral-600 text-center">
          เริ่มต้นธุรกิจอย่างไม่ติดขัด <br className=" hidden sm:block" /> ด้วย{" "}
          <b>SUNMI OS SYSTEM</b>
        </p>
      ),
    },
    {
      icon: "/icons/features/customer-support.svg",
      title: "บริการหลังการขาย",
      des: (
        <p className="text-xs sm:text-xl font-sans font-medium text-skin-neutral-600 text-center">
          บริการติดต่อสอบถาม
          <br className=" hidden sm:block" /> ปัญหาตลอด <b>24</b> ชั่วโมง
        </p>
      ),
    },
  ];
  return (
    <section className="">
      <div className=" bg-[#f3f5f7] py-8">
        <div className=" container">
          <div className=" space-y-7">
            <h2 className=" text-center text-3xl font-sans font-bold lg:text-[2.5rem]  ">
              บริการ
            </h2>
            <p className="text-center text-base  lg:font-semibold font-sans font-medium text-skin-neutral-700">
              <b>SUNMI TH </b>มีเจ้าหน้าที่บริการหลังการขายให้การดูแลตลอด{" "}
              <b>24</b> ชั่วโมง เพื่อให้ความช่วยเหลือเจ้าของร้าน ให้ข้อมูล
              แนะนำการใช้เครื่อง รวมถึงการจัดการทุกๆ อย่าง มีศูนย์บริการ
              มีเครื่องซ่อมระหว่างใช้ รวมถึงมี <b>Remote assistance </b>
              ในการเข้าถึงตัวเครื่องเสมือนทีมเจ้าหน้าที่เข้าถึงหน้าจอลูกค้า
              ช่วยเหลือแก้ไขปัญหาได้ทันที
            </p>
            <Button className=" h-[60px] px-10 mx-auto block rounded-full font-sans font-bold text-xl lg:text-2xl">
              เริ่มกันเลย
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
          {features.map((item, index) => (
            <div key={index} className=" space-y-4 flex flex-col items-center">
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
              <div>{item.des}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServeSection;
