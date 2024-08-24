import React from "react";
import Button from "./button";
import Tag from "./tag";

export interface ServiceCardProps {
  title: string;
  subTitle?: string;
  text: string;
  link: string[];
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
        <div className="mb-2 text-xl font-bold">{title}</div>
        <div className="mb-2 font-semibold text-l">{subTitle}</div>
        <p className="mb-2 text-base line-clamp-2">{text}</p>
        <div className="pr-6">
          {link.map((item, index) => (
            <Tag key={index+1} item={item} />
          ))}
        </div>
        <div className="flex justify-end text-white">
          <Button
            title="Learn More"
            url="/skills"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
