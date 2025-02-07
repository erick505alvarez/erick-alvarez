import React, { useState } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface ProjectCardProps {
  project: Project;
}

export interface Project {
  heading: string;
  subheading: string;
  img: IGatsbyImageData | null | undefined;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // console.log("project.heading:", project.heading);
  console.log("project.img:", project.img);

  return (
    <div className="w-80 h-80 rounded-xl mx-auto overflow-hidden relative">
      <div className="bg-white w-100 h-[80%]">
        {/* <img
          // src={project.img}
          image={project.img!}
          alt={`${project.heading} project`}
          className={`w-full h-full object-cover ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        /> */}
        <GatsbyImage image={project.img!} alt={project.heading} />
        {/* Add alt text! */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            {/* <span className="text-gray-400">Image not available</span> */}
          </div>
        )}
      </div>
      <div className="px-4 flex flex-col justify-center w-full h-[20%] bg-primary text-white relative">
        <div className="-translate-y-1">
          <h1 className="">{project.heading}</h1>
          <h2 className="">{project.subheading}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
