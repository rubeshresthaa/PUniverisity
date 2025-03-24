import { Bookmark, Home, TrendingUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="relative hidden md:block">
      <div className="flex flex-col gap-4 px-2 sticky top-28">
        <Link
          className="text-lg flex gap-3 items-center text-black font-semibold"
          href="#"
        >
          <span>
            <Home size={20} />
          </span>
          <span>Home</span>
        </Link>
        <Link
          className="text-lg flex gap-3 items-center text-black font-semibold"
          href="#"
        >
          <span>
            <TrendingUpDown size={20} />
          </span>
          <span>Trendings</span>
        </Link>
        <Link
          className="text-lg flex gap-3 items-center text-black font-semibold"
          href="#"
        >
          <span>
            <Bookmark size={20} />
          </span>
          <span>Saved</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
