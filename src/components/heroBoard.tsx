import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
const HeroBoard: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center back hidden md:block">
      {/* ronaldo */}
      <img
        className="object-cover rounded-lg absolute -top-4 -left-24 h-56"
        src="https://i.pinimg.com/474x/d5/54/ec/d554ec5d702aa86f646b86c4915ce44b.jpg"
      />
      {/* cat */}
      <img
        className="object-cover rounded-lg absolute top-8 left-12 size-44"
        src="https://i.pinimg.com/474x/c8/57/dc/c857dcd89633d3b36adfbfdcda8fac7e.jpg"
      />
      {/* pikachu */}
      <img
        className="object-cover rounded-lg absolute -bottom-4 -right-4 h-40 w-80"
        src="https://i.pinimg.com/474x/ce/c0/1f/cec01f3f28de721307897ab53ee0482d.jpg"
      />
      {/* 2024 */}
      <img
        className="object-cover rounded-lg absolute top-8 left-72 h-28 w-80"
        src="https://i.pinimg.com/736x/5f/49/3f/5f493f4652abbec160af3f5e3b46ea71.jpg"
      />

      <div className="bg-emerald-300 text-bold text-xl text-emerald-700 absolute right-16 top-1 rounded-lg p-2">
        <h4>Web Developer</h4>
      </div>
      <div className="bg-indigo-300  text-bold text-xl text-indigo-700 absolute -right-6 top-16 rounded-lg p-2">
        <h4>UI/UX Professional</h4>
      </div>
      <div className="bg-rose-300  text-bold text-xl text-rose-700 absolute -right-20 top-32 rounded-lg p-2">
        <h4>Software Engineer</h4>
      </div>
      <div
        onClick={() => setOpen((open) => !open)}
        className="bg-orange-300  font-bold text-xl absolute ml-2 bottom-22 right-80 text-orange-700 rounded-lg p-2"
      >
        <p>
          I'm Prajwal Kuchewar
          <br />
        </p>
      </div>
      <div className="bg-rose-300  text-bold text-xl text-rose-700 absolute left-32 ml-2 top-16 rounded-lg p-2 rotate-90">
        <h4>Certification & Education</h4>
      </div>
      <div className="bg-sky-300  w-1/2 text-sky-700 font-bold absolute -left-20 -bottom-2 rounded-lg p-2">
        <p className="text-wrap md:text-balance sm:truncate">
          Proactive student eager to contribute to the coding <br />
          community through hard work and dedication to quality.
        </p>
      </div>
      <img
        className="object-cover rounded-lg absolute bottom-6 right-72 w-56 h-36"
        src="https://i.pinimg.com/474x/42/40/a5/4240a5e7104dfee6cd8342ba0a67d209.jpg"
      />
      <Transition show={open}>
        <img
          src="https://i.pinimg.com/474x/86/15/62/861562e1dbfeaaa9816f7a2aa0932917.jpg"
          className="transition duration-300 ease-in data-[closed]:opacity-0 object-cover absolute right-44 top-16 rounded-full size-20"
        />
      </Transition>

      <button
        className="absolute -right-24 bottom-4 bg-emerald-300  rounded-full text-emerald-700 p-2 me-2"
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

      <button
        className="absolute right-14 -bottom-6 bg-fuchsia-300  rounded-full text-fuchsia-700 font-semibold p-2 btn-light"
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
    </div>
  );
};

export default HeroBoard;
