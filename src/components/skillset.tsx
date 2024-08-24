
export interface SkillCardProps {
  title: string;
  subTitle?: string;
  url: string;
}
const agileProcess:SkillCardProps[] = [
  {
    title: "Java",
    subTitle: "Define Goals & Requirements",
    url: "https://cdn-icons-png.flaticon.com/128/152/152760.png",
  },
  {
    title: "Spring",
    subTitle: "Create Design Mockups",
    url: "https://cdn-icons-png.flaticon.com/128/188/188333.png",
  },
  {
    title: "React",
    subTitle: "Code & Build",
    url: "https://cdn-icons-png.flaticon.com/128/875/875209.png",
  },
  {
    title: "Docker",
    subTitle: "Quality Assurance",
    url: "https://cdn-icons-png.flaticon.com/128/15466/15466088.png",
  },
  {
    title: "Kubernetes",
    subTitle: "Release & Monitor",
    url: "https://image.shutterstock.com/image-vector/kubernetes-logo-white-helm-steering-260nw-2114462534.jpg",
  },
  {
    title: "SQL",
    subTitle: "Release & Monitor",
    url: "https://cdn-icons-png.flaticon.com/128/9544/9544010.png",
  },
  {
    title: "Java",
    subTitle: "Define Goals & Requirements",
    url: "https://cdn-icons-png.flaticon.com/128/152/152760.png",
  },
  {
    title: "Spring",
    subTitle: "Create Design Mockups",
    url: "https://cdn-icons-png.flaticon.com/128/188/188333.png",
  },
  {
    title: "React",
    subTitle: "Code & Build",
    url: "https://cdn-icons-png.flaticon.com/128/875/875209.png",
  },
  {
    title: "Docker",
    subTitle: "Quality Assurance",
    url: "https://cdn-icons-png.flaticon.com/128/15466/15466088.png",
  },
  {
    title: "Kubernetes",
    subTitle: "Release & Monitor",
    url: "https://image.shutterstock.com/image-vector/kubernetes-logo-white-helm-steering-260nw-2114462534.jpg",
  },
  {
    title: "SQL",
    subTitle: "Release & Monitor",
    url: "https://cdn-icons-png.flaticon.com/128/9544/9544010.png",
  },
];

const Skillset = () => {
  return (
    <>
      {agileProcess.map((step, index) => (
        <div key={index+1}
          className={`grid md:grid-cols-3 gap-1 rounded-lg p-8 bg-lightPrimary dark:bg-darkPrimary md:w-80 mx-auto`}
        >
          <div className="hidden col-span-2 md:block">
          <div className="mb-2 font-bold url-xl">{step.title}</div>
          <div className="mb-2 font-semibold url-l">{step.subTitle}</div>
          </div>
          <img
          className="object-cover rounded-lg size-20"
          src={step.url}
        />
        </div>
      ))}
    </>
  );
};

export default Skillset;
