import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import SkillCard from "../SkillCard";

interface SecondExperienceSectionProps {}

const SecondExperienceSection = forwardRef<
  HTMLDivElement,
  SecondExperienceSectionProps
>((props, ref) => {
  const skills = [
    "React",
    "JavaScript",
    "Express",
    "GraphQL",
    "Jest",
    "React Testing Library",
    "Supabase",
    "PostgreSQL",
    "Figma",
  ];
  return (
    <section
      className="SECOND-XP-PAGE snap-start h-screen border border-transparent"
      ref={ref}
    >
      <div className="CONTAINER w-[80%] ml-32 mt-8">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          moleQLar
        </h1>
        <div className="PROJECT-EXHIBIT wasy-exhibit-container bg-gray-700 w-full h-[30rem] rounded-xl mb-4 mt-auto flex justify-around overflow-hidden">
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[75%] mt-6 ml-12">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-desktop.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div>
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[25%] -translate-x-24 translate-y-10 mt-4">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-mobile.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div>
        </div>
        <div className="SKILLS-CONTAINER flex w-full gap-2 flex-wrap mb-8">
          {skills.map((skill, ix) => {
            return (
              <SkillCard key={skill} skill={skill} color={"bg-orange-300"} />
            );
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

export default SecondExperienceSection;
