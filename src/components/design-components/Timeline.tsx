import React from "react";
import { useDesignContext } from "../../contexts/DesignContext";

const Timeline = () => {
  const { currentPage } = useDesignContext();

  return (
    <div
      className="TIMELINE w-1 bg-orange-200 absolute h-screen left-16 top-20
    before:absolute before:top-0 before:left-0 before:content-[''] before:w-8 before:h-8 before:bg-orange-500 before:rounded-full
    before:-translate-y-1/2 before:-translate-x-[calc(50%_-_0.125rem)]
    "
    ></div>
  );
};

export default Timeline;
