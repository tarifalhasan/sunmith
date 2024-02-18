"use client";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { dateFormat } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import { IBlogCardType } from "@/types";
import Link from "next/link";
import { FC } from "react";

const BlogCard: FC<IBlogCardType> = ({
  title,
  mainImage,
  category,
  publishedAt,
  currentSlug,
}) => {
  return (
    <div className=" relative overflow-hidden">
      <AspectRatio ratio={3 / 2}>
        <Image
          src={urlForImage(mainImage)}
          alt={title}
          width={450}
          height={300}
          className="rounded-md object-cover h-[240px]"
        />
      </AspectRatio>
      <div className=" pt-5 inline-flex items-center gap-1">
        <LuClock4 className=" w-6 h-6  text-black opacity-40" />
        <p className="text-base font-medium text-black opacity-40">
          {dateFormat(publishedAt)}
        </p>
      </div>
      <Link href={`/blogs/${currentSlug}`}>
        <h2 className=" text-xl xl:text-2xl font-bold text-black">{title}</h2>
      </Link>
      <div className=" absolute top-1 left-2">
        <div className=" inline-flex items-center gap-x-2 rounded-full py-[6px] px-3 text-sm font-medium bg-white text-black">
          {category}
          <span className="block w-2 h-2 rounded-full  bg-yellow-50"></span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
