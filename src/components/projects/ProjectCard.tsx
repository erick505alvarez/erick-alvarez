import React, { useState } from "react";

export interface ProjectCardProps {
  project: Project;
}

export interface Project {
  heading: string;
  subheading: string;
  img: React.ReactNode;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-80 h-80 rounded-xl mx-auto overflow-hidden relative">
      <div
        className={` bg-white w-full h-[80%] flex justify-center items-center ${
          project.heading === "moleQLar" ? "bg-[#FCFCFC] px-4" : ""
        }`}
      >
        {project.img}
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
