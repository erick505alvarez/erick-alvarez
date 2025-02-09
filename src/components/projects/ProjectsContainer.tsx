import React from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { StaticImage } from "gatsby-plugin-image";

function ProjectsContainer() {
  const projects: Project[] = [
    {
      heading: "wasy.ai",
      subheading: "Full Stack Engineer",
      img: (
        <StaticImage
          src="../../images/wasy.png"
          alt="wasy image"
          className="w-[100%] h-[100%] scale-[1.1]"
          imgClassName="scale-50"
        />
      ),
    },
    {
      heading: "moleQLar",
      subheading: "Full Stack Engineer",
      img: (
        <StaticImage
          src="../../images/moleqlar.jpg"
          alt="moleqlar image"
          // className="border-2 border-red-800"
        />
      ),
    },
    {
      heading: "BlackRock",
      subheading: "Python Library - Portfolio Management",
      img: (
        <StaticImage src="../../images/blackrock.jpg" alt="blackrock image" />
      ),
    },
    {
      heading: "DESCA",
      subheading: "Launched Private Label Business",
      img: <StaticImage src="../../images/desca.jpg" alt="desca image" />,
    },
    {
      heading: "Music Production",
      subheading: "Produced by seekay",
      img: (
        <StaticImage
          src="../../images/music-production.jpg"
          alt="music production image"
        />
      ),
    },
    {
      heading: "Photography",
      subheading: "Produced by seekay",
      img: (
        <StaticImage
          src="../../images/photography.jpg"
          alt="photography image"
        />
      ),
    },
  ];

  return (
    <section className="px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </section>
  );
}

export default ProjectsContainer;
