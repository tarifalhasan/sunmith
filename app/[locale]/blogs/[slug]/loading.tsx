import { Skeleton } from "@/components/ui/skeleton";
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
  return (
    <section className="min-h-screen bg-white">
      <div className=" w-full">
        <>
          <div className=" relative">
            <Skeleton className=" w-full h-[30vh] rounded-lg" />
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
    </section>
  );
};

export default Blogs;
