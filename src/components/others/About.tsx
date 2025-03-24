import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const About = () => {
  const about = `The establishment of Purbanchal University in 1993 was visualized as an extraordinary endeavour by the Government of Nepal to create an academic centre of excellence in the Eastern Development Region of Nepal. Its prime role was outlined to act as a catalytic agent for the promotion of socio-economic transformation in Nepal through quality education appropriate for quality life and sustainable future. Since its establishment, the university is motivated by its fundamental objective of preserving, refining, inventing, adopting, extending and transmitting knowledge in an environment that fosters free enquiry and open scholarly debate, leading to all-encompassing development of the rural people and their economies and environment.
    `;
  return (
    <div className="flex flex-col gap-4 py-4 md:py-8 px-4 md:px-12 lg:px-20">
      <h1 className="text-blue-900 text-2xl md:text-3xl font-bold text-center sm:my-2">
        About Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full max-h-[400px]">
          <Image
            src="/hero.jpg"
            alt="college image"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="sm:hidden text-justify text-sm font-medium">
            {about.slice(0, 302)}...
          </p>
          <p className="hidden sm:block text-justify text-lg font-medium">
            {about}
          </p>
          <Button className="w-fit">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
