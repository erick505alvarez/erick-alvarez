import React from "react";

export interface ProjectCardProps {
  project: Project;
}

export interface Project {
  heading: string;
  subheading: string;
  img_url: string;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-80 h-80 rounded-xl mx-auto overflow-hidden relative">
      <div className="bg-black w-100 h-[80%]"></div>
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
