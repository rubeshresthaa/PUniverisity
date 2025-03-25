"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll event to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const quickLinks = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Notice & Events",
      link: "/notice",
    },
    {
      name: "Program",
      link: "/program",
    },
    {
      name: "Affiliated College",
      link: "/affiliated",
    },
    {
      name: "Result",
      link: "/result",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <section className="relative flex flex-col text-white mt-2 md:mt-4">
      <div className="bg-[#050930] px-4 sm:px-12 lg:px-24 xl:px-32">
        {/* top section */}
        <div className="flex flex-col gap-5 md:flex-row items-start justify-between py-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-20 sm:h-20">
                <Image
                  objectFit="contain"
                  src="/plogo.png"
                  alt="school logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <Link
                  href="/"
                  className="font-semibold flex sm:flex-row flex-col gap-1 text-2xl"
                >
                  PURBANCHAL UNIVERSITY
                </Link>
                <p className="text-sm">
                  Office Of The Examination Department, Biratnagar
                </p>
              </div>
            </div>

            <p className="text-justify px-0 md:px-2 max-w-96 text-sm md:text-base">
              Purbanchal University, established in 1993 by the Government of
              Nepal, aims to be a center of academic excellence in the Eastern
              Development Region. It focuses on promoting socio-economic
              transformation through quality education for a sustainable future.
              Dedicated to preserving, advancing, and sharing knowledge, the
              university fosters open inquiry and scholarly debate to support
              the development of rural communities and their economies.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Quick Links</h1>
            <div className="flex flex-col gap-1 text-sm md:text-base">
              <Link href="#home">Home</Link>
              <Link href="#about">About Us</Link>
              <Link href="#blog">Notice & Events</Link>
              <Link href="#contact">Program</Link>
              <Link href="#contact">Affiliated College</Link>
              <Link href="#testimonial">Result</Link>
              <Link href="#contact">Contact Us</Link>
            </div>
          </div>
          {/* Program Section */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Programs</h1>
            <div className="flex flex-col gap-1">
              <ul className="cursor-pointer text-sm md:text-base">
                <li>Management</li>
                <li>Science & Technology</li>
                <li>Education</li>
                <li>Law</li>
                <li>Medical & Allied Science</li>
                <li>Arts</li>
                <li>Engineering</li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg">Contact Us</h1>
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <p>Registration:+977-21-464502</p>
                <p>Engineering:+977-21-464964</p>
                <p>Engineering:+977-21-464964</p>
                <p>Arts/Education/S & T:+977-21-464338</p>
                <p>Medical & Allied Science:+977-21-464339</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/share/1BfYGM7FaX/"
                target="_blank"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/explore/locations/1028973704/purbanchal-university-koshi-haraicha-gothagoun-morang/?hl=en"
                target="_blank"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <p className="flex sm:flex-row flex-col items-center justify-center sm:gap-2 py-2 bg-[#131317] text-white text-sm md:text-base">
        <span className="flex items-center gap-1">
          <FaRegCopyright />
          <span>2025 Purbanchal University.</span>
        </span>
        <span>All rights are reserved.</span>
      </p>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-20 p-2.5 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-950 transition duration-300 cursor-pointer"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </section>
  );
};
export default Footer;
