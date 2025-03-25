import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login1 from "./Login1";
import Signup1 from "./Signup1";

const Main = () => {
  return (
    <Dialog>
      <DialogTrigger className="px-2 py-0.5 bg-blue-800 hover:bg-blue-700 text-white rounded">
        Login
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[60%] overflow-y-auto py-10">
        <DialogHeader>
          <DialogTitle className="hidden">Register user</DialogTitle>
        </DialogHeader>
        <Tabs
          defaultValue="login"
          className="w-full flex flex-col items-center justify-center gap-3 sm:gap-5"
        >
          <TabsList>
            <TabsTrigger value="login" className="w-full">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className=" w-full">
              Signup
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-72 sm:w-full" value="login">
            <Login1 />
          </TabsContent>
          <TabsContent className="w-72 sm:w-full" value="signup">
            <Signup1 />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Main;
