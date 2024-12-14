import React from 'react';
import { ProjectWindow } from '../components/projectWindow.tsx';

let projects = [
  {
    title: 'Employee Management System',
    url: 'https://ems-sable.vercel.app/',
    description:
      'Employee Management App is a streamlined web application built with ReactJS for managing employee data efficiently. Users can view a list of employees, add new employees, and access detailed information about each employee. The app features a user-friendly interface, leveraging the power of Cosmocloud APIs for data management, ensuring a seamless and responsive experience. Ideal for businesses looking to maintain organized employee records with ease.',
    src: './ems.jpg',
    technologies: ['ReactJS', 'CosmoCloud', 'MongoDB', 'API'],
  },
  {
    title: 'Hiking Life',
    url: 'https://hikilifer.netlify.app/',
    description:
      "Hiking Life is a dynamic web application designed to provide hiking enthusiasts with comprehensive tools and resources to plan and enhance their hiking experiences. Whether you're a seasoned hiker or a beginner, Hiking Life offers a user-friendly platform to discover new trails, track your hikes, and connect with a community of outdoor enthusiasts.",
    src: './hikinglife.png',
    technologies: ['React', 'Bootstrap CSS'],
  },
  {
    title: 'Portfolio Website',
    url: 'https://pixel-palais.vercel.app',
    description:
      'The Personal Portfolio Website is a comprehensive and interactive platform designed to showcase my skills, projects, and professional journey as a software developer. The website serves as a digital resume, providing potential employers and collaborators with a detailed view of my capabilities and achievements.',
    src: 'https://i.pinimg.com/474x/16/fb/83/16fb83c7a6667f4cfbb256708f1cd51e.jpg',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Creative Landing Page',
    url: 'https://prajwal018.vercel.app/',
    description:
      "The Burnel Landing Page is a sleek and modern web interface designed to capture the essence of Burnel, a forward-thinking business dedicated to providing innovative solutions. The landing page serves as the digital gateway to Burnel’s offerings, effectively communicating the brand's value proposition and engaging potential customers from the first interaction.",
    src: './brunel.png',
    technologies: ['React', 'Material CSS'],
  },

  {
    title: 'Safe Route',
    url: 'https://pixel-palais.vercel.app',
    description:
      'An Innovative IoT And AI-Based Fire Evacuation System Tailored For Smart Buildings.The System Ensures Optimal Safety During Fire Incidents. It Utilizes IoT Sensors Strategically Placed Throughout The Building To Detect And Monitor Fire Conditions In Real-Time. The AI Component Analyzes Data From Sensors To Dynamically Determine The Safest Evacuation Routes For Occupants.',
    src: 'https://i.pinimg.com/474x/5c/66/7c/5c667cfd36901989856d4dec03862138.jpg',
    technologies: ['Firebase', 'ReactJS', 'React Native', 'NodeJS', 'IOT'],
  },
  {
    title: 'CodeHub',
    url: 'https://codehub-ioit.vercel.app/',
    description:
      "The CodeHub Website is a comprehensive and interactive platform designed to showcase my events, projects, and professional body of CodHub Developer Club. The website serves as a digital presence, providing potential individuals and collaborators with a detailed view of club's capabilities and achievements.",
    src: './codehub.png',
    technologies: ['NextJS', 'Framer-motion'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid md:grid-flow-col auto-cols-[300px] md:auto-cols-[500px] gap-16 overflow-x-auto snap-x snap-mandatory scroll-auto p-16 no-scrollbar">
      {projects.map((project, index) => (
        <ProjectWindow
          key={index + 1}
          title={project.title}
          src={project.src}
          description={project.description}
          url={project.url}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default Projects;
