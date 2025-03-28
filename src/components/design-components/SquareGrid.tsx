import React from "react";
import "../../styles/design.css";

interface SquareGridProps {
  gridDimensions: number;
}

const SquareGrid: React.FC<SquareGridProps> = ({ gridDimensions = 100 }) => {
  const squares = Array.from({ length: 25 }).map((_, i) => {
    return <div key={i} className="grid-square"></div>;
  });
  console.log(`${gridDimensions}px`);
  return (
    <div
      className="SQUARE_GRID_CONTAINER square-grid-container"
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
