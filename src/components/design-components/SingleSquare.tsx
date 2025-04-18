import React from "react";

interface SingleSquareProps {
  dimensions: number;
  bgColorClass: string;
  positionClasses: string;
}

const SingleSquare: React.FC<SingleSquareProps> = ({
  dimensions = 100,
  bgColorClass,
  positionClasses,
}) => {
  return (
    <div
      className={`single-square ${bgColorClass} ${positionClasses}`}
      style={{ "--dimensions": `${dimensions}px` } as React.CSSProperties}
    ></div>
  );
};

export default SingleSquare;
