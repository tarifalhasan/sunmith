"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose, IoNotifications } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "../ui/searchbar";

const MainHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState("ไทย");
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

  const onLanguagesChanges = (value: string) => {
    setLanguage(value);
  };

  return (
    <header
      className={cn(
        !header || nav
          ? " bg-transparent py-4 shadow-none  "
          : " shadow-none border-b backdrop-blur-sm bg-white/[0.8] dark:bg-black/[0.6] border-neutral-200 border-white/[0.1] ",
        "  top-0 w-full mx-auto z-40 py-5 fixed transition-all duration-300 h-[81px]",
        nav && "bg-white/[0.9]"
      )}
    >
      <div className=" px-4 xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex gap-x-6 items-center justify-between w-full">
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
                nav ? " py-8 xl:py-0  xl:px-0" : "max-h-0 xl:max-h-max w-full",
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
                <span className=" w-3 h-3 rounded-full bg-white absolute right-0 flex items-center text-[10px] text-skin-status-600 font-normal justify-center -top-1">
                  1
                </span>
              </button>
              <button className=" relative ">
                <IoNotifications className=" w-7 h-7 text-primary" />
                <span className=" w-3 h-3 rounded-full bg-white absolute right-0 flex items-center text-[10px] text-skin-status-600 font-normal justify-center -top-1">
                  1
                </span>
              </button>
            </div>
            <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
            <div className=" inline-flex items-center gap-5">
              <Select
                value={language}
                onValueChange={(value) => onLanguagesChanges(value)}
              >
                <SelectTrigger className=" w-[100px] bg-transparent border-none focus:outline-none focus:ring-0 focus:ring-offset-0 ">
                  <div className=" inline-flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={
                          language === "en"
                            ? "/icons/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png"
                            : "/icons/Flag_of_Thailand.png"
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className=" uppercase text-base font-normal text-skin-neutral-600">
                      {language}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="en">Eng</SelectItem>
                  <SelectItem value="ไทย">ไทย</SelectItem>
                </SelectContent>
              </Select>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              " flex  flex-col items-center w-full bg-background/90  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5"
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
                    <span className=" w-3 h-3 rounded-full bg-white absolute right-0 flex items-center text-[10px] text-skin-status-600 font-normal justify-center -top-1">
                      1
                    </span>
                  </button>
                  <button className=" relative ">
                    <IoNotifications className=" w-7 h-7 text-primary" />
                    <span className=" w-3 h-3 rounded-full bg-white absolute right-0 flex items-center text-[10px] text-skin-status-600 font-normal justify-center -top-1">
                      1
                    </span>
                  </button>
                </div>
                <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
                <div className=" inline-flex items-center gap-5">
                  <Select
                    value={language}
                    onValueChange={(value) => onLanguagesChanges(value)}
                  >
                    <SelectTrigger className=" w-[100px] bg-transparent border-none focus:outline-none focus:ring-0 focus:ring-offset-0 ">
                      <div className=" inline-flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={
                              language === "en"
                                ? "/icons/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png"
                                : "/icons/Flag_of_Thailand.png"
                            }
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className=" uppercase text-base font-normal text-skin-neutral-600">
                          {language}
                        </span>
                      </div>
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectItem value="en">Eng</SelectItem>
                      <SelectItem value="ไทย">ไทย</SelectItem>
                    </SelectContent>
                  </Select>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
