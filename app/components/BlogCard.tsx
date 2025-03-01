import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface BlogCardProps {
  blog: Blog;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // const t =usetranslation()
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={`/images/${blog.image}`}
          alt={blog.title}
          className="w-full h-48 object-cover"
          width={500}
          height={300}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>
        <Link
          href={`/blogs/${blog.id}`}
          className="text-indigo-600 font-semibold mt-4 inline-block hover:underline"
        >
        Read More »
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
