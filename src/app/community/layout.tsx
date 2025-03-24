import React, { ReactNode } from "react";
import "../globals.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <Nav />
          <div className="flex gap-10 px-4 sm:px-8 md:px-12 lg:px-32 py-8 justify-between">
            <Sidebar />
            {children}
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
