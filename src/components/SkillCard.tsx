import React, { memo } from "react";
import { useDesignContext } from "../contexts/DesignContext";

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { currentPage } = useDesignContext();

  const card_bg_colors = {
    HERO: "bg-orange-500",
    WASY: "bg-orange-300",
    MOLEQLAR: "bg-purple-400",
    BLACKROCK: "bg-yellow-500",
    HOBBIES: "bg-blue-500",
    CONTACT: "bg-orange-500",
  };

  return (
    <div
      className={`${card_bg_colors[currentPage]} px-3 py-[0.25rem] inline-block text-off-white font-outfit rounded-md text-xs sm:text-xl w-max`}
    >
      {skill}
    </div>
  );
};

export default memo(SkillCard);
