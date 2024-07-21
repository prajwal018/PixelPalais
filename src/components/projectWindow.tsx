import React from "react";

const Header: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="bg-primary-900 flex justify-between rounded-t-lg">
      <div className="w-18 grid gap-1 p-2 grid-cols-2">
        <div className="rounded-full size-4 bg-red-400"></div>
        <div className="rounded-full size-4 bg-primary-400"></div>
      </div>
      <div className="grid grid-cols-1 text-center text-primary-200">
        {path}
      </div>
      <div className="w-16 grid grid-cols-6 text-center">
        <div className="rounded-full size-4 my-2 text-primary-200"></div>
      </div>
    </div>
  );
};

const Thumbnail: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="object-cover w-full size-52" />;
};

const Content: React.FC<{
  title: string;
  description: string;
  url: string;
  technologies: string[];
}> = ({ title, description, url, technologies }) => {
  return (
    <div className="p-4 rounded-b-lg">
      <h3 className="font-bold text-2xl ">{title}</h3>
      <p className="text-l line-clamp-4 hover:line-clamp-none">{description}</p>
      <div className="text-left mb-8  ">
        {technologies.map((item, index) => (
          <span
            key={index}
            className="inline-block bg-gradient-to-r from-cyan-200 to-emerald-200 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
          >
            #{item}
          </span>
        ))}
      </div>
      <div className="text-right">
        <Button text="Explore Live" url={url} />
      </div>
    </div>
  );
};

const Button: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <button
      className="rounded-full py-2 px-4 text-primary-200 bg-primary-800 shadow-lg shadow-gray-800/40"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {text}
    </button>
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
    <div className="w-full h-max shadow-lg shadow-primary-800/40 rounded-b-lg">
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
