import React from "react";

export interface TagProps {
  index: number;
  item: string;
}

const Tag: React.FC<TagProps> = ({ index, item }) => {
  return (
    <span
      key={index}
      className="inline-block px-3 py-1 my-2 mr-2 text-sm font-semibold text-gray-700 rounded-full shadow-lg bg-gradient-to-r from-cyan-200 to-emerald-200 shadow-gray-500/40"
    >
      #{item}
    </span>
  );
};

export default Tag;
