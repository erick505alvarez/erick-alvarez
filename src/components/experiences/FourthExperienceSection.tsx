import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

// import SkillCard from "../SkillCard";

interface FourthExperienceSectionProps {}

const FourthExperienceSection = forwardRef<
  HTMLDivElement,
  FourthExperienceSectionProps
>((props, ref) => {
  console.log("FourthExperienceSection component rendered");

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
      className="SECOND-XP-PAGE snap-start sm:min-h-screen sm:pb-12  border border-transparent relative"
      ref={ref}
    >
      <div className="CONTAINER relative sm:w-[70%] md:w-[80%] sm:ml-32 mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4 text-blue-500"
        >
          Hobbies & Interests
        </h1>
        {/* <div className="PROJECT-EXHIBIT bg-gray-700 w-full h-[15rem] sm:h-[30rem] rounded-xl flex justify-center items-center mb-4 mt-auto overflow-hidden"> */}
        {/* <div className="IMG-CONTAINER relative w-[90%] max-w-[20rem] sm:max-w-[32rem] md:max-w-[40rem] flex flex-grow-0 items-center">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/moleqlar/moleqlar-mockup.png"
              alt="moleqlar mockup"
              placeholder="blurred"
              // width={800}
            />
          </div> */}
        {/* <div className="IMG-CONTAINER wasy-img-dashboard relative w-[25%] -translate-x-24 translate-y-10 mt-4">
            <StaticImage
              className="object-contain w-full flex-shrink-0"
              src="../../images/mockups/wasy/wasy-exhibit-mobile.png"
              alt="product mockup"
              placeholder="blurred"
              // width={800}
            />
          </div> */}
        {/* </div> */}
        {/* <div className="SKILLS-CONTAINER flex w-full gap-1 sm:gap-2 flex-wrap mb-4 sm:mb-8">
          {skills.map((skill, ix) => {
            return <SkillCard key={skill} skill={skill} />;
          })}
        </div> */}
      </div>
    </section>
  );
});

FourthExperienceSection.displayName = "Second Experience Section";

export default memo(FourthExperienceSection);
