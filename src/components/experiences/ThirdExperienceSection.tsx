import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

import SkillCard from "../SkillCard";

interface ThirdExperienceSectionProps {}

const ThirdExperienceSection = forwardRef<
  HTMLDivElement,
  ThirdExperienceSectionProps
>((props, ref) => {
  // console.log("ThirdExperienceSection component rendered");

  const skills = ["Python", "PostgreSQL", "Jupyter"];
  return (
    <section
      className="THIRD-XP-PAGE flex flex-col justify-start md:snap-start h-auto sm:min-h-screen sm:pb-12
      border border-transparent pb-10 lg:pb-0 relative z-10"
      ref={ref}
    >
      {/* page container */}
      <div className="CONTAINER sm:w-[70%] md:w-[80%] sm:ml-32 mt-16 sm:mt-16 px-4 sm:px-0 z-10 flex-grow flex flex-col">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          BlackRock
        </h1>
        {/* content container */}
        {/* <div className="flex flex-col justify-center flex-grow"> */}
        <div className="flex flex-col lg:flex-row md:justify-center">
          {/* images container */}
          <div className="IMAGES-CONTAINER flex flex-col relative md:h-[42rem] lg:h-auto h-auto lg:w-[60%]">
            <div className="IMG-WRAPPER relative md:max-w-[22rem] lg:max-w-[28rem] mb-2 sm:mb-0">
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
            <div
              className="IMG-WRAPPER md:relative md:bottom-48 md:right-4 lg:absolute lg:-bottom-[5%] lg:right-0 w-full
              sm:w-[18rem] h-[20rem] md:h-[18rem] flex-shrink-0 overflow-hidden self-end"
            >
              <StaticImage
                className="h-full w-full max-w-[20rem] rounded-lg aspect-square"
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
          <div className="RIGHT-SIDE relative w-full lg:w-[50%] font-montserrat text-xl">
            <div className="SKILLS-CONTAINER md:absolute md:-top-40 w-full my-4 sm:my-0 sm:w-auto lg:top-auto lg:bottom-0 lg:left-4 flex sm:flex-col gap-2 flex-wrap">
              {skills.map((skill, ix) => {
                return <SkillCard key={skill} skill={skill} />;
              })}
            </div>
            <p className="w-full lg:absolute lg:top-[1%] right-0 lg:translate-x-[-2vw] mb-2 lg:mb-0 mt-4 lg:mt-0 text-xs sm:text-lg">
              As the technology lead of a global portfolio management team, I
              spearheaded a team effort to author a{" "}
              <span className="font-bold">Python library</span> for BlackRock
              Transition Management’s trading and liquidity strategies.{" "}
            </p>
            <p className="w-full lg:absolute left-0 top-[40%] lg:-translate-y-10 text-xs sm:text-lg">
              This initiative <span className="font-bold">automated</span> and{" "}
              <span className="font-bold">optimized</span> the day-to-day
              operations to manage risk over the buying and selling of
              multi-billion dollars worth of equity, fixed income, FX, futures,
              and derivative assets.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
});

export default memo(ThirdExperienceSection);
