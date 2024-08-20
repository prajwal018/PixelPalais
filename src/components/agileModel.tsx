import Button from "./button.tsx";
import { ServiceCardProps } from "./serviceCard.tsx";
import Tag from "./tag.tsx";

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
        <div
          className={`rounded-full p-8 bg-lightPrimary dark:bg-darkPrimary size-80 mx-auto`}
        >
          <div className="mb-2 text-xl font-bold">{step.title}</div>
          <div className="mb-2 font-semibold text-l">{step.subTitle}</div>
          {step.link.map((item, index) => (
            <Tag index={index} item={item} />
          ))}
          <p className="mb-2 text-base dark:text-lightPrimary text-darkPrimary line-clamp-2">
            {step.text}
          </p>
          <div className="flex justify-end text-white">
            <Button title="Learn more" />
          </div>
          <div className="mb-2 font-black opacity-25 text-9xl">{index + 1}</div>
        </div>
      ))}
    </>
  );
};

export default AgileModel;
