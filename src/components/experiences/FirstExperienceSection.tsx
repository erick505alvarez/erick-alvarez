import React, { forwardRef, memo } from "react";
import SkillCard from "../SkillCard";

import { StaticImage } from "gatsby-plugin-image";

interface FirstExperienceSectionProps {}

const FirstExperienceSection = forwardRef<
  HTMLDivElement,
  FirstExperienceSectionProps
>((props, ref) => {
  console.log("FirstExperienceSection component rendered");

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
    <section
      className="FIRST-XP-PAGE snap-start h-auto md:min-h-screen sm:h-screen border border-transparent relative"
      id="wasy"
      ref={ref}
    >
      <div className="CONTAINER sm:w-[80%] mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4
        "
        >
          Wasy.ai
        </h1>
        <div className="PROJECT-EXHIBIT wasy-exhibit-container bg-gray-700 w-full h-[15rem] sm:h-[30rem] rounded-xl flex mb-4 mt-auto overflow-hidden">
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[70%] mt-2 ml-2 sm:mt-6 sm:ml-12">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-desktop.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div>
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[25%] sm:-translate-x-24 sm:translate-y-10 mt-10 sm:mt-4">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-mobile.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div>
        </div>
        <div className="SKILLS-CONTAINER flex w-full gap-1 sm:gap-2 flex-wrap mb-4 sm:mb-8">
          {skills.map((skill, ix) => {
            return <SkillCard key={skill} skill={skill} />;
          })}
        </div>
        <p className="text-xs sm:text-lg">
          A platform for e-commerce businesses to automate customer service
          through the use and AI agents and integration with Meta Business
          Portfolios and their associated WhatsApp Business Accounts.
        </p>
      </div>
    </section>
  );
});

FirstExperienceSection.displayName = "First Experience Section";

export default memo(FirstExperienceSection);
