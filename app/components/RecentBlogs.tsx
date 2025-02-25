// components/RecentBlogs.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blog Type Interface for Type Safety
interface Blog {
  title: string;
  description: string;
  image: string;
  link: string;
}

// Sample Blog Data
const blogs: Blog[] = [
  {
    title: "SERU Training For PCO Drivers",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog1.webp",
    link: "/blogs/seru-training",
  },
  {
    title: "Topographical Skills Test: A Key Requirement for PCO Driver Training",
    description: "Becoming a Private Hire or Taxi Driver in London involves",
    image: "/images/blog2.avif",
    link: "/blogs/topographical-test",
  },
  {
    title: "PCO Electric Vehicle Advantages",
    description: "Driving in London is becoming more expensive day by day,",
    image: "/images/blog3.jpg",
    link: "/blogs/electric-vehicles",
  },
  {
    title: "PCO Driver Training in London",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog4.webp",
    link: "/blogs/driver-training",
  },
];

const RecentBlogs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-green-600 font-semibold text-lg uppercase">The Blog</h3>
          <h2 className="text-3xl font-bold text-gray-800">Our Recent News</h2>
          <p className="text-gray-600 mt-2">
            Here you can keep yourself updated by reading our blogs on the various topics ranging from licenses to other relevant topics.
            You can also subscribe to us in order to keep yourself informed of our services.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <Link href={blog.link} className="text-indigo-600 font-semibold mt-4 inline-block hover:underline">
                  READ MORE »
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blogs">
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
