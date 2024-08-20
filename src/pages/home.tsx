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
      <div className="relative p-2 m-4 rounded-lg sm:mb-20 md:mx-auto md:h-80 md:w-2/3 bg-lightSecondary dark:bg-darkSecondary back dark:back">
        <HeroBoard />
      </div>
      <div className="grid gap-8 m-4 my-8 sm:mb-20 sm:grid-cols-3">
        {Services.map((item) => (
          <ServiceCard title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
      <div className="grid gap-4 m-4 sm:mb-20 sm:grid-cols-3">
        <AboutMe />
      </div>
      <div className="grid gap-4 m-4 sm:mb-20 sm:grid-cols-1">
        <DigitalMe />
      </div>
    </>
  );
};

export default Home;
