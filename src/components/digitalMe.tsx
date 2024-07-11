import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const DigitalMe: React.FC = () => {
  return (
    <>
      <div className="p-4 grid gap-4 sm:grid-cols-2">
        <div className="p-4 w-full my-auto ">
          <LiteYoutubeEmbed id="iCvmsMzlF7o" />
        </div>
        <div className="border-4 sm:rounded-full bg-primary-200 col-span-1 p-4">
          <h3 className="font-bold text-2xl ">Favourite TED Talk</h3>
          <h3 className="font-semibold text-xl mb-4">
            The power of vulnerability - by Brené Brown
          </h3>
          <p className=" text-l mb-8">
            Her insightful exploration of human connection through the lens of
            vulnerability deeply resonates with me. Brown’s talk emphasizes the
            importance of embracing our imperfections and fostering genuine
            relationships, which inspires me both personally and professionally
            to lead with empathy and authenticity.
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
      </div>
    </>
  );
};

export default DigitalMe;
