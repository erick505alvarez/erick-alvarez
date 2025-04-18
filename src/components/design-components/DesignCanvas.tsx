import React from "react";
import SquareGrid from "./SquareGrid";
import SingleSquare from "./SingleSquare";
import Timeline from "./Timeline";
import { useDesignContext } from "../../contexts/DesignContext";
import "../../styles/design.css";

const DesignCanvas = () => {
  const { currentPage } = useDesignContext();

  const section_bg_colors = {
    HERO: "bg-orange-100",
    WASY: "bg-orange-100",
    MOLEQLAR: "bg-white",
    BLACKROCK: "bg-white",
    CONTACT: "bg-orange-100",
  };

  const square_bg_colors = {
    HERO: "bg-orange-200",
    WASY: "bg-orange-300",
    MOLEQLAR: "bg-purple-200",
    BLACKROCK: "bg-yellow-200",
    CONTACT: "bg-orange-200",
  };

  // HERO = "HERO",
  // WASY = "WASY",
  // MOLEQLAR = "MOLEQLAR",
  // BLACKROCK = "BLACKROCK",
  // CONTACT = "CONTACT",

  return (
    <div
      className={`DESIGN-CANVAS w-full z-0 top-0 bottom-0 left-0 right-0 ${section_bg_colors[currentPage]}`}
    >
      <SquareGrid gridDimensions={100} />
      <div className="SINGLE-SQUARES-CONTAINER h-full w-full fixed">
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
        />
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
        />
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
        />
      </div>
      <Timeline />
    </div>
  );
};

export default DesignCanvas;
