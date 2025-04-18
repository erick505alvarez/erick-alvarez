import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FirstExperienceSection from "../components/experiences/FirstExperienceSection";
import SecondExperienceSection from "../components/experiences/SecondExperienceSection";
import { DesignProvider } from "../contexts/DesignContext";
import { PAGES } from "../types";
import ThirdExperienceSection from "../components/experiences/ThirdExperienceSection";
import Contact from "../components/Contact";
// import ProjectsContainer from "../components/projects/ProjectsContainer";
// import Footer from "../components/Footer";

const Home: React.FC<PageProps> = () => {
  return (
    <DesignProvider>
      <Layout>
        <HeroSection key={PAGES.HERO} />
        <FirstExperienceSection key={PAGES.WASY} />
        <SecondExperienceSection key={PAGES.MOLEQLAR} />
        <ThirdExperienceSection key={PAGES.BLACKROCK} />
        <Contact key={PAGES.CONTACT} />
        {/* <ProjectsContainer /> */}
        {/* <Footer /> */}
      </Layout>
    </DesignProvider>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Erick Alvarez</title>;
