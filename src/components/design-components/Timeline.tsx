import React from "react";
import { useDesignContext } from "../../contexts/DesignContext";

const Timeline = () => {
  const { currentPage } = useDesignContext();

  const line_color = {
    HERO: "sm:bg-orange-200",
    WASY: "sm:bg-orange-200",
    MOLEQLAR: "sm:bg-purple-200",
    BLACKROCK: "sm:bg-yellow-200",
    HOBBIES: "sm:bg-blue-300",
    CONTACT: "sm:bg-orange-200",
  };

  const point_color = {
    HERO: "sm:before:bg-orange-500",
    WASY: "sm:before:bg-orange-500",
    MOLEQLAR: "sm:before:bg-purple-500",
    BLACKROCK: "sm:before:bg-yellow-500",
    HOBBIES: "sm:before:bg-blue-500",
    CONTACT: "sm:before:bg-orange-500",
  };

  const line_position = {
    HERO: "sm:hidden",
    WASY: "sm:top-20",
    MOLEQLAR: "sm:top-0",
    BLACKROCK: "sm:top-0",
    HOBBIES: "sm:top-0",
    CONTACT: "sm:bottom-20",
  };

  const point_position = {
    HERO: "sm:before:hidden",
    WASY: "sm:before:top-0",
    MOLEQLAR: "sm:before:top-[25%]",
    BLACKROCK: "sm:before:top-[50%]",
    HOBBIES: "sm:before:top-[75%]",
    CONTACT: "sm:before:bottom-0 sm:before:translate-y-0",
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
