import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogspageblogs } from "../../data/home";

// Type for Blog Post
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
}

// Generate Static Params for Dynamic Routing
export async function generateStaticParams() {
  return blogspageblogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Fetch blog data based on ID
const getBlogById = (id: string | undefined) => {
  const blog = blogspageblogs.find((post) => post.id.toString() === id);
  if (!blog) return null;
  return blog;
};

const BlogPage = ({ params }: { params: { id: string } }) => {
  const blog = getBlogById(params.id);

  // Handle not found
  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-4">{blog.description}</p>

        <div className="rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
            width={1200}
            height={800}
          />
        </div>

        <div className="prose prose-lg text-gray-800">
          <p>{blog.description}</p>
        </div>

        <div className="mt-10">
          <Link href="/blogs">
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
