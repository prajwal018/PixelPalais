
import React, { useState } from "react";
import Flip, { FlipProps } from "../components/flip.tsx";

import PageTitle from "../components/page_title.tsx";
import { toast } from "react-toastify";

const Feedback: FlipProps[] = [
  {
    title: "Client",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Red",
    profession: "UX Designer",
  },
  {
    title: "Friends",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Yellow",
    profession: "UX Designer",
  },
  {
    title: "Co-worker",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Green",
    profession: "UX Designer",
  },
];
const Contact: React.FC = () => {
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
      <div id="contact" className="p-4 m-4">
        <div id="Info" className="grid gap-4 m-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-right">Stay Connected </h3>
            <h3 className="mb-4 text-xl font-semibold text-right">
              Not sure how to say hello?
            </h3>

            <p className="mb-8 text-right text-l">
              Whether you're looking for advice, want to discuss the latest tech
              trends, or just want to connect, I’m always open to new
              conversations. Building a strong network is key to staying updated
              and inspired in the tech world.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-lightTertiary dark:bg-darkTertiary sm:col-span-1">
            <h3 className="text-2xl font-bold ">Let's Collaborate</h3>
            <h3 className="mb-4 text-xl font-semibold">
              Ready to Create Something Amazing?
            </h3>
            <p className="mb-8 text-l">
              Are you working on a groundbreaking project or have an innovative
              idea? I’d love to hear about it! Collaboration is the heart of
              innovation, and together we can turn great ideas into reality.
            </p>
          </div>
        </div>
        <div id="comment" className="grid gap-4 m-4 sm:grid-cols-2">
          <div className="mx-auto">
            <div className="p-4 text-2xl font-bold text-center">
              Poster for the Day !
            </div>
            <img
              className="object-scale-down h-auto p-4 w-96 bg-darkPrimary dark:bg-lightPrimary"
              src="https://i.pinimg.com/474x/5e/4b/ea/5e4beaa17a95280f5cfbb0963632b81b.jpg"
            />
          </div>
          <div className="my-12 sm:cols-span-1">
            <form onSubmit={handleSubmit}>
              <div className="relative pb-4 mb-4">
                <div className="font-black opacity-25 text-7xl sm:text-9xl">
                  Name
                </div>
                <input
                  className="absolute inset-x-0 bottom-0 p-2 border-2 rounded-full opacity-50 text-dark dark:text-light border-primary-600"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="relative pb-4 mb-4">
                <div className="font-black opacity-25 text-7xl sm:text-9xl">
                  Email
                </div>
                <input
                  className="absolute inset-x-0 bottom-0 p-2 border-2 rounded-full opacity-50 text-dark dark:text-light border-primary-600"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="relative pb-12 mb-8 overflow-x-clip">
                <div className="font-black opacity-25 text-7xl sm:text-9xl">
                  Message
                </div>
                <textarea
                  className="absolute inset-x-0 bottom-0 p-4 border-2 rounded-full opacity-50 text-dark dark:text-light border-primary-600"
                  name="message"
                  id="message"
                  rows={2}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full p-4 rounded-full shadow-lg item-center bg-darkPrimary dark:bg-lightPrimary dark:text-darkPrimary text-lightPrimary shadow-gray-500/40 "
                  type="submit"
                >
                  Send
                </button>
              </div>
              {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
        <div className="grid">
        <h3 className="mx-auto text-2xl font-bold text-center">Feedback</h3>
        <div id="feedback" className="grid gap-4 mx-auto my-8 sm:grid-cols-3">
          {Feedback.map((item,index) => (
            <Flip
            key={index+1}
              title={item.title}
              description={item.description}
              name={item.name}
              profession={item.profession}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
