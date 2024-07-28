import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import HelloPrompter from "./helloPrompter.tsx";
const HeroBoard: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <img
          className="object-cover rounded-lg absolute -top-4 -left-24 h-56"
          src="https://i.pinimg.com/474x/d5/54/ec/d554ec5d702aa86f646b86c4915ce44b.jpg"
        />
        <img
          className="object-cover rounded-lg absolute top-8 left-12 size-44"
          src="https://i.pinimg.com/474x/c8/57/dc/c857dcd89633d3b36adfbfdcda8fac7e.jpg"
        />
        <img
          className="object-cover rounded-lg absolute -bottom-4 -right-4 h-40 w-80"
          src="https://i.pinimg.com/474x/ce/c0/1f/cec01f3f28de721307897ab53ee0482d.jpg"
        />
        <img
          className="object-cover rounded-lg absolute top-8 left-72 h-28 w-80"
          src="https://i.pinimg.com/736x/5f/49/3f/5f493f4652abbec160af3f5e3b46ea71.jpg"
        />
        <img //om
          className="object-cover rounded-lg absolute bottom-6 right-72 w-56 h-36 hidden dark:block"
          src="https://i.pinimg.com/474x/42/40/a5/4240a5e7104dfee6cd8342ba0a67d209.jpg"
        />
        <img //om
          className="object-cover rounded-lg absolute bottom-6 right-72 w-56 h-36 dark:hidden block"
          src="https://i.pinimg.com/474x/ad/49/d1/ad49d1fb57890e5de09bb8c257da7a92.jpg"
        />
        <img
          className="object-cover rounded-lg absolute -top-12 right-60 pb-2 size-24"
          src={`./garfield.png`}
        />
        <Transition show={open}>
          <img
            src="https://i.pinimg.com/474x/86/15/62/861562e1dbfeaaa9816f7a2aa0932917.jpg"
            className="transition duration-300 ease-in data-[closed]:opacity-0 object-cover absolute right-44 top-16 rounded-full size-20"
          />
        </Transition>
        <HelloPrompter />
        <button
          className="absolute right-12 -bottom-6 bg-gradient-to-r from-blue-500 to-cyan-500  rounded-l-full text-dark dark:text-light p-2"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/prajwal018",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Hire Me
        </button>
        <button
          className="absolute -right-24 -bottom-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-full text-primry-900 p-2"
          onClick={() => {
            const resumeLink = document.createElement("a");
            resumeLink.href = "/prajwal_kuchewar.pdf";
            resumeLink.download = "prajwal_kuchewar.pdf";
            document.body.appendChild(resumeLink);
            resumeLink.click();
            document.body.removeChild(resumeLink);
          }}
        >
          Download My CV
        </button>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-bold text-xl text-primry-700 absolute right-16 top-1 rounded-lg p-2">
          Web Developer
        </div>
        <div className="bg-indigo-300  text-bold text-xl text-indigo-700 absolute -right-6 top-16 rounded-sm p-2">
          UI/UX Professional
        </div>
        <div className="bg-rose-300  text-bold text-xl text-rose-700 absolute -right-20 top-32 rounded-tl-md rounded-br-md p-2">
          Software Engineer
        </div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="bg-orange-300  font-bold text-xl absolute ml-2 bottom-22 right-80 text-orange-700 rounded-lg p-2"
        >
          I'm Prajwal Kuchewar
        </div>
        <div className="bg-rose-300  text-bold text-xl text-rose-700 absolute left-32 ml-2 top-16 rounded-lg p-2 rotate-90">
          Certification & Education
        </div>
        <div className="bg-gradient-to-r from-orange-200 to-cyan-200 text-wrap md:text-balance sm:truncate w-1/2 text-sky-700 font-bold absolute -left-20 -bottom-2 rounded-lg p-2">
          Proactive student eager to contribute to the coding <br />
          community through hard work and dedication to quality.
        </div>
      </div>
      <div className="block md:hidden">
        <div
          onClick={() => setOpen((open) => !open)}
          className="font-bold text-xl text-dark dark:text-light rounded-lg px-2 flex justify-between"
        >
          <div className="my-auto">
            I'm Prajwal Kuchewar
            <div className="  font-thin text-l text-dark dark:text-light rounded-lg mb-2">
              Software Engineer
            </div>
          </div>
          <img
            className="size-16 rounded-full"
            src="https://i.pinimg.com/474x/91/25/1f/91251fd79af01dc56901bc1c34e4f587.jpg"
          />
        </div>

        <div className="text-wrap md:text-balance sm:truncate text-dark dark:text-light font-thin rounded-lg p-2">
          Proactive student eager to contribute to the coding community through
          hard work and dedication to quality.
        </div>
        <div className="flex justify-end text-white">
          <button
            className="bg-light shadow-lg shadow-gray-900/40 hover:bg-light dark:bg-dark text-dark dark:text-light py-1 px-3 rounded-full"
            onClick={() => {
              const resumeLink = document.createElement("a");
              resumeLink.href = "/prajwal_kuchewar.pdf";
              resumeLink.download = "prajwal_kuchewar.pdf";
              document.body.appendChild(resumeLink);
              resumeLink.click();
              document.body.removeChild(resumeLink);
            }}
          >
            Download My CV
          </button>
        </div>
        <img
          src="https://i.pinimg.com/474x/f3/bd/45/f3bd45f6d915b011bc29f6661a73bac9.jpg"
          className="w-full rounded-lg mt-2"
        />
      </div>
    </>
  );
};

export default HeroBoard;
