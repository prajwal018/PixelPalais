import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const DigitalMe: React.FC = () => {
  return (
    <>
      <div className="p-4 grid gap-4 sm:grid-cols-2">
        <div className="p-4 w-full my-auto ">
          <LiteYoutubeEmbed id="Y2jyjfcp1as" />
        </div>
        <div className="border-4 rounded-full bg-primary-200 text-right p-4">
          <h3 className="font-bold text-2xl ">Need a Creative Website?</h3>
          <h3 className="font-semibold text-xl mb-4">I Can Help You!</h3>
          <p className=" text-l mb-8">
            Proactive student eager to contribute to the coding community
            through hard work and dedication to quality.
          </p>
          <div className="text-left mb-2">You Can Follow Me Here:</div>
          <div className="flex gap-2 justify-start">
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
