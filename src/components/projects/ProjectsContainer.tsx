import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

function ProjectsContainer() {
  const projects: Project[] = [
    {
      heading: "wasy.ai",
      subheading: "Full Stack Engineer",
      img_url: "wasy",
    },
    {
      heading: "moleQLar",
      subheading: "Full Stack Engineer",
      img_url: "moleqlar",
    },
    {
      heading: "BlackRock",
      subheading: "Python Library - Portfolio Management",
      img_url: "blackrock",
    },
    {
      heading: "DESCA",
      subheading: "Launched Private Label Business",
      img_url: "blackrock",
    },
    {
      heading: "Music Production",
      subheading: "Produced by seekay",
      img_url: "rolled-down",
    },
    {
      heading: "Photography",
      subheading: "Produced by seekay",
      img_url: "Produced by seekay",
    },
  ];

  return (
    // <section className="flex-grow px-6 py-6">
    <section className="px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects &&
          projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </section>
  );
}

export default ProjectsContainer;
