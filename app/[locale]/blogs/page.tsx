import BlogCard from "@/components/BlogPage/BlogCard";
import getAllBlogs from "@/services/getAllBlogs";
import { IBlogCardType } from "@/types";

const Blogs = async () => {
  const data: IBlogCardType[] = await getAllBlogs();

  console.log(data);
  return (
    <section className="min-h-screen bg-white">
      <div className=" mb-9 mt-5 bg-black py-4 flex items-center justify-center">
        <p className=" text-white text-base font-medium text-center lg:text-xl">
          Over $1.5m in $WSM bought back so far!
        </p>
      </div>
      <div className=" container py-10">
        <h2 className=" pt">All Blogs</h2>
        {data && (
          <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {data?.map((item, index) => (
              <BlogCard
                key={index}
                mainImage={item.mainImage}
                title={item.title}
                publishedAt={item.publishedAt}
                category={item.category.title}
                currentSlug={item.currentSlug}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
