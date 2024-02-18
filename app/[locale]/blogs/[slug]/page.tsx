import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dateFormat } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import getBlogDetails from "@/services/getBlogDetails";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { PostType } from "@/types";
import BlockContent from "@sanity/block-content-to-react";

export const revalidate = 30; // revalidate at most 30 seconds

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const data: PostType = await getBlogDetails(params.slug);

  return (
    <div className="  min-h-screen bg-white">
      <div className="  container xl:max-w-[800px] ">
        <div className=" py-4 ">
          <span
            style={{
              background: "rgba(244, 0, 16, 0.05)",
            }}
            className=" bg-[]  capitalize px-3 py-2 border border-red/20 text-sm font-medium"
          >
            {data?.category.title}
          </span>
        </div>
        <h2 className=" py-5">{data.title}</h2>
        <div className="flex pt-6 items-center gap-6">
          {data.author && (
            <div className=" inline-flex items-center gap-2">
              <Avatar>
                <AvatarImage src={urlForImage(data.author.image)} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p className=" capitalize text-sm xl:text-base font-medium text-neutral-500">
                {data.author.name}
              </p>
            </div>
          )}
          <p className=" text-sm xl:text-base font-medium text-neutral-500">
            {dateFormat(data.publishedAt)}
          </p>
        </div>
        <div className=" py-8">
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={urlForImage(data.mainImage)}
                alt="Image"
                width={1250}
                height={450}
                className="rounded-md w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="prose  py-12 prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <BlockContent
            projectId="rayftqxv"
            dataset="production"
            blocks={data?.body}
          />
        </div>
      </div>
    </div>
  );
}
