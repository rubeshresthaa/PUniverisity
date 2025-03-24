"use client";
import { Share2Icon, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const PostCard = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          debitis magnam laudantium aperiam autem voluptatum rem temporibus cum
          non? Accusantium dolorum recusandae voluptatum? Vitae quos quaerat
          quis! Sint error, quasi ab amet voluptatum, at sit suscipit quo minus
          nobis reiciendis quae. Excepturi, ea! Repudiandae dignissimos eos
          ratione repellat saepe inventore Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Reprehenderit blanditiis quibusdam quos
          aut alias delectus suscipit vel necessitatibus quod temporibus
          laboriosam tempore totam sed, officia magnam soluta quas deserunt!
          Molestiae magnam sed, repellendus obcaecati officia recusandae. Sit,
          ipsum officia eum mollitia ipsam minima facere nihil explicabo veniam
          voluptates animi quos?`;
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-xl flex flex-col gap-8 shadow rounded-md shadow-purple-400 p-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">title</h1>
        <div className="w-full h-72">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post image"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col gap-0.5 items-start">
          {!open ? (
            <p className="text-base font-medium text-justify text-gray-700">
              {description.slice(0, 350)}
            </p>
          ) : (
            <p className="text-base font-medium text-justify text-gray-700">
              {description}
            </p>
          )}

          <button
            onClick={() => setOpen((open) => !open)}
            className="font-semibold text-base underline"
          >
            {open ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-2 items-center">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            height={32}
            width={32}
            className="rounded-full object-cover"
          />
          <h1 className="text-sm font-semibold">Ujjwal Neupane</h1>
        </div>
        <p className="text-sm font-medium">36 Hours Ago</p>
      </div>
      <div className="flex gap-2 items-center w-full justify-between">
        <button className="bg-purple-100 hover:bg-purple-200 rounded-full p-2">
          <ThumbsUp />
        </button>
        <button className="bg-purple-100 hover:bg-purple-200 rounded-full p-2">
          <Share2Icon />
        </button>
        <div className="w-full gap-4 flex items-center">
          <input
            type="text"
            className="p-2 border-b outline-none text-sm min-w-xs w-full active:outline"
            placeholder="Type your response"
          />
          <button className="bg-purple-100 hover:bg-purple-200 rounded py-1 px-4 w-fit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
