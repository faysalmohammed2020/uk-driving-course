"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";

interface Blog {
  id: number;
  post_title: string;
  post_content: string;
}

const RecentBlogsSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const t = useTranslations(); // Use hook instead of await getTranslations()

  // Fetch blogs from your API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogfetch"); // Replace with your API URL
        const data: Blog[] = await response.json();

        // Ensure we get the latest 4 blogs
        const latestBlogs = data
          .sort((a, b) => b.id - a.id) // Sort by ID in descending order (latest first)
          .slice(0, 4); // Take the first 4

        setBlogs(latestBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-green-600 font-semibold text-lg uppercase">
            {t("home.BlogSectionHeader.header")}
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            {t("home.BlogSectionHeader.shortTitle")}
          </h2>
          <p className="text-gray-600 mt-2">
            {t("home.BlogSectionHeader.blogHeaderDes")}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blogs">
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
              {t("home.BlogSectionHeader.Button")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
