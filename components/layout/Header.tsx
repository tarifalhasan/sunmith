"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose, IoNotifications } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import LocaleSwitcher from "../common/LandguageSwicher";
import SearchBar from "../ui/searchbar";

const MainHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const Links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products ",
      href: "/products",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "About us",
      href: "/about_us",
    },
    {
      label: "Contact us",
      href: "/contact_us",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className=" relative w-full overflow-hidden">
      <div
        className={cn(
          !header || nav
            ? " bg-transparent py-4 shadow-none  "
            : " shadow-none border-b backdrop-blur-sm bg-white/[0.8] dark:bg-black/[0.6] border-neutral-200 border-white/[0.1] ",
          "  top-0 w-full mx-auto z-[9999] fixed py-5  transition-all duration-300 h-[81px] ",
          nav && "bg-white/[0.9]"
        )}
      >
        <div className="  xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex px-4 gap-x-6 items-center justify-between w-full">
            <div className=" inline-flex items-center gap-x-20">
              <Link href={"/"}>
                <Image
                  src={"/images/Shanghai-Sunmi-Technology-LOGO.svg"}
                  alt="Shanghai-Sunmi-Technology-LOGO"
                  width={139}
                  height={26}
                />
              </Link>
              <ul
                className={cn(
                  nav
                    ? " py-8 xl:py-0  xl:px-0"
                    : "max-h-0 xl:max-h-max w-full",
                  "  hidden xl:flex flex-col items-center w-full  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5"
                )}
              >
                {Links.map((link, index) => (
                  <li
                    className={cn(
                      "relative text-base font-medium  text-skin-neutral-600 dark:text-white/95 "
                    )}
                    key={index}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden xl:inline-flex items-center gap-5">
              <div className=" inline-flex items-center gap-x-5 ">
                <SearchBar />
                <button className=" relative ">
                  <MdShoppingCart className=" w-7 h-7 text-primary" />
                  <span className=" w-4 h-4 rounded-full bg-white absolute right-0 flex items-center text-[10px] font-roboto font-medium  text-skin-status-600 justify-center -top-1">
                    01
                  </span>
                </button>
                <button className=" relative ">
                  <IoNotifications className=" w-7 h-7 text-primary" />
                  <span className=" w-4 h-4 rounded-full bg-white absolute right-0 flex items-center  font-roboto font-medium text-[10px] text-skin-status-600  justify-center -top-1">
                    01
                  </span>
                </button>
              </div>
              <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
              <div className=" inline-flex items-center gap-5">
                <LocaleSwitcher />
              </div>
            </div>
            <div
              className=" xl:cursor-pointer xl:hidden"
              onClick={() => setNav((prev) => !prev)}
            >
              {nav ? (
                <IoClose className=" w-6 h-6 text-primary dark:text-white/95 " />
              ) : (
                <HiOutlineMenu className=" w-6 h-6 text-primary dark:text-white/95 " />
              )}
            </div>
          </div>
          {nav && (
            <ul
              className={cn(
                nav
                  ? " py-8 xl:py-0  xl:px-0"
                  : "max-h-0 xl:max-h-max w-full bg-background",
                " flex  flex-col items-center w-full bg-background/90  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5 bg-white"
              )}
            >
              {Links.map((link, index) => (
                <li
                  className={cn(
                    "relative text-base font-medium  text-skin-neutral-600 dark:text-white/95 "
                  )}
                  key={index}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <div className=" xl:hidden flex flex-col items-center gap-5">
                  <div className=" inline-flex items-center gap-x-5 ">
                    <SearchBar />
                    <button className=" relative ">
                      <MdShoppingCart className=" w-7 h-7 text-primary" />
                      <span className=" w-4 h-4 rounded-full bg-white absolute right-0 flex items-center text-[10px]  text-skin-status-600  justify-center font-medium font-roboto -top-1">
                        01
                      </span>
                    </button>
                    <button className=" relative ">
                      <IoNotifications className=" w-7 h-7 text-primary" />
                      <span className=" w-4 h-4 rounded-full bg-white absolute right-0 flex items-center text-[10px] text-skin-status-600 font-roboto font-medium justify-center -top-1">
                        01
                      </span>
                    </button>
                  </div>
                  <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
                  <div className=" inline-flex items-center gap-5">
                    <LocaleSwitcher />
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
