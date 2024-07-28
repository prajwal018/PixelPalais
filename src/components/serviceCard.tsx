import React from "react";
import Button from "./button";
import Tag from "./tag";

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
    <div className="rounded-lg bg-lightSecondary dark:bg-darkSecondary">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-semibold text-l mb-2">{subTitle}</div>
        <p className=" text-base mb-2 line-clamp-2">{text}</p>
        <div className="pr-6">
          {link.map((item, index) => (
            <Tag index={index} item={item} />
          ))}
        </div>
        <div className="flex justify-end text-white">
          <Button
            title="Learn More"
            url="https://www.linkedin.com/in/prajwal018"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
