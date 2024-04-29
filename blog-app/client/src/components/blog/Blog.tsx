import { type BlogInterface } from "@/services/blogService";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { truncateText } from "@/utils/truncateText";
import { fDate } from "@/utils/formatDate";
import BlogCategoryLabel from "./BlogCategoryLabel";

const Blog: React.FC<BlogInterface> = ({
  _id,
  title,
  author,
  description,
  category,
  createdBy,
  imageUrl,
  createdAt,
}) => {
  return (
    <div>
      <Image
        src={imageUrl || "https://placehold.co/600x400"}
        width={300}
        height={300}
        draggable={false}
        alt={`blog`}
        className="aspect-square w-full select-none object-cover object-center"
      />

      <div className="mt-4 flex h-fit flex-col gap-3">
        <p className="text-xs font-semibold text-purple-800">
          {author} &#8226; {fDate(createdAt)}
        </p>
        <Link
          href={`blogs/${_id}`}
          className="flex items-center justify-between"
        >
          <h4 className="font-semibold hover:underline">{title}</h4>
          <Button size={null} variant={"ghost"} className="rounded-full">
            <ArrowUpRight size={20} />
          </Button>
        </Link>
        <p className="text-muted-foreground text-sm">
          {truncateText(description, 85)}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <BlogCategoryLabel name={category} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
