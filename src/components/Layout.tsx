import React, { ReactNode } from "react";
// import "../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className={"LAYOUT h-screen flex-grow overflow-hidden bg-off-white"}>
    <div className={"LAYOUT h-screen flex-grow overflow-y-auto bg-off-white"}>
      {/* navbar */}
      <nav className="flex justify-end py-2 px-6 h-[60px]">
        <button className="bg-primary text-white py-2 px-6 rounded-lg font-montserrat font-bold">
          Let's Chat
        </button>
      </nav>
      {/* main body */}
      {children}
      {/* footer */}
    </div>
  );
};

export default Layout;
