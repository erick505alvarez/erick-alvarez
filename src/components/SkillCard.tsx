import React from "react";
import { useDesignContext } from "../contexts/DesignContext";

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { currentPage } = useDesignContext();

  const card_bg_colors = {
    HERO: "bg-orange-500",
    WASY: "bg-orange-500",
    MOLEQLAR: "bg-purple-500",
    BLACKROCK: "bg-yellow-500",
    CONTACT: "bg-orange-500",
  };

  return (
    <div
      className={`${card_bg_colors[currentPage]} px-3 py-[0.25rem] inline-block text-off-white font-outfit rounded-md text-xl`}
    >
      {skill}
    </div>
  );
};

export default SkillCard;
