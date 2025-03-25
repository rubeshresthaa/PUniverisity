"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BlogCollectionDemo } from "@/constants";
import { useGetBlogsQuery } from "@/store/apiSlice";


const page = () => {
  const router = useRouter();
  const {data:blogs}=useGetBlogsQuery();
  console.log(blogs)

  return (
    <section className="flex flex-col gap-10 px-4 sm:px-12 lg:px-24 xl:px-32 pb-10 mt-5">
      <div className="flex flex-col gap-6 relative my-8">
        {/* Go Back Button */}
        <Button
          onClick={() => router.push("/")}
          className="bg-[#050930] hover:bg-blue-800 text-white p-4 md:p-2 rounded w-fit md:w-42 absolute right-0 -top-12 cursor-pointer font-bold text-base md:text-xl"
        >
          Go Back
        </Button>

        {/* Blog Header */}
        <h1 className="text-blue-950 py-4 font-bold text-center md:text-4xl">
          Our Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-32">
        {blogs?.map((blog) => (
          <div
            className="rounded-xl shadow-xs shadow-black px-2 py-2 space-y-2 hover:bg-gray-400 cursor-pointer"
            key={blog.id}
          >
            <div className="w-full rounded-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-52 object-cover rounded-xl px-5 py-2"
              />
            </div>
            <h1 className="text-center font-semibold">{blog.title}</h1>
            <p className="text-justify px-5">
              {blog.description.slice(0, 200)}
              <span className="text-lg font-bold">...</span>
            </p>
            <div className="flex justify-center items-center py-2 mb-2">
              <Link href={`/blog/${blog.id}`}>
                <Button className="bg-blue-950 hover:bg-blue-900 cursor-pointer">
                  See More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default page;
