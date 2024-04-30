import React from "react";
import { BlogInterface, getBlogs } from "@/services/blogService";
import Blog from "@/components/blog/Blog";

const AllBlogsSection = async () => {
  const blogs: Array<BlogInterface> = await getBlogs();

  return (
    <section className="border-b-border mx-auto mt-10 w-full max-w-80 border-b pb-12 sm:max-w-2xl lg:max-w-6xl">
      <h3>All blog posts</h3>

      <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return <Blog key={blog._id} {...blog} />;
        })}
      </div>
    </section>
  );
};

export default AllBlogsSection;
