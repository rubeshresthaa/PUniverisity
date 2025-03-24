import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CollegeItems } from "@/constants";

const College = () => {
  return (
    <div id="collge" className="py-5">
      <h1 className="text-xl md:text-3xl text-blue-900 text-center font-bold">
        Affiliated College
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-32 my-5">
        {CollegeItems.slice(0, 3).map((college, index) => (
          <div
            className="rounded-xl shadow-xs shadow-black px-2 py-2"
            key={index}
          >
            <div className="flex justify-center items-center gap-2 p-2">
              <Image
                src={college.logo}
                alt={college.title}
                width={30}
                height={30}
              />
              <h1 className="font-bold text-lg">{college.title}</h1>
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
                <Button className="bg-blue-950 hover:bg-blue-900 cursor-pointer">
                  Visit Website
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* View All Section */}
      <div className="flex justify-center items-center">
        <Link href="/college">
          <Button className="bg-blue-950 hover:bg-blue-900 cursor-pointer">
            View All Colleges
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default College;
