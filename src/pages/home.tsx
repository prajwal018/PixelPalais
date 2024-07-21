import DigitalMe from "../components/digitalMe.tsx";
import AboutMe from "../components/aboutMe.tsx";
import HeroBoard from "../components/heroBoard.tsx";
import ServiceCard, { ServiceCardProps } from "../components/serviceCard.tsx";

import React from "react";
const Services: ServiceCardProps[] = [
  {
    title: "Web Development",
    text: "Creating engaging and responsive websites tailored to your needs.",
    link: ["react", "sql", "rest-api"],
  },
  {
    title: "Software Development",
    text: "Building scalable and efficient software solutions for various applications.",
    link: ["java", "micro-service", "algorithms"],
  },
  {
    title: "UI/UX Designer",
    text: "Designing intuitive and user-friendly interfaces for enhanced user experience.",
    link: ["figma", "testing", "adobe-xd"],
  },
];

const Home: React.FC = () => {
  return (
    <>
      <div className="m-4 sm:mb-20 md:mx-auto rounded-lg relative p-2 md:h-80 md:w-2/3 bg-stone-800 md:bg-primary-300 md:back">
        <HeroBoard />
      </div>
      <div className="m-4 sm:mb-20 my-8 grid gap-8 sm:grid-cols-3">
        {Services.map((item) => (
          <ServiceCard title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
      <div className="m-4 sm:mb-20 grid gap-4 sm:grid-cols-3">
        <AboutMe />
      </div>
      <div className="m-4 sm:mb-20 grid gap-4 sm:grid-cols-1">
        <DigitalMe />
      </div>
    </>
  );
};

export default Home;
