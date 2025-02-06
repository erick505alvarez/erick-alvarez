import React from "react";
import erickPhoto from "../images/erick-photo.png";
import githubLogo from "../images/logos/github.png";
import linkedinLogo from "../images/logos/linkedin.png";
import tiktokLogo from "../images/logos/tiktok.png";
import instagramLogo from "../images/logos/instagram.png";

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
    <section className="flex flex-col md:flex-row justify-around items-center py-4 md:py-20 pb-24 md:pb-36 px-6 border-2">
      {/* ------------------ Hero Text start ------------------ */}
      <div className="HERO-CONTENT flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold tracking-[0.03em]">
          Hi, I'm Erick
          <br />
          <span className="text-primary text-4xl">Software Engineer</span>
        </h1>
        <p className="text-light font-montserrat text-xl max-w-[300px]">
          I love to build things. I love to solve problems.
        </p>
        <button className="inline-block font-bold tracking-wide text-lg font-outfit border-none w-min py-2 px-6 rounded-lg text-white bg-primary">
          Projects
        </button>
      </div>
      {/* ------------------ Hero Text end ------------------ */}

      {/* ------------------ Photo Section start ------------------ */}
      <div className="PHOTO-CONTAINER border-red-800 relative translate-x-8 w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
        <div className="overflow-hidden w-full h-full flex justify-center items-center rounded-full">
          <img
            className="object-cover rounded-full w-[275px] h-[275px] md:w-[400px] md:h-[400px] relative bottom-4"
            src={erickPhoto}
            alt="erick-photo"
          />
        </div>
        <img
          className={`z-10 ${logoClasses} w-16 h-16 md:w-20 md:h-20 -left-10 md:-left-14 top-[60%] animate-float-github`}
          src={githubLogo}
          alt="github-logo"
        />
        <img
          className={`z-8 ${logoClasses} w-20 h-20 md:w-32 md:h-32 -left-6 md:-left-8 top-[100%] md:top-[95%] animate-float-linkedin`}
          src={linkedinLogo}
          alt="linkedin-logo"
        />
        <img
          className={`z-6 ${logoClasses} w-14 h-14 md:w-14 md:h-14 left-16 md:left-20 top-[118%] md:top-[110%] animate-float-tiktok`}
          src={tiktokLogo}
          alt="tiktok-logo"
        />
        <img
          className={`z-4 ${logoClasses} w-16 h-16 md:w-20 md:h-20 left-40 md:left-44 top-[115%] md:top-[118%] animate-float-instagram`}
          src={instagramLogo}
          alt="instagram-logo"
        />
      </div>
      {/* ------------------ Photo Section end ------------------ */}
    </section>
  );
};

export default HeroSection;
