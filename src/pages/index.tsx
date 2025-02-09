import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ProjectsContainer from "../components/projects/ProjectsContainer";
import Footer from "../components/Footer";

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* <main className="MAIN-CONTENT h-[calc(100vh_-_60px)] flex flex-col"> */}
      <main className="MAIN-CONTENT flex flex-col">
        <HeroSection />
        <ProjectsContainer />
        <Footer />
      </main>
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Erick Alvarez</title>;
