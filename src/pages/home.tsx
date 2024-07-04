import DigitalMe from "../components/digitalMe";
import AboutMe from "../components/aboutMe";
import HelloPrompter from "../components/helloPrompter";
import HeroBoard from "../components/heroBoard";
import ServiceCard, { ServiceCardProps } from "../components/serviceCard";

import React from "react";
const Services: ServiceCardProps[] = [
  {
    title: "Web Development",
    text: "Creating engaging and responsive websites tailored to your needs.",
    link: ["java", "react", "sql"],
  },
  {
    title: "Software Development",
    text: "Building scalable and efficient software solutions for various applications.",
    link: ["java", "react", "sql"],
  },
  {
    title: "UI/UX Designer",
    text: "Designing intuitive and user-friendly interfaces for enhanced user experience.",
    link: ["java", "react", "sql"],
  },
];

const Home: React.FC = () => {
  return (
    <>
      <div className="m-4 rounded-lg relative h-80 w-2/3 my-8 mx-auto bg-primary-300  back">
        <HeroBoard />
        <HelloPrompter />
      </div>
      <div className="m-4 grid gap-4 sm:grid-cols-3">
        {Services.map((item) => (
          <ServiceCard title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
      <div className="m-4 grid gap-4 sm:grid-cols-3">
        <AboutMe />
      </div>
      <div className="m-4 grid gap-4 sm:grid-cols-1">
        <DigitalMe />
      </div>
    </>
  );
};

export default Home;
