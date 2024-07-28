/* eslint-disable react/style-prop-object */

import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../components/page_title.tsx";

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
      <div id="contact" className="m-4 p-4">
        <div id="Info" className="grid gap-4 m-4 sm:grid-cols-2">
          <div className="rounded-lg p-4">
            <h3 className="font-bold text-2xl text-right">Stay Connected </h3>
            <h3 className="font-semibold text-xl mb-4 text-right">
              Not sure how to say hello?
            </h3>

            <p className=" text-l mb-8 text-right ">
              Whether you're looking for advice, want to discuss the latest tech
              trends, or just want to connect, I’m always open to new
              conversations. Building a strong network is key to staying updated
              and inspired in the tech world.
            </p>
          </div>

          <div className=" rounded-lg bg-lightTertiary dark:bg-darkTertiary sm:col-span-1 p-4">
            <h3 className="font-bold text-2xl ">Let's Collaborate</h3>
            <h3 className="font-semibold text-xl mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className=" text-l mb-8">
              Are you working on a groundbreaking project or have an innovative
              idea? I’d love to hear about it! Collaboration is the heart of
              innovation, and together we can turn great ideas into reality.
            </p>
          </div>
        </div>
        <div id="comment" className="m-4 grid gap-4 sm:grid-cols-2">
          <div className="mx-auto">
            <div className="p-4 font-bold text-2xl text-center">
              Poster for the Day !
            </div>
            <img
              className="object-scale-down h-auto w-96 p-4 bg-darkPrimary dark:bg-lightPrimary"
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
                  className="absolute inset-x-0 bottom-0 text-dark dark:text-light opacity-50 rounded-full border-2 border-primary-600 p-2"
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
                  className="absolute text-dark dark:text-light inset-x-0 bottom-0 opacity-50 rounded-full border-2 border-primary-600 p-2"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-8 pb-12 relative overflow-x-clip">
                <div className="font-black text-7xl sm:text-9xl opacity-25">
                  Message
                </div>
                <textarea
                  className="absolute text-dark dark:text-light inset-x-0 bottom-0 opacity-50 rounded-full border-2 border-primary-600 p-4"
                  name="message"
                  id="message"
                  rows={2}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="item-center w-full rounded-full p-4 bg-darkPrimary dark:bg-lightPrimary dark:text-darkPrimary text-lightPrimary shadow-lg shadow-gray-500/40 "
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
