import React from "react";
import allBlogsData from "./_actions/all-blog-mock.json";
import Image from "next/image";
import { getCategoryColors } from "@/utils/getCategoryColors";
import { fDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const AllBlogsSection = () => {
  return (
    <section className="border-b-border mx-auto mt-10 w-full max-w-80 border-b pb-12 sm:max-w-2xl lg:max-w-6xl">
      <h3>All blog posts</h3>

      <div className="mt-7 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allBlogsData.map((blog, index) => {
          return (
            <div key={`blog ${index + 1}`}>
              <Image
                src={blog.imageUrl}
                width={300}
                height={240}
                alt={`blog ${index + 1}`}
                className="w-full object-cover object-center"
              />

              <div className="mt-4 flex h-full flex-col gap-3">
                <p className="text-xs font-semibold text-purple-800">
                  {blog.author} &#8226; {fDate(blog.createdAt)}
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{blog.title}</h4>
                  <Button
                    size={null}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <ArrowUpRight size={20} />
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm">
                  {blog.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  {blog.category.map((name) => {
                    const { backgroundColor, textColor: color } =
                      getCategoryColors(name);

                    return (
                      <div
                        key={`name`}
                        className="rounded-full bg-blue-200 px-2 py-0.5 text-xs font-medium"
                        style={{ backgroundColor, color }}
                      >
                        {name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllBlogsSection;
