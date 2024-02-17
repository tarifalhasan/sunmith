"use client";
import ReactPlayer from "react-player";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLocale } from "next-intl";
import Image from "next/image";

import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "../ui/button";

const VidePlay = () => {
  const local = useLocale(); // local return th and en value
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url('/images/screen-4-content-1 3.png')",
        backgroundPosition: "100% 100%",
      }}
      className=" bg-cover my-10 relative overflow-hidden   min-h-[180px] sm:min-h-[350px] lg:min-h-[592px]"
    >
      <div
        onClick={() => setOpenVideo((prev) => !prev)}
        className="  z-50  cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
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
      <Dialog open={openVideo} onOpenChange={setOpenVideo}>
        <DialogContent className=" flex  max-w-[1100px]">
          <div className=" p-2 h-[calc(40vh-100px)] sm:h-[70vh-100px] lg:h-[calc(60vh-100px)] sm:p-4 w-full">
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VidePlay;
