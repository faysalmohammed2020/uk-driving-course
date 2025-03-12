"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface BlogCardProps {
  blog: Blog;
}

interface Blog {
  id: number;
  post_title: string;
  post_content: string;
}

// Function to extract the first image from HTML content
const extractFirstImage = (htmlContent: string): string | null => {
  if (typeof window !== "undefined") {
    const imgElement = new DOMParser()
      .parseFromString(htmlContent, "text/html")
      .querySelector("img");
    return imgElement?.getAttribute("src") || null; // Return null if no image is found
  }
  return null; // Fallback for SSR
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Initialize as null

  useEffect(() => {
    setImageUrl(extractFirstImage(blog.post_content));
  }, [blog]);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-44 flex items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Featured Journal"
            className="w-full h-full object-fill rounded-t-xl"
            width={1200}
            height={600}
          />
        ) : (
          <Image
            src="/images/blog1.webp"
            alt="No Image Available"
            className="w-full h-full object-fill rounded-t-xl"
            width={1200}
            height={600}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {blog.post_title}
        </h3>
        <p
          className="text-gray-600 text-sm line-clamp-2"
          dangerouslySetInnerHTML={{ __html: blog.post_content }}
        />
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
