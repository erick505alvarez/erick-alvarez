import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import SkillCard from "../SkillCard";

interface ThirdExperienceSectionProps {}

const ThirdExperienceSection = forwardRef<
  HTMLDivElement,
  ThirdExperienceSectionProps
>((props, ref) => {
  const skills = ["Python", "PostgreSQL", "Jupyter"];
  return (
    <section
      className="THIRD-XP-PAGE snap-start h-screen border border-transparent"
      ref={ref}
    >
      <div className="CONTAINER w-[80%] ml-32 mt-8">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          BlackRock
        </h1>

        <div className="SKILLS-CONTAINER flex w-full gap-2 flex-wrap mb-8">
          {skills.map((skill, ix) => {
            return <SkillCard key={skill} skill={skill} />;
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
});

export default ThirdExperienceSection;
