// "use client";

// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Blog {
//   post_content: string;
//   createdAt: string | number | Date;
//   id: number;
//   post_title: string;
// }

// const BlogPost: React.FC = () => {
//   const { id } = useParams();
//   const [blogs, setBlogs] = useState<Blog[]>([]); // State to store blogs

//   useEffect(() => {
//     // Fetch blog data from the API
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("/api/blogfetch");
//         if (!response.ok) {
//           throw new Error("Failed to fetch blog data");
//         }
//         const data = await response.json();

//         const transformedData: Blog[] = data.map((item: any) => ({
//           id: item.id,
//           post_title: item.post_title,
//           post_content:
//             typeof item.post_content === "object" && item.post_content.text
//               ? item.post_content.text
//               : String(item.post_content), // Extract text content only
//           post_category: item.category,
//           post_tags: item.tags,
//           createdAt: item.createdAt,
//         }));

//         console.log("data", data);
//         setBlogs(transformedData); // Update state with fetched blog data
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs(); // Fetch data when the component mounts
//   }, []);

//   const postId = Number(id);
//   const post = blogs.find((post) => post.id === postId);

//   console.log("User Post:", post);

//   if (!post) {
//     return (
//       <p className="text-center mt-20 text-2xl p-80 text-gray-500">
//         No post found with the provided ID. Abar Code Kor
//       </p>
//     );
//   }

//   // Function to extract the image URL from the post_content (assuming it's in the HTML content)
//   const extractImageFromContent = (content: string) => {
//     const regex = /<img.*?src=["'](.*?)["']/; // Regex to find the src attribute of an <img> tag
//     const match = content.match(regex);
//     return match ? match[1] : null;
//   };

//   const imageUrl = extractImageFromContent(post.post_content); // Extract image URL from post_content

//   // Function to remove <img> tags from the post content
//   const removeImagesFromContent = (content: string) => {
//     return content.replace(/<img[^>]*>/g, ""); // Regex to remove <img> tags
//   };
//   // Remove images from the post content
//   const sanitizedContent = removeImagesFromContent(post.post_content);

//   return (
//     <div className="mx-auto">
//       <div className="bg-white rounded-lg shadow-md mb-10">
//         {imageUrl ? (
//           <Image
//             src={imageUrl}
//             alt="Featured Journal"
//             className="w-full h-full object-fill"
//             width={1200}
//             height={600}
//           />
//         ) : (
//           <Image
//             src="/images/blog1.webp"
//             alt="No Image Available"
//             className="w-full h-full object-fill"
//             width={1200}
//             height={600}
//           />
//         )}

//         {/* Title */}
//         <div className="p-6">
//           <h2 className="text-4xl font-bold text-gray-700 mb-4">
//             {post.post_title}
//           </h2>

//           {/* Description and Content */}
//           <p className="text-gray-500 mb-4">
//             Published on: {new Date(post.createdAt).toLocaleDateString()}
//           </p>
//           <div
//             className="text-gray-700 leading-relaxed text-lg"
//             dangerouslySetInnerHTML={{ __html: sanitizedContent }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;









"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  post_content: string;
  createdAt: string | number | Date;
  id: number;
  post_title: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]); // State to store blogs

  useEffect(() => {
    // Fetch blog data from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogfetch");
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();

        const transformedData: Blog[] = data.map((item: any) => ({
          id: item.id,
          post_title: item.post_title,
          post_content:
            typeof item.post_content === "object" && item.post_content.text
              ? item.post_content.text
              : String(item.post_content), // Extract text content only
          post_category: item.category,
          post_tags: item.tags,
          createdAt: item.createdAt,
        }));

        setBlogs(transformedData); // Update state with fetched blog data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(); // Fetch data when the component mounts
  }, []);

  const postId = Number(id);
  const post = blogs.find((post) => post.id === postId);

  if (!post) {
    return (
      <p className="text-center mt-20 text-2xl text-gray-500">
        No post found with the provided ID.
      </p>
    );
  }

  // Function to extract the image URL from the post_content (assuming it's in the HTML content)
  const extractImageFromContent = (content: string) => {
    const regex = /<img.*?src=["'](.*?)["']/; // Regex to find the src attribute of an <img> tag
    const match = content.match(regex);
    return match ? match[1] : null;
  };

  const imageUrl = extractImageFromContent(post.post_content); // Extract image URL from post_content

  // Function to remove <img> tags from the post content
  const removeImagesFromContent = (content: string) => {
    return content.replace(/<img[^>]*>/g, ""); // Regex to remove <img> tags
  };
  // Remove images from the post content
  const sanitizedContent = removeImagesFromContent(post.post_content);

  return (
    <div className="max-w-6xl mx-auto px-8 py-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.post_title}
            className="w-full h-[600px] object-cover"
            width={1200}
            height={600}
          />
        ) : (
          <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        {/* Title */}
        <div className="p-6">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{post.post_title}</h1>

          {/* Date Published */}
          <p className="text-sm text-gray-500 mb-6">
            Published on {new Date(post.createdAt).toLocaleDateString()}
          </p>

          {/* Content */}
          <div
            className="text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
