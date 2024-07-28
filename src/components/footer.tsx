import { BsEnvelopeFill, BsLink, BsTelephoneFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-lightSecondary dark:bg-darkSecondary rounded-lg mx-4 mt-4 p-4">
        <div className="text-3xl font-bold text-center">Let's Talk!</div>
        <div className="m-4 grid gap-12 sm:grid-cols-3 text-center item-center">
          <div className="grid grid-cols-1 text-center">
            <div className="flex justify-center">
              <BsTelephoneFill />
            </div>
            <p className="font-semibold">Phone Me:</p>
            <p className="font-thin">+91 876 681 3856</p>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <BsEnvelopeFill />
            </div>
            <div className="font-semibold">Email Me:</div>
            <div className="font-thin">
              <a
                href="mailto:prajwalkuchewar3@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                prajwalkuchewar3@gmail.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <BsLink />
            </div>
            <div className="font-semibold">Follow Me:</div>
            <div className="font-thin">
              <a
                href="https://linkedin.com/in/prajwal018"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/prajwal018
              </a>
            </div>
          </div>
        </div>
        <a className="flex justify-center " href="/contact">
          <Link to="/contact">
            <Button title="Hire Me" />
          </Link>
        </a>
      </div>
      <div className="flex text-sm justify-end mx-auto">
        <p>&copy; 2023 Prajwal Inc.</p>
      </div>
    </>
  );
};

export default Footer;
