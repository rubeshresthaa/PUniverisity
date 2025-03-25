import Image from "next/image";
import React from "react";

const ProgramCard = ({
  image,
  title,
  credit_hours,
  semester,
  year,
}: ProgramCardType) => {
  return (
    <div className="flex flex-col gap-4 rounded-md relative shadow-md shadow-gray-500 group min-h-80">
      {/* this section should be hidden while hovering */}
      <div className="block z-40 group-hover:hidden">
        <div className="w-full h-fit">
          <Image
            src={image}
            alt="offer's image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full rounded-t-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 py-2 text-gray-700 items-start">
          <h1 className="text-xl font-extrabold">{title}</h1>
          <button className="text-sm">View More</button>
        </div>
      </div>

      {/* should appear this section when hover */}
      <div className="absolute top-0 rounded-md h-full w-full hidden bg-blue-800 group-hover:flex flex-col gap-2 p-4 text-white">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex flex-col gap-2">
          <p className="flex flex-col ">
            <span>Semester/Year</span>
            <span className="font-semibold">
              {semester} Semesters, {year} Years
            </span>
          </p>
          <p className="flex flex-col ">
            <span>Credit Hour</span>
            <span className="font-semibold">{credit_hours} hours</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
