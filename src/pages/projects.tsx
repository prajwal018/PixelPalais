import React from "react";
import PageTitle from "../components/page_title";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SDE Intern",
    company: "Code Inbound LLP | Internship",
    description: `Open Network Monitoring System Project Contribution:
    - Collaborated in cross-functional teams to enhance OpenNMS frontend.
    - Applied strong JavaScript programming skills for feature implementation.
    - Followed microservice design patterns and Agile methodologies for iterative development.
    - Designed and tested frontend components, including dashboards, using Test-Driven Development (TDD) principles.
    API Integration and Documentation:
    - Integrated various APIs to enhance functionality and user experience.
    - Ensured comprehensive documentation and effective communication within the team.`,
    fadeDirection: "right",
  },
  {
    title: "SDE Intern",
    company: "VishwaGuru Infotech Private Ltd · Internship",
    description: `- Crafting compelling frontend interfaces using Angular, prioritizing UI/UX excellence.
    - Leveraging Java for backend development, ensuring robust and efficient systems.
    - Optimizing database queries and refining SQL skills to enhance data management.
    - Actively contributing within cross-functional teams, practicing Agile methodologies like Scrum, Kanban, and Sprint Planning.`,
    fadeDirection: "left",
  },
  {
    title: "Samantha",
    company: "Founder | CodeHub",
    description: `codehub founder desc codehub founder desc codehub founder desc
    codehub founder desc codehub founder desc codehub founder desc
    codehub founder desc codehub founder desc codehub founder desc`,
    fadeDirection: "right",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <PageTitle title="Projects" />
      <section className={`relative z-10`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={` mx-auto flex lg:flex-row flex-col gap-6 mb-6`}
          >
            <div className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">
              <div className="feedback-gradient" />
              <div>
                <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-dark">
                  {project.title}
                </h4>
                <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-dark">
                  {project.company}
                </p>
              </div>
              <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-dark">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
