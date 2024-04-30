import Blog from "@/components/blog/Blog";
import { BlogInterface, getBlogsByCategoryName } from "@/services/blogService";
import Link from "next/link";
import React from "react";

const Blogs = async () => {
  const changeBlogs: BlogInterface[] = await getBlogsByCategoryName("change");
  const challengesBlogs: BlogInterface[] =
    await getBlogsByCategoryName("challenges");
  const lettingGoBlogs: BlogInterface[] =
    await getBlogsByCategoryName("letting go");
  const purposeAndPassionBlogs: BlogInterface[] =
    await getBlogsByCategoryName("purpose & passion");

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-80 pb-12 sm:max-w-2xl lg:max-w-6xl">
        <div className="border-y py-5">
          <Link className="text-xl font-semibold" href="/blogs/category/change">
            Change
          </Link>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {changeBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>

        <div className="border-b py-5">
          <Link
            className="text-xl font-semibold"
            href="/blogs/category/challenges"
          >
            Challenges
          </Link>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {challengesBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>
        <div className="border-b py-5">
          <Link
            className="text-xl font-semibold"
            href="/blogs/category/letting go"
          >
            Letting go
          </Link>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {lettingGoBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>

        <div className="border-b py-5">
          <Link
            className="text-xl font-semibold"
            href="/blogs/category/purpose & passion"
          >
            Purpose and Passion
          </Link>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {purposeAndPassionBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
