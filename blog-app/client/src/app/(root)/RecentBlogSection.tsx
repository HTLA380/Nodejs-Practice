import React from "react";
import RecentBlogMock from "./_actions/recent-blog-mock.json";
import Image from "next/image";
import { fDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { getCategoryColors } from "@/utils/getCategoryColors";
import { Blog, getRecentBlogs } from "./_actions/getBlogs";

const RecentBlogSection = async () => {
  const blogs: Array<Blog> = await getRecentBlogs();

  return (
    <section className="border-b-border mx-auto mt-10 w-full max-w-80 border-b pb-12 sm:max-w-2xl lg:max-w-6xl">
      <h3>Recent blog posts</h3>

      <div className="mt-7 grid w-full grid-cols-12 gap-y-8 lg:gap-x-8">
        {blogs?.map((blog, index) => {
          if (index === 0) {
            return <RenderLatestBlog key={blog._id} {...blog} />;
          }
          if (index === RecentBlogMock.length - 1) {
            return <RenderWidthFullBlog key={blog._id} {...blog} />;
          }
          return <RenderBlog key={blog._id} {...blog} />;
        })}
      </div>
    </section>
  );
};

const RenderLatestBlog: React.FC<Blog> = ({
  author,
  createdAt,
  title,
  imageUrl,
  category,
  description,
}) => {
  return (
    <div className="col-span-12 row-span-2 mx-auto h-full w-full lg:col-span-6">
      <Image
        src={imageUrl || "https://placehold.co/600x400"}
        width={600}
        height={200}
        alt="latest blog"
        className="aspect-square w-full object-cover object-center sm:aspect-video"
      />

      <div className="mt-7 flex flex-col gap-3">
        <p className="text-xs font-semibold text-purple-800">
          {author} &#8226; {fDate(createdAt)}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold sm:text-2xl">{title}</h2>
          <Button size={null} variant={"ghost"} className="rounded-full">
            <ArrowUpRight size={20} />
          </Button>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">
          {description}
        </p>

        <div className="flex items-center gap-3">
          <RenderCategoryLabel name={category} />
        </div>
      </div>
    </div>
  );
};

const RenderBlog: React.FC<Blog> = ({
  author,
  createdAt,
  title,
  imageUrl,
  category,
  description,
}) => {
  console.log(imageUrl);

  return (
    <div className="col-span-12 mx-auto flex flex-col items-stretch gap-5 sm:flex-row lg:col-span-6">
      <Image
        src={imageUrl || "https://placehold.co/600x400"}
        width={200}
        height={20}
        alt="latest blog"
        className="aspect-square h-fit w-full object-cover object-center"
      />

      <div className="flex h-full flex-col gap-3">
        <p className="text-xs font-semibold text-purple-800">
          {author} &#8226; {fDate(createdAt)}
        </p>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <Button size={null} variant={"ghost"} className="rounded-full">
            <ArrowUpRight size={20} />
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>

        <div className="mt-3 flex items-center gap-2">
          <RenderCategoryLabel name={category} />
        </div>
      </div>
    </div>
  );
};

const RenderWidthFullBlog: React.FC<Blog> = ({
  imageUrl,
  author,
  createdAt,
  title,
  category,
  description,
}) => {
  return (
    <>
      <Image
        src={imageUrl || "https://placehold.co/600x400"}
        width={600}
        height={200}
        alt="latest blog"
        className="col-span-12 mx-auto aspect-video h-fit w-full object-cover object-center lg:col-span-6"
      />

      <div className="col-span-12 mx-auto flex w-full flex-col gap-3 py-4 lg:col-span-6">
        <p className="text-xs font-semibold text-purple-800">
          {author} &#8226; {fDate(createdAt)}
        </p>
        <div className="flex items-center justify-between">
          <h3>{title}</h3>
          <Button size={null} variant={"ghost"} className="rounded-full">
            <ArrowUpRight size={20} />
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>

        <div className="flex items-center gap-3">
          <RenderCategoryLabel name={category} />
        </div>
      </div>
    </>
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

export default RecentBlogSection;
