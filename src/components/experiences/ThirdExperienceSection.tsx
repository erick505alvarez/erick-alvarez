import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

import SkillCard from "../SkillCard";

interface ThirdExperienceSectionProps {}

const ThirdExperienceSection = forwardRef<
  HTMLDivElement,
  ThirdExperienceSectionProps
>((props, ref) => {
  console.log("ThirdExperienceSection component rendered");

  const skills = ["Python", "PostgreSQL", "Jupyter"];
  return (
    <section
      className="THIRD-XP-PAGE snap-start h-auto sm:h-screen border border-transparent pb-10 sm:pb-0"
      ref={ref}
    >
      <div className="CONTAINER sm:w-[80%] sm:ml-32 mt-16 sm:mt-8 px-4 sm:px-0">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          BlackRock
        </h1>
        <div className="flex flex-col sm:flex-row">
          {/* images container */}
          <div className="IMAGES-CONTAINER flex flex-col relative sm:w-[70%]">
            <div className="IMG-WRAPPER relative md:max-w-[450px] mb-2 sm:mb-0">
              <StaticImage
                // className="w-full h-full flex-shrink-0"
                className="rounded-lg"
                src="../../images/speaker.jpg"
                alt="BlackRock Panel Discussion"
                placeholder="blurred"
                // width={550}
                // height={700}
                aspectRatio={3 / 4} // Replace with the actual aspect ratio of your image
              />
            </div>
            {/* internship photo */}
            <div className="IMG-WRAPPER sm:absolute -bottom-[10%] right-0 w-full sm:w-[18rem] h-[20rem] overflow-hidden">
              <StaticImage
                className="w-full h-full rounded-lg"
                src="../../images/blackrock.jpg"
                alt="BlackRock Panel Discussion"
                placeholder="blurred"
                // width={400}
                // height={800}
                aspectRatio={9 / 16}
              />
            </div>
          </div>
          {/* right side container */}
          <div className="RIGHT-SIDE relative w-full sm:w-[50%] font-montserrat text-xl">
            <div className="SKILLS-CONTAINER sm:absolute w-full my-4 sm:my-0 sm:w-auto bottom-0 left-4 flex sm:flex-col gap-2 flex-wrap">
              {skills.map((skill, ix) => {
                return <SkillCard key={skill} skill={skill} />;
              })}
            </div>
            <p className="w-full sm:absolute sm:top-[1%] right-0 sm:translate-x-[-2vw] mb-2 sm:mb-0 text-xs sm:text-lg">
              As the technology lead of a global portfolio management team, I
              spearheaded a team effort to author a{" "}
              <span className="font-bold">Python library</span> for BlackRock
              Transition Management’s trading and liquidity strategies.{" "}
            </p>
            <p className="w-full sm:absolute left-0 top-[40%] sm:-translate-y-10 text-xs sm:text-lg">
              This initiative <span className="font-bold">automated</span> and{" "}
              <span className="font-bold">optimized</span> the day-to-day
              operations to manage risk over the buying and selling of
              multi-billion dollars worth of equity, fixed income, FX, futures,
              and derivative assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default memo(ThirdExperienceSection);
