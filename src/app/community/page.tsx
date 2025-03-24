import React from "react";
import PostCard from "./components/PostCard";
import { postlist } from "@/constants";

const Portal = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      {postlist.map((item) => (
        <PostCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portal;
