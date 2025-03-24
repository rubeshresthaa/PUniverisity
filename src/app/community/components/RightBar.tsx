import Image from "next/image";
import React from "react";

const RightBar = () => {
  return (
    <div className="relative hidden md:block">
      <div className="flex flex-col items-center gap-4 sticky top-28">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile Image"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-lg font-bold">Ujjwal Neupane</h1>
            <h2>@ujjwal1234</h2>
            <p className="font-medium">Full stack developer</p>
          </div>
          <div className="flex justify-between items-center gap-5">
            <p className="flex gap-2 flex-col items-center">
              <span className="font-semibold">Posts</span>
              <span>12</span>
            </p>
            <p className="flex gap-2 flex-col items-center">
              <span className="font-semibold">Likes</span>
              <span>100</span>
            </p>
            <p className="flex gap-2 flex-col items-center">
              <span className="font-semibold">Connection</span>
              <span>10</span>
            </p>
          </div>
          <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-sm font-semibold rounded w-full mt-4">
            View Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
