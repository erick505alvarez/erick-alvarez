import React, { forwardRef, memo, useCallback, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Icon from "../Icon";
import ReactPlayer from "react-player";

interface FourthExperienceSectionProps {}

const FourthExperienceSection = forwardRef<
  HTMLDivElement,
  FourthExperienceSectionProps
>((props, ref) => {
  console.log("FourthExperienceSection component rendered");

  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [playing, setPlaying] = useState(false); // To control video playback
  const playerRef = useRef(null); // Ref for the video player

  const videoUrl = `https://www.youtube.com/watch?v=2Mny_sLNjs0`;

  const handleClick = useCallback(() => {
    if (videoUrl) {
      setShowVideoOverlay(true);
      setPlaying(true); // Start playing when the overlay opens
    }
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setShowVideoOverlay(false);
    setPlaying(false); // Stop playing when the overlay closes
  }, []);

  return (
    <section
      className="FOURTH-XP-PAGE md:snap-start min-h-screen sm:pb-12 border border-transparent relative"
      ref={ref}
    >
      <div className="CONTAINER relative sm:w-[70%] md:w-[80%] sm:ml-32 mt-16 sm:mt-16 md:ml-32 px-4 sm:px-0 z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]
            mb-4 text-blue-500"
        >
          Hobbies & Interests
        </h1>
        <div className="grid grid-cols-1 grid-rows-[30rem_20rem_30rem] md:grid-cols-[45%_55%] md:grid-rows-[20rem_20rem] lg:grid-rows-[15rem_25rem] gap-2 font-montserrat">
          {/* Music production */}
          <div
            onClick={handleClick}
            className="relative w-full h-full overflow-hidden rounded-lg md:row-span-2"
          >
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
            <div className="group hover:cursor-pointer flex absolute inset-0 top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 items-center justify-center">
              {/* <h3 className="text-white text-2xl font-bold invisible group-hover:visible">
                Music Production
              </h3> */}
              <Icon
                cn="absolute left-[55%] translate-x-[-50%] opacity-80 hover:cursor-pointer"
                fill="white"
                w="90"
                h="90"
                icon="play"
              />
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
      {/* Full-screen overlay */}
      {showVideoOverlay && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex justify-center items-center"
          onClick={handleCloseOverlay}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white z-10 bg-neutral-800 rounded-full p-2 opacity-80"
            onClick={handleCloseOverlay}
          >
            <Icon cn="" w="30" h="30" icon="close" />
          </button>{" "}
          {/* Added overlay click handler */}
          <div className="relative">
            {/* Container for video player */}
            <ReactPlayer
              ref={playerRef} // Ref to control the player
              url={`${videoUrl}`}
              playing={playing} // Control playback with state
              width="80vw" // Adjust width as needed
              height="80vh" // Adjust height as needed
              controls={true}
              config={{ youtube: { playerVars: { autoplay: 1 } } }} // Autoplay on overlay open
            />
          </div>
        </div>
      )}
    </section>
  );
});

FourthExperienceSection.displayName = "FourthExperienceSection";

export default memo(FourthExperienceSection);
