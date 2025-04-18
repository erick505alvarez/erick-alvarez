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

  const line_position = {
    HERO: "top-20",
    WASY: "top-20",
    MOLEQLAR: "top-0",
    BLACKROCK: "top-0",
    CONTACT: "bottom-20",
  };

  const point_position = {
    HERO: "before:top-0",
    WASY: "before:top-0",
    MOLEQLAR: "before:top-[30%]",
    BLACKROCK: "before:top-[60%]",
    CONTACT: "before:bottom-0 before:translate-y-0",
  };

  return (
    <div
      className={`TIMELINE ${point_color[currentPage]} ${point_position[currentPage]} ${line_position[currentPage]}
        w-1 absolute h-screen left-16 ${line_color[currentPage]}
    before:absolute before:left-0 before:content-[''] before:w-8 before:h-8 
    before:rounded-full before:-translate-y-1/2 before:-translate-x-[calc(50%_-_0.125rem)]
    `}
    ></div>
  );
};

export default Timeline;
