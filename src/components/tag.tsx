import React from "react";

export interface TagProps {
  index: number;
  item: string;
}

const Tag: React.FC<TagProps> = ({ index, item }) => {
  return (
    <span
      key={index}
      className="inline-block bg-gradient-to-r from-cyan-200 to-emerald-200 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
    >
      #{item}
    </span>
  );
};

export default Tag;
