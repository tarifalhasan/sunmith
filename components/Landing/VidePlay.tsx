"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "../ui/button";

const VidePlay = () => {
  const local = useLocale();
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (openVideo) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [openVideo]);

  return (
    <div className="relative my-10">
      <video
        ref={videoRef}
        src="https://www.youtube.com/embed/LXb3EKWsInQ"
        className="w-full h-full bg-cover object-cover"
        controls
      ></video>
      {!openVideo && (
        <div
          onClick={() => setOpenVideo((prev) => !prev)}
          className="z-50 cursor-pointer absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={"/icons/play.svg"}
            alt="play_video"
            className="max-w-[40%] sm:max-w-[70%] xl:max-w-[95%] block mx-auto"
            width={144}
            height={144}
          />
        </div>
      )}
      {openVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[400px] xl:max-w-[535px] rounded-[16px] p-4 bg-white/60">
            <h2 className="text-center sm:text-left text-2xl text-primary font-sans font-bold">
              SUNMI V2
            </h2>
            <p className="text-center sm:text-left font-sans font-normal text-base">
              {local === "en"
                ? "As the official importer and distributor of SUNMI brand products, we have a professional team that has received extensive training to provide guidance, usage instructions, and post-sales consultation services to troubleshoot product-related issues. Our aim is to help your business run smoothly and deliver the best service to our customers nationwide. SUNMI's innovative products meet global standards."
                : "เป็นผู้นำเข้าและจัดจำหน่ายสินค้าอย่างเป็นทางการ ของแบรนด์ SUNMI ทางเรามีทีมงานผู้เชี่ยวชาญ ที่ได้รับการฝึกอบรมมาอย่างมืออาชีพให้คำแนะนำ การใช้งานและบริการให้คำปรึกษาหลังการขายในการ แก้ไขปัญหา การใช้งานสินค้า เพื่อช่วยให้ธุรกิจของท่าน ดำเนินไปได้ อย่างราบรื่นและมอบการบริการที่ดีที่สุด ให้แก่ลูกค้าของเราจากทั่วทั้งประเทศ สินค้านวัตกรรม ของทาง SUNMI ได้รับมาตรฐานระดับโลก"}
            </p>
            <Button className="gap-2 hover:gap-x-4 transition-all duration-300 rounded-full px-5">
              {local === "en" ? "Buy now" : "ซื้อเลย "}
              <IoChevronForward className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VidePlay;
