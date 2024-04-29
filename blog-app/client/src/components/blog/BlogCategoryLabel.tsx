import { getCategoryColors } from "@/utils/getCategoryColors";

const BlogCategoryLabel = ({ name }: { name: string }) => {
  const { backgroundColor, textColor: color } = getCategoryColors(name);

  return (
    <div
      key={`name`}
      className="rounded-full px-2 py-0.5 text-xs font-medium"
      style={{ backgroundColor, color }}
    >
      {name}
    </div>
  );
};

export default BlogCategoryLabel;
