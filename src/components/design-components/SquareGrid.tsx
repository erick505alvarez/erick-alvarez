import React from "react";
import "../../styles/design.css";

interface SquareGridProps {
  gridDimensions: number;
  bgColorClass: string;
  positionClasses: string;
}

const SquareGrid: React.FC<SquareGridProps> = ({
  gridDimensions = 100,
  bgColorClass,
  positionClasses,
}) => {
  const squares = Array.from({ length: 25 }).map((_, i) => {
    return <div key={i} className={`grid-square ${bgColorClass}`}></div>;
  });
  return (
    <div
      className={`SQUARE_GRID_CONTAINER square-grid-container ${positionClasses}`}
      style={
        {
          "--grid-dimensions": `${gridDimensions}px`,
        } as React.CSSProperties
      }
    >
      {squares}
    </div>
  );
};

export default SquareGrid;
