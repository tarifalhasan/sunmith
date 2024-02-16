"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination } from "swiper/modules";

export default function Hero() {
  const data = [
    {
      imageUrl: "/images/hero/2.jpg",
    },
    {
      imageUrl: "/images/hero/3.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="heroSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="  relative overflow-hidden min-h-[150px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px] bg-contain block m-0   pb-[30%] bg-no-repeat"
              style={{
                backgroundImage: `url('${item.imageUrl}')`,
                backgroundPosition: "100% 100%",
                backgroundSize: "100% 100%",
              }}
            >
              {/* <div className="container relative mx-auto py-28 md:py-48 px-4 w-full left-0 top-0">
                <div className="space-y-7">
                  <h2 className="font-bold text-center font-sans lg:text-left text-2xl sm:text-4xl xl:text-5xl">
                    {item.title}
                  </h2>
                  <p className="max-w-[542px] mx-auto lg:mx-0 font-sans text-lg text-center lg:text-left xl:text-xl font-bold">
                    {item.description}
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Button className="px-6 rounded-full bg-white text-primary hover:text-foreground lg:bg-primary lg:text-white lg:hover:text-white">
                      เรียนรู้เพิ่มเติม
                    </Button>
                  </div>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
