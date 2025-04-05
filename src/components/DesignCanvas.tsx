import React from "react";
import SquareGrid from "./design-components/SquareGrid";
import SingleSquare from "./design-components/SingleSquare";
import { useDesignContext } from "../contexts/DesignContext";
import "../styles/design.css";

const DesignCanvas = () => {
  const { currentPage } = useDesignContext();

  return (
    <div className="DESIGN-CANVAS bg-orange-100 w-full z-0 top-0 bottom-0 left-0 right-0">
      <SquareGrid gridDimensions={100} />
      <div className="SINGLE-SQUARES-CONTAINER h-full w-full fixed">
        <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
        <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
        <SingleSquare dimensions={14} bgColorClass="bg-orange-200" />
      </div>
    </div>
  );
};

export default DesignCanvas;
