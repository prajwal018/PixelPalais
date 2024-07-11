import React from "react";
import PageTitle from "../components/page_title.tsx";

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
    <div className="m-4 p-4 grid gap-4 sm:grid-cols-1">
      <PageTitle title="Experiences" />
      <div>
        {experience.map((project, index) => (
          <div
            key={index}
            className={`grid gap-1 sm:grid-cols-3 p-4 text-left overflow rounded-lg shadow-lg`}
          >
            <div className="col-span-1 ">
              <div className="text-2xl font-thin">{project.title}</div>
              <div className="txet-xl font-bold">{project.company}</div>
              <ul className="ml-4 list-disc text-left line-clamp-3 hover:line-clamp-none lg:line-clamp-none">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 mx-auto my-auto">
              <img
                src={project.url}
                alt=""
                className="object-cover rounded-full size-40"
              />
            </div>
            <div className="col-span-1 py-auto">
              <div className="text-xl font-bold">Technologies Used</div>
              <div className="text-left">
                {project.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="inline-block bg-secondary-200 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
                  >
                    #{item}
                  </span>
                ))}
              </div>
              <div className="text-xl font-bold my-4">
                Achievements & Outcomes
              </div>
              <ul className="ml-4 list-disc text-left">
                {project.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
