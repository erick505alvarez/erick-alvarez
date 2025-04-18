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
      <div className="CONTAINER w-[80%] h-auto ml-32 mt-8 relative">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4"
        >
          BlackRock
        </h1>
        <div className="flex h-full">
          {/* images container */}
          <div className="IMAGES-CONTAINER relative h-full w-[60%]">
            <div className="IMG-WRAPPER relative w-full h-full md:max-w-[400px]">
              <StaticImage
                // className="w-full h-full flex-shrink-0"
                className="object-contain rounded-lg h-full"
                imgStyle={{ maxHeight: "40vh" }}
                src="../../images/speaker.jpg"
                alt="BlackRock Panel Discussion"
                placeholder="blurred"
                // width={550}
                // height={700}
                aspectRatio={3 / 4} // Replace with the actual aspect ratio of your image
              />
            </div>
            <div className="IMG-WRAPPER absolute -bottom-[20%] right-0 w-[15rem] h-[17rem] overflow-hidden">
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
          <div className="RIGHT-SIDE relative w-[40%] font-montserrat">
            <p className="max-w-96 absolute top-[10%] left-[-15%]">
              As the technology lead of a global portfolio management team, I
              spearheaded a team effort to author a{" "}
              <span className="font-bold">Python library</span> for BlackRock
              Transition Management’s trading and liquidity strategies.{" "}
            </p>
            <p className="max-w-96 absolute top-1/2 -translate-y-10">
              This initiative <span className="font-bold">automated</span> and
              <span className="font-bold">optimized</span> the day-to-day
              operations to manage risk over the buying and selling of
              multi-billion dollars worth of equity, fixed income, FX, futures,
              and derivative assets.
            </p>
            <div className="SKILLS-CONTAINER absolute bottom-0 left-4 flex flex-col gap-2 flex-wrap">
              {skills.map((skill, ix) => {
                return <SkillCard key={skill} skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ThirdExperienceSection;
