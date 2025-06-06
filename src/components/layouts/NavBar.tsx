"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { RiMenuFill } from "react-icons/ri";
import Main from "../auth/Main";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const access = localStorage.getItem("access")
    ? localStorage.getItem("access")
    : null;
  return (
    <div className="flex justify-between items-center px-2 sm:px-12 lg:px-20  py-1 lg:py-3 sticky top-0 z-50 bg-white">
      <Link href="/" className="flex items-center gap-1 sm:gap-2">
        <Image
          src="/plogo.png"
          alt="Image of Purvanchal University"
          width={60}
          height={60}
        />
        <div>
          <h1 className="capitalize text-base sm:text-xl md:text-xl text-blue-900 font-bold flex flex-col sm:flex-row sm:gap-1">
            <span>Purbanchal</span> <span>University</span>
          </h1>
          <p className="hidden sm:block text-sm font-medium text-blue-950">
            Office Of The Examination Department, Biratnagar
          </p>
        </div>
      </Link>
      <div className="hidden md:flex items-center space-x-6 text-base font-semibold ">
        <div className="hover:scale-105 transition-transform duration-300 ease-in">
          <Link href={"/#about"}>About</Link>
        </div>
        <div className="hover:scale-105 transition-transform duration-300 ease-in">
          <Link href={"/#program"}>Programs</Link>
        </div>

        <div className="hover:scale-105 transition-transform duration-300 ease-in">
          <Link href={"/#college"}>College</Link>
        </div>
        <div className="hover:scale-110 transition-transform duration-300 ease-in">
          <Link href={"/result"}>Result</Link>
        </div>
        <div className="hover:scale-110 transition-transform duration-300 ease-in">
          <Link href={"#"}>Form</Link>
        </div>
        <div className="hover:scale-110 transition-transform duration-300 ease-in">
          <Link href={"/blog"}>Blog</Link>
        </div>

        <div className="hover:scale-105 transition-transform duration-300 ease-in">
          <Link href={"/#contact"}>Contact</Link>
        </div>
        {access ? <Link href="/community">Community</Link> : <Main />}
      </div>
      {/* Mobile Screen */}
      <div className="block md:hidden">
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="bg-white hover:bg-white cursor-pointer"
        >
          <RiMenuFill size={20} className="text-black bg-white" />
        </button>
        <div
          className={`absolute top-0 right-0 z-50 min-w-50 h-screen ${
            openMenu ? "flex" : "hidden"
          } flex-col items-end p-4 h-screen bg-white gap-4 text-gray-900`}
        >
          <Button
            className="text-xl bg-white hover:bg-white cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <IoClose size={30} className="text-black" />
          </Button>
          <div className="flex flex-col gap-2 text-base items-start space-y-5 px-2">
            <div className="flex justify-between items-center gap-2 ">
              <Image
                src="/plogo.png"
                alt="Logo Mobile"
                width={40}
                height={40}
              />
              <h1 className="capitalize text-blue-950 font-semibold">
                Purbhanchal University
              </h1>
            </div>

            <Link href="/#home" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
            <Link href="/blog" onClick={() => setOpenMenu(false)}>
              Blog
            </Link>
            <Link href="/#program" onClick={() => setOpenMenu(false)}>
              Programs
            </Link>
            <Link href="/#news" onClick={() => setOpenMenu(false)}>
              News
            </Link>
            <Link href="/#college" onClick={() => setOpenMenu(false)}>
              Affiliated College
            </Link>
            <Link href="/result" onClick={() => setOpenMenu(false)}>
              Results
            </Link>
            <Link href="/#contact" onClick={() => setOpenMenu(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
