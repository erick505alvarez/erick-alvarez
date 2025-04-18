import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

import SkillCard from "../SkillCard";

interface SecondExperienceSectionProps {}

const SecondExperienceSection = forwardRef<
  HTMLDivElement,
  SecondExperienceSectionProps
>((props, ref) => {
  console.log("SecondExperienceSection component rendered");

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
      className="SECOND-XP-PAGE snap-start sm:h-screen md:min-h-screen border border-transparent relative"
      ref={ref}
    >
      <div className="CONTAINER sm:w-[80%] sm:ml-32 mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          moleQLar
        </h1>
        <div className="PROJECT-EXHIBIT bg-gray-700 w-full h-[15rem] sm:h-[30rem] rounded-xl flex justify-center items-center md:block mb-4 mt-auto overflow-hidden">
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[70%] sm:mt-6 sm:ml-12">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/moleqlar/moleqlar-mock-up-desktop.png"
              alt="moleqlar mockup"
              placeholder="blurred"
              // width={800}
            />
          </div>
          {/* <div className="IMG-CONTAINER wasy-img-dashboard relative w-[25%] -translate-x-24 translate-y-10 mt-4">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-mobile.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div> */}
        </div>
        <div className="SKILLS-CONTAINER flex w-full gap-1 sm:gap-2 flex-wrap mb-4 sm:mb-8">
          {skills.map((skill, ix) => {
            return <SkillCard key={skill} skill={skill} />;
          })}
        </div>
        <p className="text-xs sm:text-lg">
          moleQLar offers a powerful, dynamic tool to bypass the monotony of
          writing TypeDef and Resolver functions through the use of a live
          editor to visualize a node graph for your PostgreSQL database. This
          tool automatically generates the required code for your GraphQL
          implementation. This innovative solution allows developers to focus on
          the benefits of GraphQL while outsourcing the code repetition.
        </p>
      </div>
    </section>
  );
});

SecondExperienceSection.displayName = "Second Experience Section";

export default memo(SecondExperienceSection);
