"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Reduced threshold for better detection
    triggerOnce: true, // Ensures it only animates once
  });

  return (
    <div
      ref={ref} // Attach ref here
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="absolute inset-0 text-xl md:text-4xl text-gray-50 text-center font-bold py-4 md:py-8">Our Achivements</h1>
      {/* Content */}
      <div className="absolute inset-0 flex justify-evenly items-center text-white px-2 md:px-0">
        {/* Academic Staffs */}
        <div>
          <div className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {inView ? <CountUp start={1} end={96} duration={5} /> : "0"}
          </div>
          <div className="text-lg md:text-4xl tracking-wider text-center font-bold">
            Staffs
          </div>
        </div>
        {/* Students */}
        <div>
          <div className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {inView ? <CountUp start={0} end={26128} duration={3} /> : "0"}
          </div>
          <div className="text-lg md:text-4xl font-bold tracking-wider text-center">
            Students 
          </div>
        </div>
        {/* Staff */}
        <div>
          <div className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {inView ? <CountUp start={0} end={125} duration={5} /> : "0"}
          </div>
          <div className="text-lg md:text-4xl font-bold  tracking-wider text-center">
            Colleges
          </div>
        </div>
      {/* Administrative Staff */}
        <div>
          <div className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {inView ? <CountUp start={0} end={296} duration={3} /> : "0"}
          </div>
          <div className="text-lg md:text-4xl font-bold  tracking-wider text-center">
            Users
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
