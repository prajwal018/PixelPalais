import React from "react";
import Button from "./button";
import Tag from "./tag";

const Header: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="flex justify-between border-t-2 rounded-t-lg bg-lightPrimary dark:bg-darkPrimary border-x-2 border-lightSecondary dark:border-darkSecondary">
      <div className="grid grid-cols-2 gap-1 p-2 w-18">
        <div className="bg-red-400 rounded-full size-4"></div>
        <div className="rounded-full size-4 dark:bg-lightTertiary bg-darkTertiary"></div>
      </div>
      <div className="grid grid-cols-1 text-center text-dark dark:text-light">
        {path}
      </div>
      <div className="grid w-16 grid-cols-6 text-center">
        <div className="my-2 rounded-full size-4 text-dark dark:text-light"></div>
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
    <div className="p-4 border-b-2 rounded-b-lg bg-lightPrimary dark:bg-darkPrimary border-x-2 border-lightSecondary dark:border-darkSecondary">
      <h3 className="text-2xl font-bold ">{title}</h3>
      <p className="text-l line-clamp-4 hover:line-clamp-none dark:text-lightTertiary text-darkTertiary ">
        {description}
      </p>
      <div className="mb-8 text-left ">
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
    <div className="w-full rounded-b-lg h-max">
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
