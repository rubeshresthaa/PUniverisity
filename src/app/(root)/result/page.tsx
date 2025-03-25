"use client";
import React, { useState } from "react";
import ResultForm from "./ResultForm";
import Image from "next/image";

const Result = () => {
  const [result, setResult] = useState(false);
  console.log(result);
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-12 lg:px-24 xl:px-32 py-8">
      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold py-4">
        View Result
      </h1>
      <ResultForm showResult={setResult} />
      {result && (
        <div className="flex flex-col gap-4 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Your Result</h1>
            <button
              // disabled
              className="px-2 py-1 rounded bg-blue-800 hover:bg-blue-700 text-white"
            >
              Download
            </button>
          </div>
          <div className="w-full h-fit">
            <Image
              src="/image.jpg"
              alt="Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full objectcover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
