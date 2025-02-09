import React, { ReactNode } from "react";
// import "../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className={"LAYOUT h-screen flex-grow overflow-hidden bg-off-white"}>
    <div className={"LAYOUT min-h-screen bg-off-white"}>
      {/* navbar */}
      <nav className="flex justify-end items-center px-6 h-[80px]">
        <a href="#contact">
          <button className="bg-primary text-white py-2 px-6 rounded-lg font-montserrat font-bold">
            Let's Chat
          </button>
        </a>
      </nav>
      {/* main body */}
      {children}
      {/* footer */}
    </div>
  );
};

export default Layout;
