import React from "react";
import { useDesignContext } from "../../contexts/DesignContext";

interface SingleSquareProps {
  dimensions: number;
  positionClasses: string;
}

const SingleSquare: React.FC<SingleSquareProps> = ({
  dimensions = 100,
  positionClasses,
}) => {
  const { currentPage } = useDesignContext();

  const square_bg_colors = {
    HERO: "bg-orange-200",
    WASY: "bg-orange-200",
    MOLEQLAR: "bg-purple-200",
    BLACKROCK: "bg-yellow-200",
    CONTACT: "bg-orange-200",
  };

  return (
    <div
      className={`single-square ${square_bg_colors[currentPage]} ${positionClasses}`}
      style={{ "--dimensions": `${dimensions}px` } as React.CSSProperties}
    ></div>
  );
};

export default SingleSquare;
