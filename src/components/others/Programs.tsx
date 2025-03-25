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
import ProgramCard from "../shared/ProgramCard";
import { useGetProgramsQuery } from "@/store/apiSlice";

const Programs = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState<number>(0);
  const { data: course } = useGetProgramsQuery();

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
    <div
      id="program"
      className="flex flex-col gap-4 py-8 px-4 sm:px-12 lg:px-24 xl:px-32 relative"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-blue-900 text-2xl md:text-3xl font-bold text-center sm:my-2">
          Programs
        </h1>
      </div>
      <Carousel setApi={setApi} plugins={[plugin.current]}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {course?.map((course) => (
            <CarouselItem
              key={course.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2 md:pl-4 py-5"
            >
              <ProgramCard
                image={course.image}
                title={course.title}
                credit_hours={course.credit_hours}
                semester={course.semester}
                year={course.year}
                coursecode={course.coursecode}
                department={course.department}
                id={course.id}
                is_active={course.is_active}
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
