import { Skeleton } from "@/components/ui/skeleton";
import getAllBlogs from "@/services/getAllBlogs";
import { IBlogCardType } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunmi Official Blogs",
  description:
    "SunmiOfficial Blogs are available in the following formats and formats that are available in the official website",
  keywords: ["sunmi", "other keywords"],
  openGraph: {
    images: "/images/SUNMI TH Care +.png",
  },
};

const Blogs = async () => {
  const data: IBlogCardType[] = await getAllBlogs();
  return (
    <section className="min-h-screen bg-white">
      <div className=" bg-slate-200 py-10 xl:py-24">
        <h2 className=" text-2xl font-bold sm:text-4xl xl:text-6xl font-roboto text-center text-primary">
          Blogs
        </h2>
      </div>
      <div className=" container py-10">
        <div className="grid  sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={item._id} className=" w-full">
              <>
                <div className=" relative">
                  <Skeleton className=" w-full h-[320px] rounded-lg" />
                </div>
              </>
              <div className="pt-2 space-y-2  text-center">
                <h2 className="text-xl font-roboto xl:text-2xl font-bold text-[#54595f]">
                  <Skeleton className=" w-full h-[20px] rounded-lg" />
                </h2>
                <div>
                  <span className="text-sm font-roboto font-normal text-[#adadad]">
                    <Skeleton className=" w-full h-[20px] rounded-lg" />
                  </span>
                </div>
                <p className="text-sm font-roboto font-normal text-[#777] xl:text-base text-center">
                  <Skeleton className=" w-full h-[340px] rounded-lg" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
