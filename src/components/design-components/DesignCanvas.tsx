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
    WASY: "bg-orange-200",
    MOLEQLAR: "bg-purple-200",
    BLACKROCK: "bg-yellow-200",
    CONTACT: "bg-orange-200",
  };

  // single square styles
  const square_styles_1 = {
    HERO: "top-[75%] left-[25%]",
    WASY: "top-[25%] left-[45%]",
    MOLEQLAR: "top-[125%] left-[145%]",
    BLACKROCK: "top-[90%] left-[20%]",
    CONTACT: "top-[20%] left-[20%]",
  };
  const square_styles_2 = {
    HERO: "top-[25%] left-[45%]",
    WASY: "top-[25%] left-[45%]",
    MOLEQLAR: "top-[125%] left-[145%]",
    BLACKROCK: "top-[95%] left-[30%]",
    CONTACT: "top-[60%] left-[10%]",
  };
  const square_styles_3 = {
    HERO: "top-[15%] left-[25%]",
    WASY: "top-[80%] left-[80%]",
    MOLEQLAR: "top-[80%] left-[80%]",
    BLACKROCK: "top-[20%] left-[50%]",
    CONTACT: "top-[60%] left-[80%]",
  };
  const square_styles_4 = {
    HERO: "top-[85%] left-[50%]",
    WASY: "top-[90%] left-[50%]",
    MOLEQLAR: "top-[78%] left-[40%]",
    BLACKROCK: "top-[50%] left-[48%]",
    CONTACT: "top-[90%] left-[25%]",
  };

  // grid square styles
  const grid_square_styles_1 = {
    HERO: "top-[20%] left-[58%]",
    WASY: "top-[5%] left-[85%]",
    MOLEQLAR: "top-[55%] left-[86%]",
    BLACKROCK: "top-[75%] left-[75%]",
    CONTACT: "top-[10%] left-[80%]",
  };
  const grid_square_styles_2 = {
    HERO: "top-[120%] left-[158%]",
    WASY: "top-[105%] left-[185%]",
    MOLEQLAR: "top-[155%] left-[186%]",
    BLACKROCK: "top-[10%] left-[80%]",
    CONTACT: "top-[75%] left-[85%]",
  };
  const grid_square_styles_3 = {
    HERO: "top-[120%] left-[158%]",
    WASY: "top-[105%] left-[185%]",
    MOLEQLAR: "top-[155%] left-[186%]",
    BLACKROCK: "top-[110%] left-[180%]",
    CONTACT: "top-[30%] left-[10%]",
  };

  return (
    <div
      className={`DESIGN-CANVAS w-full z-0 top-0 bottom-0 left-0 right-0 ${section_bg_colors[currentPage]}`}
    >
      <SquareGrid
        gridDimensions={100}
        bgColorClass={square_bg_colors[currentPage]}
        positionClasses={grid_square_styles_1[currentPage]}
      />
      <SquareGrid
        gridDimensions={70}
        bgColorClass={square_bg_colors[currentPage]}
        positionClasses={grid_square_styles_2[currentPage]}
      />
      <SquareGrid
        gridDimensions={80}
        bgColorClass={square_bg_colors[currentPage]}
        positionClasses={grid_square_styles_3[currentPage]}
      />
      <div className="SINGLE-SQUARES-CONTAINER h-full w-full fixed">
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
          positionClasses={square_styles_1[currentPage]}
        />
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
          positionClasses={square_styles_2[currentPage]}
        />
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
          positionClasses={square_styles_3[currentPage]}
        />
        <SingleSquare
          dimensions={14}
          bgColorClass={square_bg_colors[currentPage]}
          positionClasses={square_styles_4[currentPage]}
        />
      </div>
      <Timeline />
    </div>
  );
};

export default DesignCanvas;
