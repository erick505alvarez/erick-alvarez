import React from "react";
import SkillCard from "../SkillCard";

const FirstExperienceSection = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Express",
    "Docker",
    "Redis",
    "WebSockets",
    "Supabase",
    "PostgreSQL",
    "Jest",
    "Figma",
    "React Query",
  ];
  return (
    <section className="FIRST-XP-PAGE snap-start h-screen border border-transparent">
      <div className="CONTAINER w-[80%] ml-32 mt-20">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4
        "
        >
          Wasy.ai
        </h1>
        <div className="PROJECT-EXHIBIT bg-gray-700 w-full h-[30rem] rounded-xl mb-4"></div>
        <div className="SKILLS-CONTAINER flex w-full gap-2 flex-wrap mb-8">
          {skills.map((skill, ix) => {
            return <SkillCard skill={skill} color={"bg-orange-300"} />;
          })}
        </div>
        <p>
          A platform for e-commerce businesses to automate customer service
          through the use and AI agents and integration with Meta Business
          Portfolios and their associated WhatsApp Business Accounts.
        </p>
      </div>
    </section>
  );
};

export default FirstExperienceSection;
