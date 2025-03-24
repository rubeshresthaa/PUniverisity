"use client";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";

const SecondBar = () => {
  const sentences = [
    "(2081-12-10): BE / B. Arch. - I Sem / (2081-12-10): MMT - IV / EMBA, MBA (Ex.) - I (Spring)",
    "(2081-12-08): BVScAH - VII, IX Sem / (2081-12-06): BBA - I, III, V Sem/ BCA, BIT",
    "BTech Biotech, BSc Biotech, BScAg, BSc Forestry, BVScAH, B Food / Dairy - I, III, VI Sem",
    "BTech AI, BSc FND, PGDCA - I Sem - Important Notices & Updates!"
  ];

  return (
    <div className="flex justify-evenly items-center px-5 md:px-10 bg-gray-950 py-2">
      {/* Notices Button */}
      <Button className="bg-white text-gray-950 py-5 flex items-center hover:bg-amber-50 cursor-pointer">
        <FaCalendarAlt className="mr-2" />
        Notices
      </Button>

      {/* Scrolling Text */}
      <div className="w-[70%] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex space-x-10">
          {sentences.map((sentence, i) => (
            <span key={i} className="text-white text-base md:text-lg font-semibold">
              {sentence}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondBar;
