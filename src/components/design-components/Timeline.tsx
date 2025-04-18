import React from "react";
import { useDesignContext } from "../../contexts/DesignContext";

const Timeline = () => {
  const { currentPage } = useDesignContext();

  const line_color = {
    HERO: "bg-orange-200",
    WASY: "bg-orange-200",
    MOLEQLAR: "bg-purple-200",
    BLACKROCK: "bg-yellow-200",
    CONTACT: "bg-orange-200",
  };

  const point_color = {
    HERO: "before:bg-orange-500",
    WASY: "before:bg-orange-500",
    MOLEQLAR: "before:bg-purple-500",
    BLACKROCK: "before:bg-yellow-500",
    CONTACT: "before:bg-orange-500",
  };

  return (
    <div
      className={`TIMELINE ${point_color[currentPage]} w-1 absolute h-screen left-16 top-20
    before:absolute before:top-0 before:left-0 before:content-[''] before:w-8 before:h-8 ${line_color[currentPage]}
    before:rounded-full before:-translate-y-1/2 before:-translate-x-[calc(50%_-_0.125rem)]
    `}
    ></div>
  );
};

export default Timeline;
