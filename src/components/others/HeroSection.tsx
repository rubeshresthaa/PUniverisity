"use client";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { HeroData } from "@/constants";
import Image from "next/image";
import { useGetImageSliderQuery } from "@/store/apiSlice";
const HeroSection = () => {


  useEffect(() => {
    ScrollReveal().reveal(".animate-side", {
      origin: "left",
      distance: "400px",
      duration: 1000,
      easing: "ease-in",
      reset: true,
    });
  }, []);
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
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      id="home"
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full mb-4 sm:mb-0 relative"
    >
      <CarouselContent className="relative">
        {HeroData.map((item, index) => (
          <CarouselItem
            key={index}
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
            className=" h-[250px] sm:h-[400px] md:h-[700px] w-full bg-center bg-cover bg-no-repeat"
          ></CarouselItem>
        ))}
      </CarouselContent>
      <div className="bg-blend-overlay absolute w-full h-[250px] sm:h-[400px] md:h-[700px] bg-black top-0 opacity-36" />
      <div className="absolute top-8 left-6 sm:top-28 sm:left-40 md:top-36 md:left-64 lg:top-40 lg:left-80 space-y-1 sm:space-y-2 flex flex-col items-center justify-center">
        <div className="w-18 h-18 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <Image
            src="/plogo.png"
            alt="Purbanchal University"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-50">
          PURBANCHAL UNIVERSITY
        </h1>
        <h2 className="text-sm lg:text-3xl text-amber-50 font-medium">
          Office Of The Examination Department, Biratnagar
        </h2>
        <div className="flex flex-col justify-center items-center gap-2">
          <Button className="bg-blue-900 hover:bg-blue-950 w-fit p-2 sm:px-4 sm:py-3  cursor-pointer">
            Apply Now
          </Button>
        </div>
      </div>
      <div className="absolute text-red-600 flex gap-2 bottom-8 left-[41%] sm:left-[45%]">
        {Array.from({ length: count }).map((_, index) => {
          return (
            <div
              key={index}
              className={`${
                index + 1 === current ? "bg-blue-800" : "bg-white"
              } h-1 w-4 md:h-2 md:w-10 rounded-md md:rounded-2xl`}
            />
          );
        })}
      </div>
    </Carousel>
  );
};

export default HeroSection;
