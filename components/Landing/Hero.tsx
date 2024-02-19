"use client";

import { BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

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
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="heroSwiper"
      >
        <SwiperSlide>
          <div
            className="  relative overflow-hidden min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px] bg-contain block m-0   bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero/1.png')`,
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 100%",
            }}
          >
            <div className=" container relative w-full h-full min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px]">
              <div className="container absolute  top-1/2 -translate-y-1/2  mx-auto  px-4 w-full left-0 ">
                <div className="xl:space-y-7 space-y-3">
                  <h2 className="font-bold text-center font-sans lg:text-left text-2xl sm:text-4xl xl:text-5xl text-white">
                    SUNMI hyper Wi-Fi
                  </h2>
                  <p className="max-w-[542px] text-white mx-auto lg:mx-0 font-sans text-lg text-center lg:text-left xl:text-xl  font-normal">
                    Stay connected wherever your business{" "}
                    <br className=" hidden xl:block" /> takes you
                  </p>
                  <div className="flex text-white justify-center lg:justify-start">
                    <button className=" inline-flex items-center  hover:gap-1 transition-all duration-300 hover:text-primary outline-none focus:outline-none">
                      <span>Learn More</span>{" "}
                      <BiChevronRight className=" w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="  relative overflow-hidden min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px] bg-contain block m-0   bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero/2.jpg')`,
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="container relative w-full h-full min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px]">
              <div className="container   absolute top-1/2 -translate-y-1/2 mx-auto  px-4 w-full left-0 ">
                <div className=" space-y-2 xl:space-y-6">
                  <p className="max-w-[542px] text-white mx-auto lg:mx-0 font-sans text-lg text-center lg:text-left xl:text-xl  font-normal">
                    Smart Desktop Terminal
                  </p>
                  <h2 className="font-bold text-center font-sans lg:text-left text-2xl sm:text-4xl xl:text-5xl text-primary">
                    SUNMI D3 MINI
                  </h2>
                  <p className="max-w-[542px] text-white mx-auto lg:mx-0 font-sans text-lg text-center lg:text-left xl:text-xl  font-normal">
                    Compact,loaded with features.
                  </p>
                  <div className="flex text-white justify-center lg:justify-start">
                    <button className=" inline-flex items-center  hover:gap-1 transition-all duration-300 hover:text-primary outline-none focus:outline-none">
                      <span>Learn More</span>{" "}
                      <BiChevronRight className=" w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="  relative overflow-hidden min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px] bg-cover bg-center block m-0   bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero/3.png')`,
              // backgroundPosition: "100% 50%",
            }}
          >
            <div className="container relative w-full h-full min-h-[450px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[550px]">
              <div className="container  mb-6  absolute top-1/2 -translate-y-1/2 mx-auto py-28 md:py-[9rem] px-4 w-full left-0 "></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
