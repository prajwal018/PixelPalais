import React from "react";

const Header: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="bg-primary-900 flex justify-between rounded-t-lg">
      <div className="w-18 grid gap-1 p-2 grid-cols-2">
        <div className="rounded-full size-4 bg-primary-200"></div>
        <div className="rounded-full size-4 bg-primary-200"></div>
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
}> = ({ title, description, url }) => {
  return (
    <div className="p-4 rounded-b-lg">
      <h3 className="font-bold text-2xl ">{title}</h3>
      <p className="text-l mb-8 ">{description}</p>
      <Button text="Explore Live" url={url} />
    </div>
  );
};

const Button: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <button
      className="item-center rounded-full py-2 px-4 text-primary-200 bg-primary-800 shadow-lg shadow-gray-800/40"
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
}> = ({ url, src, title, description }) => {
  return (
    <div className="w-full h-max shadow-lg shadow-primary-800/40 rounded-b-lg">
      <Header path={url} />
      <Thumbnail src={src} alt="Project Thumbnail" />
      <Content title={title} url={url} description={description} />
    </div>
  );
};
