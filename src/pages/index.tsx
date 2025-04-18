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

export const Head: HeadFC = () => (
  <>
    <title>Erick Alvarez</title>
    <meta
      name="description"
      content="Erick Alvarez's personal portfolio showcasing his work, experience, and hobbies."
    />
    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="Erick Alvarez" />
    <meta
      property="og:description"
      content="Explore Erick Alvarez's portfolio, featuring projects, experiences, and hobbies."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://erickalvarez.info/" />
    <meta
      property="og:image"
      content="https://erickalvarez.info/images/og-image.webp"
    />
    <meta property="og:image:alt" content="Erick Alvarez's Portfolio" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Erick Alvarez - Portfolio" />
    <meta
      name="twitter:description"
      content="Explore Erick Alvarez's portfolio, featuring projects, experiences, and hobbies."
    />
    <meta
      name="twitter:image"
      content="https://erickalvarez.info/images/og-image.webp"
    />
  </>
);
