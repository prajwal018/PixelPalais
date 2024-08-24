import React from "react";
import { BsEnvelopeFill, BsLink, BsTelephoneFill } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <>
      <div className="p-4 mx-4 mt-4 rounded-lg bg-lightSecondary dark:bg-darkSecondary">
        <div className="text-3xl font-bold text-center">Let's Talk!</div>
        <div className="grid gap-12 m-4 text-center sm:grid-cols-3 item-center">
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
            <button className="px-4 py-2 rounded-full shadow-lg item-center bg-darkPrimary dark:bg-lightPrimary dark:text-darkPrimary text-lightPrimary shadow-gray-500/40">Hire Me</button>
        </a>
      </div>
      <div className="flex justify-end mx-auto text-sm">
        <p>&copy; 2023 Prajwal Inc.</p>
      </div>
    </>
  );
};

export default Footer;
