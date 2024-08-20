import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap justify-between p-3 bg-transparent items-right text-darkPrimary dark:text-lightPrimary">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
          PRAJWAL.
        </span>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-darkPrimary dark:text-lightPrimary hover:opacity-60 "
          onClick={toggleMenu}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-base text-md lg:flex-grow lg:justify-end lg:text-right">
          <Link
            to="/"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-darkPrimary dark:text-lightPrimary hover:opacity-60"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-darkPrimary dark:text-lightPrimary hover:opacity-60"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-darkPrimary dark:text-lightPrimary hover:opacity-60"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-darkPrimary dark:text-lightPrimary hover:opacity-60"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-darkPrimary dark:text-lightPrimary hover:opacity-60 "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
