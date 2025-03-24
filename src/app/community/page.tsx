import React from "react";
import PostCard from "./components/PostCard";

const Portal = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <PostCard />
      <hr className="bg-black" />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Portal;
