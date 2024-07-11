import React from "react";
import PageTitle from "../components/page_title.tsx";
import { ProjectWindow } from "../components/projectWindow.tsx";

const projects = [
  {
    title: "Hiking Life",
    url: "https://hikilifer.netlify.app/",
    description:
      "Bacon ipsum dolor amet leberkas doner id shoulder ullamco tempor duis pork. Hamburger laboris aliquip, consequat ribeye short ribs kevin ullamco tongue corned beef cillum cupim ex. Deserunt doner pork, quis sint lorem flank in ad swine leberkas pariatur id nisi spare ribs. Dolor short loin dolore, pork flank shank boudin cow veniam kevin. Ball tip in enim veniam chicken, tail sunt pork belly meatball pork dolor jowl ut id corned beef.",
    src: "./hikinglife.png",
  },
  {
    title: "Creative Landing Page",
    url: "https://prajwal018.vercel.app/",
    description:
      "Bacon ipsum dolor amet leberkas doner id shoulder ullamco tempor duis pork. Hamburger laboris aliquip, consequat ribeye short ribs kevin ullamco tongue corned beef cillum cupim ex. Deserunt doner pork, quis sint lorem flank in ad swine leberkas pariatur id nisi spare ribs. Dolor short loin dolore, pork flank shank boudin cow veniam kevin. Ball tip in enim veniam chicken, tail sunt pork belly meatball pork dolor jowl ut id corned beef.",
    src: "./brunel.png",
  },
  {
    title: "Portfolio Website",
    url: "https://pixel-palais.vercel.app",
    description:
      "Bacon ipsum dolor amet leberkas doner id shoulder ullamco tempor duis pork. Hamburger laboris aliquip, consequat ribeye short ribs kevin ullamco tongue corned beef cillum cupim ex. Deserunt doner pork, quis sint lorem flank in ad swine leberkas pariatur id nisi spare ribs. Dolor short loin dolore, pork flank shank boudin cow veniam kevin. Ball tip in enim veniam chicken, tail sunt pork belly meatball pork dolor jowl ut id corned beef.",
    src: "https://i.pinimg.com/474x/16/fb/83/16fb83c7a6667f4cfbb256708f1cd51e.jpg",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="m-4 p-4 grid gap-4 sm:grid-cols-1">
        <PageTitle title="Projects" />

        <div className="m-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectWindow
              title={project.title}
              src={project.src}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
