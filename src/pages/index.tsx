// /src/pages/index.tsx

import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FirstExperienceSection from "../components/experiences/FirstExperienceSection";
import SecondExperienceSection from "../components/experiences/SecondExperienceSection";
import ThirdExperienceSection from "../components/experiences/ThirdExperienceSection";
import FourthExperienceSection from "../components/experiences/FourthExperienceSection";
import Contact from "../components/Contact";

import { DesignProvider } from "../contexts/DesignContext";
import { PAGES } from "../types";

const Home: React.FC<PageProps> = () => {
  return (
    <DesignProvider>
      <Layout>
        <HeroSection key={PAGES.HERO} />
        <FirstExperienceSection key={PAGES.WASY} />
        <SecondExperienceSection key={PAGES.MOLEQLAR} />
        <ThirdExperienceSection key={PAGES.BLACKROCK} />
        <FourthExperienceSection key={PAGES.HOBBIES} />
        <Contact key={PAGES.CONTACT} />
      </Layout>
    </DesignProvider>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Erick Alvarez</title>;
