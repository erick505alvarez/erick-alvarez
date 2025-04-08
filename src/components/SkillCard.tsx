import React from "react";

interface SkillCardProps {
  skill: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, color }) => {
  return (
    <div
      className={`${color} px-3 py-[0.25rem] inline-block text-off-white font-outfit rounded-md text-xl`}
    >
      {skill}
    </div>
  );
};

export default SkillCard;
