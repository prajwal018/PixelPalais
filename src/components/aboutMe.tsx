import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="col-span-1 p-4 mx-4 text-center rounded-full sm:text-left sm:col-span-2">
        <h3 className="text-2xl font-bold ">Need a Creative Website?</h3>
        <h3 className="mb-4 text-xl font-semibold">I Can Help You!</h3>
        <p className="mb-8 text-l dark:text-lightTertiary text-darkTertiary">
          Hello! I'm Prajwal Kuchewar, a passionate software developer with
          expertise in multiple programming languages and frameworks. I thrive
          on turning ideas into reality through innovative and efficient
          solutions. With a strong foundation in computer science, I have honed
          my skills in creating impactful projects and collaborating with
          cross-functional teams.
        </p>
        <p className="mb-2 text-center sm:text-right">
          You Can Follow Me Here:
        </p>
        <div className="flex justify-center gap-2 sm:justify-end ">
          <button
            onClick={() =>
              window.open(
                "https://leetcode.com/u/prajwal018/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <SiLeetcode className="p-2 size-12" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/prxjwxl.018/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <BsInstagram className="p-2 size-12" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/prajwal018",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <BsLinkedin className="p-2 size-12" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://github.com/prajwal018",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <BsGithub className="p-2 size-12" />
          </button>
        </div>
      </div>

      <img
        alt="A beautiful sunset over the mountains"
        src={`./aboutme-pic.png`}
        className="object-cover p-2 mx-auto border-4 rounded-full shadow-lg sm:my-auto size-80 shadow-gray-500/40"
      />
    </>
  );
};

export default AboutMe;
