import React from 'react';
import Button from './button';
import Tag from './tag';

const Header: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="grid grid-cols-5 border-t-2 rounded-t-lg bg-lightPrimary dark:bg-darkPrimary border-x-2 border-lightSecondary dark:border-darkSecondary">
      <div className="grid grid-cols-2 p-2 w-18">
        <div className="bg-red-400 rounded-full size-4"></div>
        <div className="rounded-full size-4 dark:bg-lightTertiary bg-darkTertiary"></div>
      </div>
      <div className="grid items-center grid-cols-1 col-span-4 text-sm md:text-center text-dark dark:text-light">
        {path}
      </div>
    </div>
  );
};

const Thumbnail: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover w-full size-32 border-x-2 border-lightSecondary dark:border-darkSecondary"
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
    <div className="hidden p-4 border-b-2 rounded-b-lg md:block bg-lightPrimary dark:bg-darkPrimary border-x-2 border-lightSecondary dark:border-darkSecondary">
      <h3 className="text-xl font-bold ">{title}</h3>
      <p className="text-l line-clamp-4 hover:line-clamp-none dark:text-lightTertiary text-darkTertiary ">
        {description}
      </p>
      <div className="mb-8 text-left line-clamp-1">
        {technologies.map((item, index) => (
          <Tag item={item} key={index + 1} />
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
    <div className="rounded-b-lg snap-center">
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
