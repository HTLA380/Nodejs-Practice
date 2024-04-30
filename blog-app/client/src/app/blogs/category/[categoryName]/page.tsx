import Blog from "@/components/blog/Blog";
import { BlogInterface, getBlogsByCategoryName } from "@/services/blogService";
import Link from "next/link";
import React from "react";

interface BlogsCategoryProps {
  params: { categoryName: string };
}

const BlogsCategory: React.FC<BlogsCategoryProps> = async ({ params }) => {
  const categoryName = params.categoryName;

  const categoryBlogs: BlogInterface[] = await getBlogsByCategoryName(
    categoryName,
    6,
  );
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-80 pb-12 sm:max-w-2xl lg:max-w-6xl">
        <div className="border-y py-5">
          <Link
            className="text-xl font-semibold capitalize hover:underline"
            href={`/blogs/category/${categoryName}`}
          >
            {decodeURIComponent(categoryName)}
          </Link>
          <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryBlogs.map((blog) => {
              return <Blog {...blog} key={blog._id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogsCategory;
