import React from "react";
import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <section id="page-title" style={{ color: "#000" }}>
      <h1>{title.toUpperCase()}</h1>
      <ul className="list-nav">
        <Link to="/home">
          <h6>Home</h6>
        </Link>
        <h4 style={{ padding: "10px" }}>
          <BsDashLg />
        </h4>
        <Link to={`/${title.toLowerCase()}`}>
          <h6>{title}</h6>
        </Link>
      </ul>
    </section>
  );
};

export default PageTitle;
