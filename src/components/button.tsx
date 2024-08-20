import React from "react";
export interface ButtonProps {
  title: string;
  url?: string;
}
const Button: React.FC<ButtonProps> = ({ title, url }) => {
  return (
    <button
      className="px-4 py-2 rounded-full shadow-lg item-center bg-darkPrimary dark:bg-lightPrimary dark:text-darkPrimary text-lightPrimary shadow-gray-500/40"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {title}
    </button>
  );
};

export default Button;
