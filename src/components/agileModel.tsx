import { ServiceCardProps } from "./serviceCard.tsx";

const agileProcess: ServiceCardProps[] = [
  {
    title: "Planning",
    subTitle: "Define Goals & Requirements",
    text: "Gather requirements, define project goals, and create a roadmap for the development process.",
    link: ["Requirements", "Roadmap"],
    rotate: "-rotate-45",
  },
  {
    title: "Design",
    subTitle: "Create Design Mockups",
    text: "Design the user interface and experience, creating wireframes and mockups.",
    link: ["Wireframes", "UI/UX"],
    rotate: "",
  },
  {
    title: "Development",
    subTitle: "Code & Build",
    text: "Develop the software using best practices, writing clean and efficient code.",
    link: ["Coding", "Best Practices"],
    rotate: "rotate-45",
  },
  {
    title: "Testing",
    subTitle: "Quality Assurance",
    text: "Test the software thoroughly to ensure it meets the requirements and is free of bugs.",
    link: ["Unit Test", "Integration Test"],
    rotate: "rotate-45",
  },
  {
    title: "Deployment",
    subTitle: "Release & Monitor",
    text: "Deploy the software to production and monitor its performance.",
    link: ["Deployment", "Monitoring"],
    rotate: "",
  },
  {
    title: "Maintenance",
    subTitle: "Support & Improve",
    text: "Provide ongoing support and make improvements based on user feedback.",
    link: ["Support", "Feedback"],
    rotate: "-rotate-45",
  },
];

const AgileModel = () => {
  return (
    <>
      {agileProcess.map((step, index) => (
        <div className={`rounded-full p-8 bg-primary-200 size-80 mx-auto`}>
          <div className="font-bold text-xl mb-2">{step.title}</div>
          <div className="font-semibold text-l mb-2">{step.subTitle}</div>
          {step.link.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-primary-100 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{item}
            </span>
          ))}
          <p className="text-gray-700 text-base mb-2 line-clamp-2">
            {step.text}
          </p>
          <div className="flex justify-end text-white">
            <div className="bg-primary-800 shadow-lg shadow-gray-900/40  hover:bg-primary-600 text-primary-200 py-1 px-3 rounded-full">
              Learn more
            </div>
          </div>
          <div className="font-black text-9xl mb-2 opacity-25">{index + 1}</div>
        </div>
      ))}
    </>
  );
};

export default AgileModel;
