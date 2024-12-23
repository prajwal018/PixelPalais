import React from "react";
import PageTitle from "../components/page_title.tsx";
import Tag from "../components/tag.tsx";
import Projects from "./projects.tsx";

const experience = [
  {
    title: "SDE Intern",
    company: "Code Inbound LLP | Internship",
    description: [
      "Open Network Monitoring System Project Contribution:",
      "Collaborated in cross-functional teams to enhance OpenNMS frontend.",
      "Applied strong JavaScript programming skills for feature implementation.",
      "Followed microservice design patterns and Agile methodologies for iterative development.",
      "Designed and tested frontend components, including dashboards, using Test-Driven Development (TDD) principles.",
      "API Integration and Documentation:",
      "Integrated various APIs to enhance functionality and user experience.",
      "Ensured comprehensive documentation and effective communication within the team.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "OpenNMS",
      "Microservices",
      "Agile",
      "TDD",
    ],
    outcomes: [
      "Improved user experience by 30%.",
      "Reduced system downtime by 20%.",
    ],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2ocARDMcggJC2WwclNEwvzyh-ksdsCMSAw&s",
  },
  {
    title: "SDE Intern",
    company: "VishwaGuru Infotech Private Ltd | Internship",
    description: [
      "Crafting compelling frontend interfaces using Angular, prioritizing UI/UX excellence.",
      "Leveraging Java for backend development, ensuring robust and efficient systems.",
      "Optimizing database queries and refining SQL skills to enhance data management.",
      "Actively contributing within cross-functional teams, practicing Agile methodologies like Scrum, Kanban, and Sprint Planning.",
    ],
    technologies: ["Angular", "Java", "SQL", "Agile", "Scrum", "Kanban"],
    outcomes: [
      "Increased frontend performance by 25%.",
      "Enhanced data management efficiency by 15%.",
    ],
    url: "https://i.pinimg.com/474x/51/24/87/5124872dbb64c3fea72176ee55bd35af.jpg",
  },
  {
    title: "Technical Lead",
    company: "CodeHub | Founder",
    description: [
      "Founded CodeHub, a platform dedicated to fostering coding skills through collaborative projects and knowledge sharing.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    outcomes: [
      "Grew community to 1000+ active members.",
      "Facilitated 50+ successful projects.",
    ],
    url: "https://i.pinimg.com/474x/16/fb/83/16fb83c7a6667f4cfbb256708f1cd51e.jpg",
  },
];

const Experience: React.FC = () => {
  return (
    <div>
      <PageTitle title="Work" />
      <Projects />
      
      <div className="grid gap-4 p-4 m-4">
        {experience.map((experience, index) => (
          <div
            key={index + 1}
            className="grid gap-2 p-4 text-left border-dashed rounded-lg border-x border-y border-darkPrimary dark:border-lightPrimary sm:grid-cols-3 overflow bg-lightPrimary dark:bg-darkPrimary "
          >
            <div className="col-span-2 m-4">
              <div className="flex gap-4">
                <img
                  src={experience.url}
                  alt=""
                  className="object-cover my-auto rounded-full size-12"
                />
                <div className="">
                  <div className="text-2xl font-thin">{experience.title}</div>
                  <div className="font-bold txet-xl">{experience.company}</div>
                </div>
              </div>

              <ul className="pt-2 text-left list-disc dark:text-lightTertiary text-darkTertiary line-clamp-3 hover:ml-2 hover:line-clamp-none lg:line-clamp-5">
                {experience.description.map((line, index) => (
                  <li key={index + 1}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 py-auto">
              <div className="text-xl font-bold">Technologies Used</div>
              <div className="py-2 text-left">
                {experience.technologies.map((item, index) => (
                  <Tag key={index + 1} item={item} />
                ))}
              </div>
              <div className="mt-4 text-xl font-bold">
                Achievements & Outcomes
              </div>
              <ul className="ml-4 text-left list-disc dark:text-lightTertiary text-darkTertiary">
                {experience.outcomes.map((outcome, index) => (
                  <li key={index + 1}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
