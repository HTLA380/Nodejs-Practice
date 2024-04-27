import React from "react";
import RecentBlogMock from "./_actions/recent-blog-mock.json";
import Image from "next/image";
import { fDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { getCategoryColors } from "@/utils/getCategoryColors";

interface BlogProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  createdAt: string;
  category: Array<string>;
}

const RecentBlogSection = () => {
  return (
    <div className="border-b-border mx-auto w-full max-w-6xl border-b pb-12">
      <h3>Recent blog posts</h3>

      <div className="w-ful mt-7 grid grid-cols-12 gap-8">
        {RecentBlogMock.map((data, index) => {
          if (index === 0) {
            return (
              <RenderLatestBlog key={`recent blog ${index + 1}`} {...data} />
            );
          }
          if (index === RecentBlogMock.length - 1) {
            return (
              <RenderWidthFullBlog key={`recent blog ${index + 1}`} {...data} />
            );
          }
          return <RenderBlog key={`recent blog ${index + 1}`} {...data} />;
        })}
      </div>
    </div>
  );
};

const RenderLatestBlog: React.FC<BlogProps> = ({
  imageUrl,
  author,
  createdAt,
  title,
  category,
  description,
}) => {
  return (
    <div className="col-span-12 row-span-2 mx-auto h-full w-full max-w-80 sm:max-w-2xl lg:col-span-6 lg:max-w-none">
      <Image
        src={imageUrl}
        width={600}
        height={200}
        alt="latest blog"
        className="h-fit w-full object-cover object-center"
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
          {category.map((name) => {
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
};

const RenderBlog: React.FC<BlogProps> = ({
  imageUrl,
  author,
  createdAt,
  title,
  category,
  description,
}) => {
  return (
    <div className="col-span-12 mx-auto flex max-w-80 flex-col items-stretch gap-5 sm:max-w-2xl sm:flex-row lg:col-span-6 lg:max-w-none">
      <Image
        src={imageUrl}
        width={320}
        height={200}
        alt="latest blog"
        className="h-fit w-full object-cover object-center"
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
          {category.map((name) => {
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
};

const RenderWidthFullBlog: React.FC<BlogProps> = ({
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
        src={imageUrl}
        width={600}
        height={200}
        alt="latest blog"
        className="col-span-12 mx-auto h-fit w-full max-w-80 object-cover object-center md:max-w-2xl lg:col-span-6 lg:max-w-none"
      />

      <div className="col-span-12 mx-auto flex w-full max-w-80 flex-col gap-3 py-4 md:max-w-2xl lg:col-span-6 lg:max-w-none">
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
          {category.map((name) => {
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
    </>
  );
};

export default RecentBlogSection;
