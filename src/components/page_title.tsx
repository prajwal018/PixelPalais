import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="bg-lightSecondary dark:bg-darkSecondary m-4 rounded-lg text-center">
      <div className="text-3xl font-bold">{title.toUpperCase()}</div>
    </div>
  );
};

export default PageTitle;
