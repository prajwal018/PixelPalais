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
          className="absolute object-cover h-56 rounded-lg -top-4 -left-24"
          src="https://i.pinimg.com/474x/d5/54/ec/d554ec5d702aa86f646b86c4915ce44b.jpg"
        />
        <img
          className="absolute object-cover rounded-lg top-8 left-12 size-44"
          src="https://i.pinimg.com/474x/c8/57/dc/c857dcd89633d3b36adfbfdcda8fac7e.jpg"
        />
        <img
          className="absolute object-cover h-40 rounded-lg -bottom-4 -right-4 w-80"
          src="https://i.pinimg.com/474x/ce/c0/1f/cec01f3f28de721307897ab53ee0482d.jpg"
        />
        <img
          className="absolute object-cover rounded-lg top-8 left-72 h-28 w-80"
          src="https://i.pinimg.com/736x/5f/49/3f/5f493f4652abbec160af3f5e3b46ea71.jpg"
        />
        <img //om
          className="absolute hidden object-cover w-56 rounded-lg bottom-6 right-72 h-36 dark:block"
          src="https://i.pinimg.com/474x/42/40/a5/4240a5e7104dfee6cd8342ba0a67d209.jpg"
        />
        <img //om
          className="absolute block object-cover w-56 rounded-lg bottom-6 right-72 h-36 dark:hidden"
          src="https://i.pinimg.com/474x/ad/49/d1/ad49d1fb57890e5de09bb8c257da7a92.jpg"
        />
        <img
          className="absolute object-cover pb-2 rounded-lg -top-12 right-60 size-24"
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
          className="absolute p-2 rounded-l-full right-12 -bottom-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-dark dark:text-light"
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
          className="absolute p-2 rounded-r-full -right-24 -bottom-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-primry-900"
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

        <div className="absolute p-2 text-xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-bold text-primry-700 right-16 top-1">
          Web Developer
        </div>
        <div className="absolute p-2 text-xl text-indigo-700 bg-indigo-300 rounded-sm text-bold -right-6 top-16">
          UI/UX Professional
        </div>
        <div className="absolute p-2 text-xl bg-rose-300 text-bold text-rose-700 -right-20 top-32 rounded-tl-md rounded-br-md">
          Software Engineer
        </div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="absolute p-2 ml-2 text-xl font-bold text-orange-700 bg-orange-300 rounded-lg bottom-22 right-80"
        >
          I'm Prajwal Kuchewar
        </div>
        <div className="absolute p-2 ml-2 text-xl rotate-90 rounded-lg bg-rose-300 text-bold text-rose-700 left-32 top-16">
          Certification & Education
        </div>
        <div className="absolute w-1/2 p-2 font-bold rounded-lg bg-gradient-to-r from-orange-200 to-cyan-200 text-wrap md:text-balance sm:truncate text-sky-700 -left-20 -bottom-2">
          Proactive student eager to contribute to the coding <br />
          community through hard work and dedication to quality.
        </div>
      </div>
      <div className="block md:hidden">
        <div
          onClick={() => setOpen((open) => !open)}
          className="flex justify-between px-2 text-xl font-bold rounded-lg text-dark dark:text-light"
        >
          <div className="my-auto">
            I'm Prajwal Kuchewar
            <div className="mb-2 font-thin rounded-lg text-l text-dark dark:text-light">
              Software Engineer
            </div>
          </div>
          <img
            className="rounded-full size-16"
            src="https://i.pinimg.com/474x/91/25/1f/91251fd79af01dc56901bc1c34e4f587.jpg"
          />
        </div>

        <div className="p-2 font-thin rounded-lg text-wrap md:text-balance sm:truncate text-dark dark:text-light">
          Proactive student eager to contribute to the coding community through
          hard work and dedication to quality.
        </div>
        <div className="flex justify-end text-white">
          <button
            className="px-3 py-1 rounded-full shadow-lg bg-light shadow-gray-900/40 hover:bg-light dark:bg-dark text-dark dark:text-light"
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
          className="w-full mt-2 rounded-lg"
        />
      </div>
    </>
  );
};

export default HeroBoard;
