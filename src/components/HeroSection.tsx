// HeroSection.tsx
import React, { forwardRef, memo } from "react";
// import erickPhoto from "../images/profile-photo-erick.png";
// import githubLogo from "../images/logos/github.png";
// import linkedinLogo from "../images/logos/linkedin.png";
// import tiktokLogo from "../images/logos/tiktok.png";
// import instagramLogo from "../images/logos/instagram.png";

import { StaticImage } from "gatsby-plugin-image";

interface HeroSectionProps {}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (props, ref) => {
    console.log("HeroSection component rendered");

    const logoClasses =
      "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer";

    // erick photo dimensions
    // const photo_sizes = {
    //   default: 200,
    //   md: 325,
    //   lg: 400,
    //   xl: 500,
    // };

    // const ratios = {
    //   github: 20 / 32,
    //   linkedin: 32 / 32,
    //   tiktok: 14 / 32,
    //   instagram: 20 / 32,
    // };

    // const getDimension = (size: number, logoName: keyof typeof ratios) => {
    //   return `${ratios[logoName] * size}px`;
    // };

    return (
      <section
        className="HERO-CONTAINER relative snap-start flex flex-col md:flex-row justify-around items-center py-20 md:py-40 pb-24 md:pb-36 px-6 aspect-[16/9] sm:h-screen w-full"
        ref={ref}
      >
        {/* ------------------ Hero Text start ------------------ */}
        <div className="HERO-TEXT flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
          {/* <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.03em]"> */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold tracking-[-0.01em]">
            Hi, I'm Erick
            <br />
            <span className="text-orange-500 tracking-normal">
              Software Engineer
            </span>
          </h1>
          <p className="text-light font-montserrat text-md md:text-lg max-w-[400px]">
            I love to build things. I love to solve problems.
          </p>
          <a
            href="#wasy"
            className="flex w-max min-w-32 justify-center items-center font-semibold tracking-wide font-outfit border-none py-2 px-6 rounded-md text-white bg-primary text-md md:text-xl"
          >
            My Work
          </a>
        </div>
        {/* ------------------ Hero Text end ------------------ */}

        {/* ------------------ Photo Section start ------------------ */}
        <div
          className={`PHOTO-CONTAINER border-red-800 flex-shrink-0 relative translate-x-8 aspect-square
          w-[200px] h-[200px]
          md:w-[325px] md:h-[325px]
          lg:w-[400px] lg:h-[400px]
          xl:w-[500px] xl:h-[500px]`}
        >
          <div className="MASK overflow-hidden w-full h-full flex justify-center items-center rounded-full">
            {/* <img
            className="object-cover rounded-full w-[275px] h-[275px] md:w-[400px] md:h-[400px] relative bottom-4"
            src={erickPhoto}
            alt="profile photo"
          /> */}
            <StaticImage
              // className="object-cover rounded-full w-[275px] h-[275px] md:w-[400px] md:h-[400px] relative bottom-4"
              className="object-cover rounded-full w-[275px] h-[275px] md:w-full md:h-full relative bottom-4"
              src="../images/profile-photo-erick.png"
              alt="profile photo"
              placeholder="blurred"
              width={800}
            />
          </div>
          {/* github logo */}
          <a
            href="https://www.github.com/erick505alvarez"
            target="_blank"
            className={`GITHUB z-10 ${logoClasses} w-16 h-16 md:w-24 md:h-24 -left-[3rem] md:-left-[4rem] top-[54%] lg:top-[64%] xl:top-[60%] xl:-left-[4rem] rounded-full animate-float-github`}
          >
            <StaticImage
              key="github"
              // className={`z-10 ${logoClasses} w-16 h-16 md:w-20 md:h-20 -left-10 md:-left-14 top-[60%] rounded-full animate-float-github`}
              // src={githubLogo}
              src="../images/logos/github.png"
              alt="github logo"
              placeholder="blurred"
            />
          </a>
          {/* linkedin logo */}
          <a
            href="https://www.linkedin.com/in/erick505alvarez/"
            className={`LINKED-IN z-8 ${logoClasses} w-20 h-20 md:w-32 md:h-32 -left-5 md:-left-8 top-[102%] md:top-[95%] lg:-left-4 lg:top-[96%] xl:top-[90%] rounded-full animate-float-linkedin`}
            target="_blank"
          >
            <StaticImage
              key="linkedin"
              // className={`z-8 ${logoClasses} w-20 h-20 md:w-32 md:h-32 -left-6 md:-left-8 top-[100%] md:top-[95%] rounded-full animate-float-linkedin`}
              // src={linkedinLogo}
              src="../images/logos/linkedin.png"
              alt="linkedin logo"
              placeholder="blurred"
            />
          </a>
          {/* tiktok logo */}
          {/* <a
          href="https://www.tiktok.com/@prodbyseekay"
          target="_blank"
          className={`TIK-TOK z-6 ${logoClasses} w-12 h-12 md:w-14 md:h-14 left-16 md:left-20 top-[118%] md:top-[110%] rounded-full animate-float-tiktok`}
        >
          <StaticImage
            key="tiktok"
            // className={`z-6 ${logoClasses} w-14 h-14 md:w-14 md:h-14 left-16 md:left-20 top-[118%] md:top-[110%] rounded-full animate-float-tiktok`}
            // src={tiktokLogo}
            src="../images/logos/tiktok.png"
            alt="tiktok logo"
            placeholder="blurred"
          />
        </a> */}
          {/* instagram logo */}
          <a
            href="https://www.instagram.com/prodbyseekay/"
            target="_blank"
            className={`INSTAGRAM z-4 ${logoClasses} w-16 h-16 md:w-20 md:h-20 left-[4.2rem] top-[124%] md:left-[6rem] md:top-[112%] lg:left-[7rem] lg:top-[109%] xl:top-[105%] rounded-full animate-float-instagram`}
          >
            <StaticImage
              key="instagram"
              // className={`z-4 ${logoClasses} w-16 h-16 md:w-20 md:h-20 left-40 md:left-44 top-[115%] md:top-[118%] rounded-full animate-float-instagram`}
              // src={instagramLogo}
              src="../images/logos/instagram.png"
              alt="instagram logo"
              placeholder="blurred"
            />
          </a>
        </div>
        {/* ------------------ Photo Section end ------------------ */}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection"; // Helpful for debugging

export default memo(HeroSection);
