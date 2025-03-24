import React from "react";

import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 sm:px-8 md:px-12 lg:px-32 sticky top-0 bg-white">
      <div className="flex items-center gap-1">
        <Image
          src="/plogo.png"
          alt="Image of Purvanchal University"
          width={60}
          height={60}
        />
        <p className="font-semibold text-lg">Purbanchal University</p>
      </div>
      <div className="flex gap-5 items-center">
        <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-sm font-semibold rounded">
          Add New Post
        </button>
        <Link
          href="#"
          className="bg-purple-100 relative  hover:bg-purple-200 rounded-full p-2"
        >
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-800 rounded-full" />
          <IoNotificationsCircleOutline size={24} />
        </Link>
        <Link
          href="#"
          className="bg-purple-100 hover:bg-purple-200 p-2 rounded"
        >
          <LogOut size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
