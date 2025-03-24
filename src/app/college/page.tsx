"use client";
import { Button } from "@/components/ui/button"
import { CollegeItems } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import {  useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {

  const router = useRouter();
  return (
    <div className="py-5">
      <h1 className="text-xl md:text-3xl text-blue-900 text-center font-bold">Affiliated College</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 px-4 sm:px-12 lg:px-24 xl:px-32 my-5">
        {CollegeItems.map((college, index) => (
          <div className="rounded-xl shadow-xs shadow-black px-2" key={index}>
            <div className="flex justify-center items-center gap-2 p-2">
              <Image
                src={college.logo}
                alt={college.title}
                width={30}
                height={30}
              />
              <h1 className="text-bold">{college.title}</h1>
            </div>
            <div className="w-64 h-1 bg-gray-400 m-auto"></div>
            <div className="w-full rounded-2xl">
              <Image
                src={college.image}
                alt={college.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-52 object-cover rounded-xl px-5 py-2"
              />
            </div>
            <p className="text-justify px-5">
              {college.description.slice(0, 200)}
              <span className="text-lg font-bold">...</span>
            </p>
            <div className="flex justify-center items-center py-2 mb-2">
            <Link href={college.link} target="_blank">
              <Button className="bg-blue-950 hover:bg-blue-900 cursor-pointer">Visit Website</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Back Button */}
        <div className="p-2 md:p-10">
        <Button
          onClick={() => router.push("/")}
          className="bg-blue-950 hover:bg-blue-800 p-4 md:p-6 rounded-full text-white w-12 h-12 cursor-pointer font-bold text-base md:text-xl"
        >
          <FaArrowLeft />

        </Button>
        </div>
      
      </div>
    </div>
  )
}
export default page