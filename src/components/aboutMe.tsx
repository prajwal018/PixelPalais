import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="border-4 sm:rounded-none rounded-full sm:rounded-l-full text-center sm:text-left bg-primary-200 col-span-1 sm:col-span-2 p-4">
        <h3 className="font-bold text-2xl ">Need a Creative Website?</h3>
        <h3 className="font-semibold text-xl mb-4">I Can Help You!</h3>
        <p className=" text-l mb-8">
          Hello! I'm Prajwal Kuchewar, a passionate software developer with
          expertise in multiple programming languages and frameworks. I thrive
          on turning ideas into reality through innovative and efficient
          solutions. With a strong foundation in computer science, I have honed
          my skills in creating impactful projects and collaborating with
          cross-functional teams.
        </p>
        <p className=" text-right mb-2">You Can Follow Me Here:</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() =>
              window.open(
                "https://leetcode.com/u/prajwal018/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <SiLeetcode className="size-12 p-2" />
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
            <BsInstagram className="size-12 p-2" />
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
            <BsLinkedin className="size-12 p-2" />
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
            <BsGithub className="size-12 p-2" />
          </button>
        </div>
      </div>

      <img
        alt="A beautiful sunset over the mountains"
        src={`./aboutme-pic.png`}
        className="object-cover pos-left mx-auto sm:my-auto rounded-full sm:rounded-none sm:rounded-r-full size-96 shadow-lg shadow-gray-500/40"
      />
    </>
  );
};

export default AboutMe;
