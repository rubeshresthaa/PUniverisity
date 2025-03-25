"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import AddNewPost from "./AddNewPost";
import { useRouter } from "next/navigation";
const Nav = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <div className="flex justify-between items-center py-2 px-4 sm:px-8 md:px-12 lg:px-32 sticky top-0 bg-white">
      <div className="flex items-center gap-1">
        <Image
          src="/plogo.png"
          alt="Image of Purvanchal University"
          width={60}
          height={60}
        />
        <p className="font-semibold text-lg hidden sm:block">
          Purbanchal University
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-sm font-semibold rounded w-full">
            Add New Post
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-xl font-semibold">
                Add New Post
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                You can share your current experience, skills and thoughts to
                this wonderful community
              </DialogDescription>
            </DialogHeader>
            <AddNewPost />
          </DialogContent>
        </Dialog>
        <Link
          href="#"
          className="bg-purple-100 relative  hover:bg-purple-200 rounded-full p-2"
        >
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-800 rounded-full" />
          <IoNotificationsCircleOutline size={24} />
        </Link>
        <AlertDialog>
          <AlertDialogTrigger className="bg-purple-100 hover:bg-purple-200 p-2 rounded">
            <LogOut size={18} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you wanna logout?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Nav;
