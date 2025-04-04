import React from "react";
import SquareGrid from "./design-components/SquareGrid";
import SingleSquare from "./design-components/SingleSquare";

const DesignCanvas = () => {
  const { currentPage } = useDesignContext();

  return (
    <div className="DESIGN-CANVAS bg-orange-100 fixed w-full z-0 top-0 bottom-0 left-0 right-0">
      <SquareGrid gridDimensions={100} />
      <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
      <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
      <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
    </div>
  );
};

export default DesignCanvas;
