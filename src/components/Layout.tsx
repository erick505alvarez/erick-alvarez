import React, { ReactNode } from "react";
import DesignCanvas from "./DesignCanvas";
// import "../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className={"LAYOUT h-screen flex-grow overflow-hidden bg-off-white"}>
    <div className={"LAYOUT h-[100vh] flex flex-col"}>
      <DesignCanvas />
      <div className="relative z-1 h-full w-full overflow-y-auto">
        {/* navbar */}
        <nav className="flex absolute justify-end items-center px-6 h-[80px] w-full">
          <a href="#contact">
            <button className="bg-primary text-white py-2 px-6 rounded-md font-montserrat font-bold">
              Let's Chat
            </button>
          </a>
        </nav>
        {/* main body */}
        {children}
        {/* footer */}
      </div>
    </div>
  );
};

export default Layout;
