import React from "react";

interface ServiceCardProps {
  title: string;
  text: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text }) => {
  return (
    <div className="rounded-lg bg-gray-100 border-black shadow-lg shadow-emerald-500/40">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2 line-clamp-2">{text}</p>
        <div className="pr-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #java
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #sql
          </span>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-3 rounded-full"
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
