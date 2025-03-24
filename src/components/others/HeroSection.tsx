"use client";
import Image from "next/image"
import { Button } from "../ui/button"
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.animate-side', {
      origin: 'left',
      distance: '400px',
      duration: 1000,
      easing: 'ease-in',
      reset: true,
    });
  }, []);
  return (
    <div
      style={{ backgroundImage: "url('/hero.jpg')" }}
      className="w-full h-[550px] bg-cover bg-center relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center animate-side">
        <Image
          src="/plogo.png"
          alt="Purbanchal University"
          width={200} 
          height={200}
          className="opacity-80"
        />
        <div className="space-y-2">
          <h1 className="text-lg lg:text-4xl font-bold text-amber-50">
            PURBANCHAL UNIVERSITY
          </h1>
          <h2 className="lg:text-3xl text-amber-50 font-medium">
            Office Of The Examination Department, Biratnagar
          </h2>
          <div className="flex flex-col justify-center items-center gap-2">
          <Button className="bg-blue-900 hover:bg-blue-950 w-40 py-5 cursor-pointer">Apply Now</Button>
          <Button className="bg-red-700 hover:bg-red-800 w-52 py-5 cursor-pointer">View Affiliated Colleges</Button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
