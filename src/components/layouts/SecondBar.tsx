"use client";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const SecondBar = () => {
  const sentences = [
    "(2081-12-10): BE / B. Arch. - I Sem / (2081-12-10): MMT - IV / EMBA, MBA (Ex.) - I (Spring)",
    "(2081-12-08): BVScAH - VII, IX Sem / (2081-12-06): BBA - I, III, V Sem/ BCA, BIT",
    "BTech Biotech, BSc Biotech, BScAg, BSc Forestry, BVScAH, B Food / Dairy - I, III, VI Sem",
    "BTech AI, BSc FND, PGDCA - I Sem - Important Notices & Updates!",
  ];

  return (
    <div
      id="home"
      className="flex justify-between items-center px-4 sm:px-12 lg:px-20 bg-gray-950 py-2"
    >
      {/* Notices Button */}
      <Link
        href="#news"
        className="bg-white text-gray-950 px-2 py-0.5 flex items-center rounded hover:bg-amber-50 cursor-pointer"
      >
        <FaCalendarAlt className="mr-2" />
        <span>Notices</span>
      </Link>

      {/* Scrolling Text */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex space-x-10">
          {sentences.map((sentence, i) => (
            <span
              key={i}
              className="text-white text-base md:text-lg font-semibold"
            >
              {sentence}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondBar;
