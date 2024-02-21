"use client";

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";

import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
export default function Hero() {
  const data = [
    {
      mobile: "https://pic.cdn.sunmi.com/IMG/1705209607509465a36f077c5f5.jpg",
      desktop: "https://pic.cdn.sunmi.com/IMG/1705209506960065a36ea2ea5f9.jpg",
    },
    {
      mobile: "https://pic.cdn.sunmi.com/IMG/1705209665482665a36f4175d03.jpg",
      desktop: "https://pic.cdn.sunmi.com/IMG/1705209656629465a36f3899ab4.jpg",
    },
    {
      mobile: "https://pic.cdn.sunmi.com/IMG/1705210796367665a373ac59bec.jpg",
      desktop: "https://pic.cdn.sunmi.com/IMG/1705210756094165a3738416fc3.jpg",
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="heroSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={"/"}>
              <div
                className=" bg-cover flex  flex-col"
                style={{
                  backgroundImage: `url(${
                    isMobile ? item.mobile : item.desktop
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: isMobile ? "625px" : "700px",
                }}
              ></div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
