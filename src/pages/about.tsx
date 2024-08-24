import React from "react";
import Education from "../components/education.tsx";
import PageTitle from "../components/page_title.tsx";



const About: React.FC = () => {
  return (
    <div className="grid px-4">
      <PageTitle title="About" />
        
      <div className="grid p-4 mx-auto text-center rounded-lg sm:grid-col-1">
            <h3 className="mx-auto text-2xl font-bold text-center">Hello, I'm Prajwal</h3>
            <h3 className="text-xl font-thin">
              Aspiring Software Engineer
            </h3>

            <p className="mb-8 text-l">
            <br/>
            As a committed software developer, I hold a robust knowledge of data constructs and algorithmic methods. My educational experience has granted me a strong grasp of coding principles, preparing me to generate effective and adaptable solutions. I am ready to utilize my expertise to tackle genuine world resolutions and partake in groundbreaking initiatives that support constructive evolution. 
            <br/>
            <br/>Possessing a critical eye and a knack for problem resolution, I flourish within collaborative settings. I am perpetually pursuing chances to enhance my skills, with a keen interest in how tech can revolutionize industries. My aspiration is to establish a prosperous occupation as a software developer, crafting state-of-the-art software that brings meaningful changes to people's everyday lives.
            </p>
      </div>

      <h3 className="mx-auto text-2xl font-bold text-center">Education</h3>
        <Education/>
        
        
    </div>
  );
};

export default About;
