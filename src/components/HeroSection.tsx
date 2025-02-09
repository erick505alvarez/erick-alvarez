import React from "react";
// import erickPhoto from "../images/profile-photo-erick.png";
// import githubLogo from "../images/logos/github.png";
// import linkedinLogo from "../images/logos/linkedin.png";
// import tiktokLogo from "../images/logos/tiktok.png";
// import instagramLogo from "../images/logos/instagram.png";

import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  const logoClasses =
    "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer";

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
    <section className="flex flex-col md:flex-row justify-around items-center py-4 md:py-10 pb-24 md:pb-36 px-6">
      {/* ------------------ Hero Text start ------------------ */}
      <div className="HERO-CONTENT flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
        {/* <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.03em]"> */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.01em]">
          Hi, I'm Erick
          <br />
          <span className="text-primary tracking-normal">
            Software Engineer
          </span>
        </h1>
        <p className="text-light font-montserrat text-xl max-w-[300px]">
          I love to build things. I love to solve problems.
        </p>
        <a href="#projects">
          <button className="inline-block font-semibold tracking-wide text-lg font-outfit border-none w-min py-2 px-6 rounded-lg text-white bg-primary">
            Projects
          </button>
        </a>
      </div>
      {/* ------------------ Hero Text end ------------------ */}

      {/* ------------------ Photo Section start ------------------ */}
      <div className="PHOTO-CONTAINER border-red-800 relative translate-x-8 w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
        <div className="overflow-hidden w-full h-full flex justify-center items-center rounded-full">
          {/* <img
            className="object-cover rounded-full w-[275px] h-[275px] md:w-[400px] md:h-[400px] relative bottom-4"
            src={erickPhoto}
            alt="profile photo"
          /> */}
          <StaticImage
            className="object-cover rounded-full w-[275px] h-[275px] md:w-[400px] md:h-[400px] relative bottom-4"
            src="../images/profile-photo-erick.png"
            alt="profile photo"
            placeholder="blurred"
          />
        </div>
        <a href="https://www.github.com/erick505alvarez" target="_blank">
          <StaticImage
            key="github"
            className={`z-10 ${logoClasses} w-16 h-16 md:w-20 md:h-20 -left-10 md:-left-14 top-[60%] rounded-full animate-float-github`}
            // src={githubLogo}
            src="../images/logos/github.png"
            alt="github logo"
            placeholder="blurred"
          />
        </a>
        <a href="https://www.linkedin.com/in/erick505alvarez/" target="_blank">
          <StaticImage
            key="linkedin"
            className={`z-8 ${logoClasses} w-20 h-20 md:w-32 md:h-32 -left-6 md:-left-8 top-[100%] md:top-[95%] rounded-full animate-float-linkedin`}
            // src={linkedinLogo}
            src="../images/logos/linkedin.png"
            alt="linkedin logo"
            placeholder="blurred"
          />
        </a>
        <a href="https://www.tiktok.com/@prodbyseekay" target="_blank">
          <StaticImage
            key="tiktok"
            className={`z-6 ${logoClasses} w-14 h-14 md:w-14 md:h-14 left-16 md:left-20 top-[118%] md:top-[110%] rounded-full animate-float-tiktok`}
            // src={tiktokLogo}
            src="../images/logos/tiktok.png"
            alt="tiktok logo"
            placeholder="blurred"
          />
        </a>
        <a href="https://www.instagram.com/prodbyseekay/" target="_blank">
          <StaticImage
            key="instagram"
            className={`z-4 ${logoClasses} w-16 h-16 md:w-20 md:h-20 left-40 md:left-44 top-[115%] md:top-[118%] rounded-full animate-float-instagram`}
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
};

export default HeroSection;
