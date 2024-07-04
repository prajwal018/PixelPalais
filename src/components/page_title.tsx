import React from "react";
import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 m-4 rounded-lg text-center">
      <div className="text-4xl font-bold">{title.toUpperCase()}</div>
    </div>
  );
};

export default PageTitle;
