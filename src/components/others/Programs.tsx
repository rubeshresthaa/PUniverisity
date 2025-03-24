"use client";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProgramList } from "@/constants";
import ProgramCard from "../shared/ProgramCard";

const Programs = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const plugin = React.useRef(Autoplay({ delay: 4000, jump: true }));
  return (
    <div className="flex flex-col gap-4 py-8 px-4 sm:px-12 lg:px-24 xl:px-32 relative">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-blue-900 text-xl md:text-3xl font-bold text-center my-2">
          Programs
        </h1>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {ProgramList.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2 md:pl-4 py-5"
            >
              <ProgramCard
                id={item.id}
                image={item.image}
                title={item.title}
                credit={item.credit}
                semester={item.semester}
                year={item.year}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext />
      </Carousel>
      <div className="absolute text-blue-800 flex gap-2 bottom-0 left-[35%] lg:left-[48%] py-5">
        {Array.from({ length: count }).map((_, index) => {
          return (
            <div
              key={index}
              className={`${
                index + 1 === current ? "bg-blue-800" : "bg-gray-200"
              } h-3 w-3 rounded-full`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
