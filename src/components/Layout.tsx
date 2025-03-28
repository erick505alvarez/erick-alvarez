import React, { ReactNode } from "react";
import SquareGrid from "./design-components/SquareGrid";
import SingleSquare from "./design-components/SingleSquare";
// import "../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className={"LAYOUT h-screen flex-grow overflow-hidden bg-off-white"}>
    <div className={"LAYOUT h-[100vh] flex flex-col"}>
      {/* design canvas */}
      <div className="DESIGN-CANVAS fixed w-full z-0 top-0 bottom-0 left-0 right-0">
        <SquareGrid gridDimensions={100} />
        <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
      </div>
      <div className="relative z-1 h-full w-full overflow-y-auto">
        {/* navbar */}
        <nav className="flex justify-end items-center px-6 h-[80px]">
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
