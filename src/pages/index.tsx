import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FirstExperienceSection from "../components/experiences/FirstExperienceSection";
import SecondExperienceSection from "../components/experiences/SecondExperienceSection";
// import ProjectsContainer from "../components/projects/ProjectsContainer";
// import Footer from "../components/Footer";

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <FirstExperienceSection />
      <SecondExperienceSection />
      {/* <ProjectsContainer /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Erick Alvarez</title>;
