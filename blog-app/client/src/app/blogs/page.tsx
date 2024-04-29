import Blog from "@/components/blog/Blog";
import { BlogInterface, getBlogsByCategoryName } from "@/services/blogService";
import React from "react";

const Blogs = async () => {
  const changeBlogs: BlogInterface[] = await getBlogsByCategoryName("change");
  const challengesBlogs: BlogInterface[] =
    await getBlogsByCategoryName("challenges");

  return (
    <main className="min-h-screen">
      <div className="mx-auto mt-10 w-full max-w-80 pb-12 sm:max-w-2xl lg:max-w-6xl">
        <div className="border-y py-5">
          <h3>Change</h3>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {changeBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>

        <div className="border-b py-5">
          <h3>Challenges</h3>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {challengesBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
