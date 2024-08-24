import React from "react";
import Tag from "./tag.tsx";

const education = [
  {
    school: "Savitribai Phule Pune University ",
    major: "Computer Engineering",
    courses: [
      "JavaScript",
      "React",
      "OpenNMS",
      "Microservices",
      "Agile",
      "TDD",
    ],
    outcomes:["Ranked 1st "],
    cgpa: 8.5,
    certificate:"Degree",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2ocARDMcggJC2WwclNEwvzyh-ksdsCMSAw&s",
  },
  {
    school: "Government Polytechnic ",
    major: "Computer Science & Engineering",
    courses: [
      "JavaScript",
      "React",
      "OpenNMS",
      "Microservices",
      "Agile",
      "TDD",
    ],
    outcomes:["Ranked 1st "],
    cgpa: 8.5,
    certificate:"Diploma",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2ocARDMcggJC2WwclNEwvzyh-ksdsCMSAw&s",
  },
];

const Education: React.FC = () => {
  return (
    
    <div className="grid grid-cols-3 p-4 mx-auto text-center gap-y-4 even:text-center">
        
        {education.map((Education,index) => (
          <>
            <img
            alt="school"
              className="hidden col-span-1 rounded-l-lg even:hidden size-72 md:block"
              src={Education.url} />
          
          <div key={index + 1}
            className="col-span-3 p-4 rounded-lg md:col-span-2 md:h-72 md:even:rounded-r-full md:odd:rounded-l-full bg-lightPrimary dark:bg-darkPrimary"
          >
              <div className="">

                <div className="text-2xl font-bold">{Education.school}</div>
                <div className="text-xl font-thin"> {Education.major}</div>

              </div>

              <div className="">
                <div className="py-2">
                  <div className="text-xl font-bold">Coursework</div>
                  {Education.courses.map((item, index) => (
                    <Tag key={index + 1} item={item} />
                  ))}
                </div>
              </div>

              <div className="">
                <div className="mt-4 text-xl font-bold">
                  Achievements & Outcomes
                </div>
                <div className="ml-4 list-disc dark:text-lightTertiary text-darkTertiary">
                  {Education.outcomes.map((outcome, index) => (
                    <li key={index + 1}>{outcome}</li>
                  ))}
                </div>
              </div>
              {/* <div className="mb-2 text-6xl font-black opacity-25 md:text-7xl lg:text-9xl">
                {Education.certificate}
              </div> */}
            </div>
            <img
            alt="school"
              className="hidden col-span-1 rounded-r-lg odd:hidden size-72 md:block"
              src={Education.url} />
            </>
        ))}
      </div>
  );
};

export default Education;
