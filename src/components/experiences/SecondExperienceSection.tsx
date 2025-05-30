import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

import SkillCard from "../SkillCard";

interface SecondExperienceSectionProps {}

const SecondExperienceSection = forwardRef<
  HTMLDivElement,
  SecondExperienceSectionProps
>((props, ref) => {
  // console.log("SecondExperienceSection component rendered");

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
      className="SECOND-XP-PAGE md:snap-start sm:min-h-screen sm:pb-12  border border-transparent relative"
      ref={ref}
    >
      <div className="CONTAINER relative sm:w-[70%] md:w-[80%] sm:ml-32 mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          moleQLar (Open Source)
        </h1>
        <div className="PROJECT-EXHIBIT bg-gray-700 w-full h-[15rem] sm:h-[30rem] rounded-xl flex justify-center items-center mb-4 mt-auto overflow-hidden">
          <div className="IMG-CONTAINER wasy-img-dashboard relative w-[90%] max-w-[20rem] sm:max-w-[32rem] md:max-w-[40rem] flex flex-grow-0 items-center">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/moleqlar/moleqlar-mockup.png"
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
