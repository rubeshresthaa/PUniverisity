"use client";
import React from "react";
import PostCard from "./components/PostCard";
import { postlist } from "@/constants";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Portal = () => {
  const access = localStorage.getItem("access");
  const router = useRouter();
  if (!access) {
    toast("Login required to access community page");
    router.push("/");
  }
  return (
    <div className="flex flex-col gap-8 items-center">
      {postlist.map((item) => (
        <PostCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portal;
