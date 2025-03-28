import React from "react";

interface SingleSquareProps {
  dimensions: number;
  bgColorClass: string;
}

const SingleSquare: React.FC<SingleSquareProps> = ({
  dimensions = 100,
  bgColorClass,
}) => {
  return (
    <div
      className={`single-square ${bgColorClass}`}
      style={{ "--dimensions": `${dimensions}px` } as React.CSSProperties}
    ></div>
  );
};

export default SingleSquare;
