import React from "react";
import erickPhoto from "../images/erick-photo.png";
import githubLogo from "../images/logos/github.png";
import linkedinLogo from "../images/logos/linkedin.png";
import tiktokLogo from "../images/logos/tiktok.png";
import instagramLogo from "../images/logos/instagram.png";

const HeroSection = () => {
  const logoClasses =
    "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer";
  return (
    <section className="flex justify-around items-center py-20 pb-40 px-6">
      {/* ------------------ Hero Text start ------------------ */}
      <div className="HERO-CONTENT flex flex-col gap-10">
        <h1 className="text-5xl font-bold tracking-[0.03em]">
          Hi, I'm Erick
          <br />
          <span className="text-primary">Software Engineer</span>
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
      <div className="PHOTO-CONTAINER border-red-800 relative">
        <div className="overflow-hidden w-[350px] h-[350px] flex justify-center items-center rounded-full">
          <img
            className="object-cover rounded-full w-[400px] h-[400px] relative bottom-4"
            src={erickPhoto}
            alt="erick-photo"
          />
        </div>
        <img
          className={`z-10 ${logoClasses} w-20 h-20 -left-14 top-[60%]`}
          src={githubLogo}
          alt="github-logo"
        />
        <img
          className={`z-8 ${logoClasses} w-32 h-32 -left-8 top-[95%]`}
          src={linkedinLogo}
          alt="linkedin-logo"
        />
        <img
          className={`z-6 ${logoClasses} w-14 h-14 left-20 top-[110%]`}
          src={tiktokLogo}
          alt="tiktok-logo"
        />
        <img
          className={`z-4 ${logoClasses} w-20 h-20 left-44 top-[118%]`}
          src={instagramLogo}
          alt="instagram-logo"
        />
      </div>
      {/* ------------------ Photo Section end ------------------ */}
    </section>
  );
};

export default HeroSection;
