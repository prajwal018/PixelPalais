/* eslint-disable react/style-prop-object */

import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../components/page_title.tsx";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Contact: React.FC = () => {
  // const history = useHistory();
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xanwyljo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.info("Message Sent");

        setStatus("Thank you for your message!");
        form.reset();
      } else {
        toast.error("An error occurred. Please try again.");

        setStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");

      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <>
      <PageTitle title="Contact" />
      <div id="contact" className="m-4">
        <div id="Info" className="grid gap-4 m-4 sm:grid-cols-2">
          <div>
            <div className="font-bold text-2xl mx-auto text-center">
              Quick Support
            </div>
            <div className="text-xl font-normal text-center p-2">
              These are the words we live by in everything we do. Every story we
              tell, every brand <br />
              we build, and every interaction we create
            </div>
          </div>

          <div className="border-4 rounded-full lg:rounded-lg bg-primary-200 sm:col-span-1 p-4">
            <h3 className="font-bold text-2xl ">Need a Creative Website?</h3>
            <h3 className="font-semibold text-xl mb-4">I Can Help You!</h3>
            <p className=" text-l mb-8">
              Proactive student eager to contribute to the coding community
              through hard work and dedication to quality. Seeking to use
              exceptional communication skills as a team member/software
              developer. Proficiency in Python, Java, Data Structures, and
              Algorithms. Passionate about web development and user experience
              design.
            </p>
            <p className=" text-right mb-2">You Can Follow Me Here:</p>
            <div className="flex gap-2 justify-end">
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
        <div id="comment" className="m-4 grid gap-4 sm:grid-cols-2">
          <div className="mx-auto">
            <div className="p-4 font-bold text-2xl text-center">
              Poster for the Day !
            </div>
            <img
              className="object-scale-down h-auto w-96 p-4 bg-gray-900"
              src="https://i.pinimg.com/474x/5e/4b/ea/5e4beaa17a95280f5cfbb0963632b81b.jpg"
            />
          </div>
          <div className="my-12 sm:cols-span-1">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative pb-4">
                <div className="font-black text-7xl sm:text-9xl opacity-25">
                  Name
                </div>
                <input
                  className="absolute inset-x-0 bottom-0 text-primary-800 opacity-50 rounded-full border-2 border-primary-600 p-2"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4 relative pb-4">
                <div className="font-black text-7xl sm:text-9xl opacity-25">
                  Email
                </div>
                <input
                  className="absolute text-primary-800 inset-x-0 bottom-0 opacity-50 rounded-full border-2 border-primary-600 p-2"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-8 pb-12 relative">
                <div className="font-black text-7xl sm:text-9xl opacity-25">
                  Message
                </div>
                <textarea
                  className="absolute text-primary-800 inset-x-0 bottom-0 opacity-50 rounded-full border-2 border-primary-600 p-4"
                  name="message"
                  id="message"
                  rows={2}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="item-center w-full rounded-full p-4 text-primary-200 bg-primary-800 shadow-lg shadow-gray-800/40 "
                  type="submit"
                >
                  Send
                </button>
              </div>
              {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
