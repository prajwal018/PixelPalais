import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const DigitalMe: React.FC = () => {
  return (
    <>
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div className="w-full p-4 my-auto ">
          <LiteYoutubeEmbed id="iCvmsMzlF7o" />
        </div>
        <div className="col-span-1 p-4 sm:rounded-full">
          <h3 className="text-2xl font-bold text-right">Favourite TED Talk</h3>
          <h3 className="mb-4 font-semibold text-right sm:text-xl">
            The power of vulnerability - by Brené Brown
          </h3>
          <p className="mb-8 text-right text-l dark:text-lightTertiary text-darkTertiary ">
            Her insightful exploration of human connection through the lens of
            vulnerability deeply resonates with me. Brown’s talk emphasizes the
            importance of embracing our imperfections and fostering genuine
            relationships, which inspires me both personally and professionally
            to lead with empathy and authenticity.
          </p>
          <p className="mb-2 ml-2 text-left">You Can Follow Me Here:</p>
          <div className="flex gap-2">
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
      </div>
    </>
  );
};

export default DigitalMe;
