import React from "react";

export interface ServiceCardProps {
  title: string;
  subTitle?: string;
  text: string;
  link: string[];
  rotate?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subTitle,
  text,
  link,
}) => {
  return (
    <div className="rounded-lg bg-primary-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-semibold text-l mb-2">{subTitle}</div>
        <p className="text-gray-700 text-base mb-2 line-clamp-2">{text}</p>
        <div className="pr-6">
          {link.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-primary-100 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{item}
            </span>
          ))}
        </div>
        <div className="flex justify-end text-white">
          <button
            className="bg-primary-800 shadow-lg shadow-gray-900/40  hover:bg-primary-600 text-primary-200 py-1 px-3 rounded-full"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/prajwal018",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
