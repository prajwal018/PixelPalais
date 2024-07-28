import React from "react";
export interface ButtonProps {
  title: string;
  url?: string;
}
const Button: React.FC<ButtonProps> = ({ title, url }) => {
  return (
    <button
      className="item-center rounded-full py-2 px-4 bg-darkPrimary dark:bg-lightPrimary dark:text-darkPrimary text-lightPrimary shadow-lg shadow-gray-500/40"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {title}
    </button>
  );
};

export default Button;
