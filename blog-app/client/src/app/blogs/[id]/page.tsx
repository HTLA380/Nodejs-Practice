import { type BlogDetail, getSingleBlog } from "@/services/blogService";
import Image from "next/image";
import React from "react";

interface BlogDetailInterface {
  params: { id: string };
}

const BlogDetail: React.FC<BlogDetailInterface> = async ({ params }) => {
  const blog: BlogDetail = await getSingleBlog(params.id);

  return (
    <main className="border-y">
      <div className="mx-auto mt-10 flex w-full max-w-80 flex-col gap-10 pb-12 sm:max-w-xl">
        <h1 className="font-sans text-2xl font-semibold">{blog.title}</h1>
        <h4 className="text-lg font-medium">
          by{" "}
          <span className="font-semibold text-purple-700">{blog.author}</span>
        </h4>
        <Image
          src={blog.imageUrl || "https://placehold.co/600x400"}
          width={400}
          height={400}
          draggable={false}
          alt={blog.title}
          className="aspect-square w-full select-none object-cover object-center"
        />
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="content prose"
        ></div>
      </div>
    </main>
  );
};

export default BlogDetail;
