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
          if (index === 0)
            return (
              <RenderLatestBlog key={`recent blog ${index + 1}`} {...data} />
            );
          if (index === RecentBlogMock.length - 1)
            return (
              <RenderWidthFullBlog key={`recent blog ${index + 1}`} {...data} />
            );
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
    <div className="col-span-6 row-span-2 h-full w-full">
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
          <h2 className="text-2xl font-semibold">{title}</h2>
          <Button size={null} variant={"ghost"} className="rounded-full">
            <ArrowUpRight size={20} />
          </Button>
        </div>
        <p className="text-muted-foreground">{description}</p>

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
    <div className="col-span-6 flex items-stretch gap-5">
      <Image
        src={imageUrl}
        width={320}
        height={200}
        alt="latest blog"
        className="h-fit w-full max-w-80 object-cover object-center"
      />

      <div className="flex h-full flex-col justify-between py-5">
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
        className="col-span-6 h-fit object-cover object-center"
      />

      <div className="col-span-6 flex h-full flex-col justify-between py-4">
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
