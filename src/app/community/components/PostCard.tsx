"use client";
import {
  Bookmark,
  Delete,
  Edit,
  LucideEllipsisVertical,
  Share2Icon,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const PostCard = ({ props }: PostProp) => {
  const {
    id,
    title,
    description,
    image,
    authorImage,
    authorName,
    published_date,
    likes,
    tag,
    comments,
  } = props;
  console.log(published_date, id);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:max-w-xl flex flex-col gap-8 shadow rounded-md shadow-purple-400 p-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-lg font-semibold capitalize">{title}</h1>
          <h1 className="text-base font-semibold capitalize py-1 px-2 rounded bg-purple-800 text-white">
            {tag}
          </h1>
        </div>
        {image && (
          <div className="w-full h-72">
            <Image
              src={image}
              alt="post image"
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}
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
        <Link href="#" className="flex gap-2 items-center">
          <div className="w-10 h-10">
            <Image
              src={authorImage}
              alt="Profile"
              height={0}
              width={0}
              sizes="100vw"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h1 className="text-base font-semibold capitalize">{authorName}</h1>
        </Link>
        <p className="text-base font-medium">26 Mar 2025</p>
      </div>
      <div className="flex gap-2 items-center w-full justify-between">
        <button className="flex gap-2 items-baseline bg-purple-100 hover:bg-purple-200 rounded px-2 py-1">
          <span className="text-base">{likes}</span>
          <span>
            <ThumbsUp size={18} />
          </span>
        </button>
        <button className="bg-purple-100 hover:bg-purple-200 rounded px-2 py-2">
          <Share2Icon size={18} />
        </button>

        <div className="w-full gap-4 flex items-center">
          <input
            type="text"
            className="p-2 border-b outline-none text-sm w-full active:outline"
            placeholder="Type your response"
          />
          <button className="bg-purple-100 hover:bg-purple-200 rounded py-1 px-4 w-fit">
            Respond
          </button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-purple-100 hover:bg-purple-200 rounded px-2 py-2">
            <LucideEllipsisVertical size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Manage Post</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>
                <Bookmark size={16} />
              </span>
              <span>Save</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>
                <Edit size={16} />
              </span>
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>
                <Delete size={16} />
              </span>
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {comments && comments.length > 0 && (
        <div className="flex flex-col gap-2">
          {comments.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Link href="#" className="flex gap-2 items-center">
                <div className="w-8 h-8">
                  <Image
                    src={item.authorImage}
                    alt="Profile"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h1 className="text-sm font-semibold capitalize">
                  {item.authorName}
                </h1>
              </Link>
              <p className="px-8">{item.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
