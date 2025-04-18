import React, { forwardRef, memo } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface FourthExperienceSectionProps {}

const FourthExperienceSection = forwardRef<
  HTMLDivElement,
  FourthExperienceSectionProps
>((props, ref) => {
  console.log("FourthExperienceSection component rendered");

  return (
    <section
      className="SECOND-XP-PAGE snap-start min-h-screen sm:pb-12 border border-transparent relative"
      ref={ref}
    >
      <div className="CONTAINER relative sm:w-[70%] md:w-[80%] sm:ml-32 mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4 text-blue-500"
        >
          Hobbies & Interests
        </h1>
        <div className="grid grid-cols-1 grid-rows-[30rem_20rem_30rem] md:grid-cols-[45%_55%] md:grid-rows-[20rem_20rem] lg:grid-rows-[15rem_25rem] gap-2">
          {/* Music production */}
          <div className="relative w-full h-full overflow-hidden rounded-lg md:row-span-2">
            {/* Image component */}
            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 w-full h-full">
              <StaticImage
                className="w-full h-full object-cover"
                src="../../images/music-production.jpg"
                alt="Music production setup"
                placeholder="blurred"
              />
            </div>
            {/* Overlay/Content */}
            <div className="group hover:flex absolute inset-0 top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-10 hover:bg-opacity-50 items-center justify-center">
              <h3 className="text-white text-2xl font-bold invisible group-hover:visible">
                Music Production
              </h3>
            </div>
          </div>

          {/* Photography */}
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {/* Image component */}
            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 w-full h-full">
              <StaticImage
                className="w-full h-full object-cover"
                src="../../images/photography.jpg"
                alt="Photography samples"
                placeholder="blurred"
              />
            </div>
            {/* Overlay/Content */}
            <div className="group hover:flex absolute inset-0 top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-10 hover:bg-opacity-50 items-center justify-center">
              <h3 className="text-white text-2xl font-bold invisible group-hover:visible">
                Photography
              </h3>
            </div>
          </div>

          {/* Desca */}
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {/* Image component */}
            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 w-full h-full">
              <StaticImage
                className="w-full h-full object-cover"
                src="../../images/desca.jpg"
                alt="Desca image"
                placeholder="blurred"
              />
            </div>
            {/* Overlay/Content */}
            <div className="group hover:flex absolute inset-0 top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-10 hover:bg-opacity-50 items-center justify-center">
              <h3 className="text-white text-2xl font-bold invisible group-hover:visible">
                Private Label
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FourthExperienceSection.displayName = "FourthExperienceSection";

export default memo(FourthExperienceSection);
