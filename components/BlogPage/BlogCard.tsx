"use client";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";

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
  description,
}) => {
  return (
    <div className=" w-full">
      <div className="w-full relative overflow-hidden mx-auto">
        <Link
          href={`/blogs/${currentSlug}`}
          className=" w-full relative mx-auto"
        >
          <div className=" relative overflow-hidden">
            <Image
              src={urlForImage(mainImage)}
              alt={title}
              width={478}
              height={320}
              className="rounded-md "
            />
          </div>
        </Link>
      </div>
      <div className=" pt-5 inline-flex items-center gap-1">
        <LuClock4 className=" w-6 h-6  text-black opacity-40" />
        <p className="text-base font-medium text-black opacity-40">
          {dateFormat(publishedAt)}
        </p>
      </div>
      <div>
        <div>
          <h2 className=" text-center text-xl xl:text-2xl font-bold text-black">
            {title}
          </h2>
        </div>
        <div>
          <p className=" text-sm   xl:text-base text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
