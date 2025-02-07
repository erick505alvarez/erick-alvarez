import React from "react";
import ProjectCard, { Project } from "./ProjectCard";
// image imports
// import wasyImg from "../../images/wasy.png"; // or .jpg, .webp etc.
// import moleqlarImg from "../../images/moleqlar.jpg";
// import blackrockImg from "../../images/blackrock.jpg";
// import descaImg from "../../images/desca.jpg";
// import rolledDownImg from "../../images/rolled-down.jpg";
// import photographyImg from "../../images/photography.jpg";

import { getImage, GatsbyImage, ImageDataLike } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

interface FileNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: ImageDataLike; // Use ImageDataLike
  } | null; // childImageSharp can be null
}

interface AllFileQuery {
  allFile: {
    edges: {
      node: FileNode;
    }[];
  };
}

function ProjectsContainer() {
  const data = useStaticQuery<AllFileQuery>(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/(wasy|moleqlar|blackrock|desca|rolled-down|photography)\\.(png|jpg|jpeg|webp)$/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 800, quality: 90, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  // Define projects order
  const projectOrder = [
    "wasy",
    "moleqlar",
    "blackrock",
    "desca",
    "rolled-down",
    "photography",
  ];

  const getHeadings = (name: string) => {
    switch (name) {
      case "wasy":
        return {
          heading: "Wasy.ai",
          subheading: "Full Stack Engineer",
        };
      case "moleqlar":
        return {
          heading: "moleQLar",
          subheading: "Full Stack Engineer",
        };
      case "blackrock":
        return {
          heading: "BlackRock",
          subheading: "Python Library - Portfolio Management",
        };
      case "desca":
        return {
          heading: "DESCA",
          subheading: "Launched Private Label Business",
        };
      case "rolled-down":
        return {
          heading: "Music Production",
          subheading: "Produced by seekay",
        };
      case "photography":
        return {
          heading: "Photography",
          subheading: "Produced by seekay",
        };
      default:
        return { heading: "", subheading: "" };
    }
  };

  const getSubheading = (name: string) => {
    switch (name) {
      case "wasy":
        return "Full Stack Engineer";
      case "moleqlar":
        return "Full Stack Engineer";
      case "blackrock":
        return "Python Library - Portfolio Management";
      case "desca":
        return "Launched Private Label Business";
      case "rolled-down":
        return "Produced by seekay";
      case "photography":
        return "Produced by seekay";
      default:
        return "";
    }
  };

  const projects: Project[] = projectOrder
    .map((projectName) => {
      const fileNode = data.allFile.edges.find(({ node }) =>
        node.relativePath.startsWith(`${projectName}.`)
      ); // Find the node

      if (!fileNode) {
        console.warn(`Image for ${projectName} not found.`); // Handle missing image (optional)
        return null; // or return a default project object
      }

      const name = fileNode.node.relativePath.split(".")[0];
      return {
        ...getHeadings(name),
        img: fileNode.node.childImageSharp
          ? getImage(fileNode.node.childImageSharp)
          : null,
      };
    })
    .filter((project) => project !== null) as Project[]; // Remove null entries

  // const projects: Project[] = [
  //   {
  //     heading: "wasy.ai",
  //     subheading: "Full Stack Engineer",
  //     // img: wasyImg,
  //     img: getImage(data.wasy)!,
  //   },
  //   {
  //     heading: "moleQLar",
  //     subheading: "Full Stack Engineer",
  //     // img: moleqlarImg,
  //     img: getImage(data.moleqlar)!,
  //   },
  //   {
  //     heading: "BlackRock",
  //     subheading: "Python Library - Portfolio Management",
  //     // img: blackrockImg,
  //     img: getImage(data.blackrock)!,
  //   },
  //   {
  //     heading: "DESCA",
  //     subheading: "Launched Private Label Business",
  //     // img: descaImg,
  //     img: getImage(data.desca)!,
  //   },
  //   {
  //     heading: "Music Production",
  //     subheading: "Produced by seekay",
  //     // img: rolledDownImg,
  //     img: getImage(data.rolledDown)!,
  //   },
  //   {
  //     heading: "Photography",
  //     subheading: "Produced by seekay",
  //     // img: photographyImg,
  //     img: getImage(data.photograph)!,
  //   },
  // ];

  return (
    // <section className="flex-grow px-6 py-6">
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
