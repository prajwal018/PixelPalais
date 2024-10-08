import React from "react";

export interface TagProps {
  item: string;
}

const Tag: React.FC<TagProps> = ({  item }) => {
  return (
    <span
      className="inline-block px-3 py-1 my-2 mr-2 text-sm font-semibold text-gray-700 rounded-full bg-gradient-to-r from-cyan-200 to-emerald-200 "
    >
      #{item}
    </span>
  );
};

export default Tag;
