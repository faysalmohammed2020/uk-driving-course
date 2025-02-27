// import React from "react";
// import { blogs, blogspageblogs } from "../data/home";
// import BlogCard from "@/app/components/BlogCard";
// import Link from "next/link";

// const page = () => {
//   return (
//     <div>
//       {/* Our Recent Blogs Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           {/* Section Title */}
//           <div className="text-center mb-10">
//             <h3 className="text-green-600 font-semibold text-lg uppercase">
//               The Blog
//             </h3>
//             <h2 className="text-3xl font-bold text-gray-800">
//               Our Recent News
//             </h2>
//             <p className="text-gray-600 mt-2">
//               Here you can keep yourself updated by reading our blogs on the
//               various topics ranging from licenses to other relevant topics. You
//               can also subscribe to us in order to keep yourself informed of our
//               services.
//             </p>
//           </div>

//           {/* Blog Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {blogspageblogs.map((blog, index) => (
//               <BlogCard key={index} blog={blog} />
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="text-center mt-10">
//             <Link href="/blogs">
//               <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
//                 View All
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;

"use client";

import React, { useState } from "react";
import { blogspageblogs } from "../data/home";
import BlogCard from "@/app/components/BlogCard";
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "@/app/components/GetInTouch";

const BlogsPage = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // Calculate Total Pages
  const totalPages = Math.ceil(blogspageblogs.length / blogsPerPage);

  // Get Current Blogs for Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogspageblogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle Page Change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}

          {/* Featured Image with Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog10.jpg"
              alt="Featured Journal"
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />

            <div className="absolute top-[25%] left-[25%] text-center mb-10 space-y-4">
              <h3 className="text-blue-600 font-semibold text-2xl uppercase">
                Resources • Design & Photography
              </h3>
              <h2 className="text-5xl font-bold text-white">
                Untitled Design & Photography Journal
              </h2>
              <p className="text-white mt-2 max-w-3xl text-xl mx-auto">
                The Untitled UI Journal features carefully selected good works
                from studios, designers, architects, photographers, and creators
                from around the globe. Subscribe for new posts in your inbox.
              </p>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white px-20 py-6">
              <h3 className="text-2xl font-bold mb-2">
                Sophia Mesahbi from Untitled Ventures on Sustainable and
                Profitable Growth & What We Can Learn From the Gumroad Mess
              </h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>Natasha Sullivan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📅</span>
                  <span>19 April 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Recent Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h3 className="text-green-600 font-semibold text-lg uppercase">
              The Blog
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Recent News
            </h2>
            <p className="text-gray-600 mt-2">
              Here you can keep yourself updated by reading our blogs on the
              various topics ranging from licenses to other relevant topics. You
              can also subscribe to us in order to keep yourself informed of our
              services.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`py-2 px-4 rounded-md shadow-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`py-2 px-4 rounded-md shadow-md ${
                  currentPage === index + 1
                    ? "bg-yellow-700 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`py-2 px-4 rounded-md shadow-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <GetInTouch/>
    </div>
  );
};

export default BlogsPage;
