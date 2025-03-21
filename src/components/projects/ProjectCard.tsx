import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Icon from "../Icon";

export interface ProjectCardProps {
  project: Project;
}

export interface Project {
  heading: string;
  subheading: string;
  img: React.ReactNode;
  videoUrl?: string;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [playing, setPlaying] = useState(false); // To control video playback
  const playerRef = useRef(null); // Ref for the video player

  const handleCardClick = () => {
    if (project.videoUrl) {
      setShowVideoOverlay(true);
      setPlaying(true); // Start playing when the overlay opens
    }
  };

  const handleCloseOverlay = () => {
    setShowVideoOverlay(false);
    setPlaying(false); // Stop playing when the overlay closes
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className="w-80 h-80 rounded-xl mx-auto overflow-hidden relative"
      >
        <div
          className={`bg-white w-full h-[80%] flex justify-center items-center relative
            ${project.heading === "moleQLar" ? "bg-[#FDFDFD] px-4" : ""}
            ${project.videoUrl ? "hover:cursor-pointer" : ""}`}
        >
          {project.img}
          {project.videoUrl && (
            <Icon
              cn="absolute left-[55%] translate-x-[-50%] opacity-80 hover:cursor-pointer"
              fill="white"
              w="90"
              h="90"
              icon="play"
            />
          )}
        </div>
        <div className="px-4 flex flex-col justify-center w-full h-[20%] bg-primary text-white relative">
          <h1 className="">{project.heading}</h1>
          <h2 className="">{project.subheading}</h2>
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
              url={`${project.videoUrl}`}
              playing={playing} // Control playback with state
              width="80vw" // Adjust width as needed
              height="80vh" // Adjust height as needed
              controls={true}
              config={{ youtube: { playerVars: { autoplay: 1 } } }} // Autoplay on overlay open
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
