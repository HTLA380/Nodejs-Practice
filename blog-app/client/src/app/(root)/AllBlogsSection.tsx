import React from "react";
import Image from "next/image";
import { getCategoryColors } from "@/utils/getCategoryColors";
import { fDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import { Blog, getBlogs } from "@/services/blogService";

const AllBlogsSection = async () => {
  const blogs: Array<Blog> = await getBlogs();

  return (
    <section className="border-b-border mx-auto mt-10 w-full max-w-80 border-b pb-12 sm:max-w-2xl lg:max-w-6xl">
      <h3>All blog posts</h3>

      <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => {
          return (
            <div key={`blog ${index + 1}`}>
              <Image
                src={blog.imageUrl || "https://placehold.co/600x400"}
                width={300}
                height={300}
                draggable={false}
                alt={`blog ${index + 1}`}
                className="aspect-square w-full select-none object-cover object-center"
              />

              <div className="mt-4 flex h-fit flex-col gap-3">
                <p className="text-xs font-semibold text-purple-800">
                  {blog.author} &#8226; {fDate(blog.createdAt)}
                </p>
                <Link
                  href={`blogs/${blog._id}`}
                  className="flex items-center justify-between"
                >
                  <h4 className="font-semibold hover:underline">
                    {blog.title}
                  </h4>
                  <Button
                    size={null}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <ArrowUpRight size={20} />
                  </Button>
                </Link>
                <p className="text-muted-foreground text-sm">
                  {truncateText(blog.description, 85)}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <RenderCategoryLabel name={blog.category} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const RenderCategoryLabel = ({ name }: { name: string }) => {
  const { backgroundColor, textColor: color } = getCategoryColors(name);

  return (
    <div
      key={`name`}
      className="rounded-full bg-blue-200 px-2 py-0.5 text-xs font-medium"
      style={{ backgroundColor, color }}
    >
      {name}
    </div>
  );
};

export default AllBlogsSection;
