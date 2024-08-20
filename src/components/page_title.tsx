import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="m-4 text-center rounded-lg bg-lightSecondary dark:bg-darkSecondary">
      <div className="text-3xl font-bold">{title.toUpperCase()}</div>
    </div>
  );
};

export default PageTitle;
