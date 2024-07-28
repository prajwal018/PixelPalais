import React from "react";
import Button from "./button";
import Tag from "./tag";

const Header: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="bg-lightPrimary dark:bg-darkPrimary flex justify-between rounded-t-lg border-x-2 border-t-2 border-lightSecondary dark:border-darkSecondary">
      <div className="w-18 grid gap-1 p-2 grid-cols-2">
        <div className="rounded-full size-4 bg-red-400"></div>
        <div className="rounded-full size-4 dark:bg-lightTertiary bg-darkTertiary"></div>
      </div>
      <div className="grid grid-cols-1 text-center text-dark dark:text-light">
        {path}
      </div>
      <div className="w-16 grid grid-cols-6 text-center">
        <div className="rounded-full size-4 my-2 text-dark dark:text-light"></div>
      </div>
    </div>
  );
};

const Thumbnail: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover w-full size-52 border-x-2 border-lightSecondary dark:border-darkSecondary"
    />
  );
};

const Content: React.FC<{
  title: string;
  description: string;
  url: string;
  technologies: string[];
}> = ({ title, description, url, technologies }) => {
  return (
    <div className="p-4 rounded-b-lg bg-lightPrimary dark:bg-darkPrimary border-x-2 border-b-2 border-lightSecondary dark:border-darkSecondary">
      <h3 className="font-bold text-2xl ">{title}</h3>
      <p className="text-l line-clamp-4 hover:line-clamp-none dark:text-lightTertiary text-darkTertiary ">
        {description}
      </p>
      <div className="text-left mb-8  ">
        {technologies.map((item, index) => (
          <Tag item={item} index={index} />
        ))}
      </div>
      <div className="text-right">
        <Button title="Explore Live" url={url} />
      </div>
    </div>
  );
};

export const ProjectWindow: React.FC<{
  url: string;
  src: string;
  title: string;
  description: string;
  technologies: string[];
}> = ({ url, src, title, description, technologies }) => {
  return (
    <div className="w-full h-max rounded-b-lg">
      <Header path={url} />
      <Thumbnail src={src} alt="Project Thumbnail" />
      <Content
        title={title}
        url={url}
        description={description}
        technologies={technologies}
      />
    </div>
  );
};
