// "use client";

// import { Button } from "@/components/ui/button";
// import { useGetBlogsByIdQuery, useGetBlogsQuery } from "@/store/apiSlice";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import React from "react";

// const BlogPage = () => {
//   const params = useParams();
//   const router = useRouter();
//   const id = Number(params?.id) || 0; // Ensure `id` is a valid number

//   const { data: blog } = useGetBlogsByIdQuery(id);

//   if (!blog)
//     return <p className="text-center text-gray-500">Loading blog...</p>;

//   return (
//     <section className="flex flex-col gap-10 px-4 sm:px-12 lg:px-24 xl:px-32 pb-10 mt-5">
//       <div className="flex flex-col gap-6 relative my-8">
//         {/* Back Button */}
//         <Button
//           onClick={() => router.push("/")}
//           className="bg-green-700 hover:bg-green-800 p-4 md:p-6 rounded text-white w-fit md:w-42 absolute right-0 -top-12 cursor-pointer font-bold text-base md:text-xl"
//         >
//           Back
//         </Button>
//         {blog?.map((blog) => {
//           return (
//             <div key={blog.id}>
//               <h1 className="text-2xl md:text-4xl text-center font-bold max-w-2xl mx-auto">
//                 {blog.title}
//               </h1>
//               <p className="text-justify">{blog.description}</p>
//               {/*next section  */}
//               <div className="w-full h-96 relative bg-gray-50 rounded">
//                 {blog.image && (
//                   <Image
//                     src={blog.image}
//                     alt="main image"
//                     layout="fill"
//                     objectFit="contain"
//                     className="rounded"
//                   />
//                 )}

//                 {/* Author & Publish Date */}
//                 <div className="absolute bottom-5 left-10 flex gap-4 text-white">
//                   <p className="flex flex-col gap-1">
//                     <span className="text-lg font-semibold">Written By</span>
//                     <span>{blog.author}</span>
//                   </p>
//                   <p className="flex flex-col gap-1">
//                     <span className="text-lg font-semibold">Published On</span>
//                     <span>{blog.publish_date}</span>
//                   </p>
//                 </div>
//               </div>
//               {/* BLog SubSection */}
//               <div className="flex flex-col-reverse md:grid grid-cols-5 gap-4 md:gap-14 items-start relative">
//                 {/* Main Content */}
//                 <div className="flex flex-col gap-8 col-span-4 sm:col-span-3">
//                   {/*
//               <div id={blog.} key={item.id} className="flex flex-col gap-4">
//                 <h1 className="text-xl font-bold capitalize">{item.sub_content_title}</h1>
//                 <p className="text-justify" dangerouslySetInnerHTML={{ __html: item.sub_content }}></p>
//                 {item.image && (
//                   <div className="w-full h-56 sm:w-96 sm:h-80 bg-gray-50 rounded">
//                     <Image
//                       src={item.image}
//                       alt="sub content's image"
//                       layout="fill"
//                       objectFit="contain"
//                       className="rounded"
//                     />
//                   </div>
//                 )}
//               </div> */}
//                 </div>

//                 {/* Side Navigation */}
//                 <div className="px-4 rounded-md w-full py-5 flex flex-col gap-2 text-lg font-semibold col-span-1 sm:col-span-2 items-start sticky top-0">
//                   {/* {blog.subsections?.map((item) => (
//               <Link href={`#${item.sub_content_title}`} key={item.id}>
//                 {item.sub_content_title}
//               </Link>
//             ))} */}
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Blog Subsections & Side Navigation */}
//       </div>
//     </section>
//   );
// };

// export default BlogPage;
"use client";

import { Button } from "@/components/ui/button";
import { BlogDataDemo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const router = useRouter();
  const blog = BlogDataDemo;
  return (
    <section className="flex flex-col gap-10 px-4 sm:px-12 lg:px-24 xl:px-32 pb-10 mt-5 py-12">
      <div className="flex flex-col gap-6 relative my-8">
        <Button
          onClick={() => router.push("/blog")}
          className="bg-blue-900 hover:bg-blue-800 p-4 md:p-6 rounded text-white w-fit md:w-42 absolute right-0 -top-10 cursor-pointer font-bold text-base md:text-xl"
        >
          Back
        </Button>

        <h1 className="text-2xl md:text-4xl text-center font-bold max-w-2xl mx-auto">
          {blog?.title}
        </h1>

        <p className="text-justify">{blog?.description}</p>

        <div className="w-full h-96 relative bg-gray-50 rounded">
          {blog?.mainImage && (
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src={blog.mainImage}
              alt="main image"
              className="w-full h-full object-contain"
            />
          )}

          <div className="absolute bottom-5 left-10 flex gap-4 text-white">
            <p className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Written By</span>
              <span>{blog?.author}</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Published On</span>
              <span>{blog?.publishedDate}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid grid-cols-5 gap-4 md:gap-14 items-start relative">
        <div className="flex flex-col gap-8 col-span-4 sm:col-span-3">
          {blog?.content.map((item, index) => (
            <div
              id={item.subContentTitle}
              key={index}
              className="flex flex-col gap-4"
            >
              <h1 className="text-xl font-bold capitalize">
                {item.subContentTitle}
              </h1>
              <p
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: item.subContent }}
              ></p>
              {item.image && (
                <div className="w-full h-56 sm:w-96 sm:h-80 bg-gray-50 rounded">
                  <Image
                    src={item.image}
                    alt="sub content's image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* side navigation */}
        <div className="px-4 rounded-md w-full py-5 flex flex-col gap-2 text-lg font-semibold col-span-1 sm:col-span-2 items-start sticky top-20">
          {blog?.content.map((item, index) => (
            <Link href={`#${item.subContentTitle}`} key={index}>
              {item.subContentTitle}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
