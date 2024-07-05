import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
export interface FlipProps {
  title: string;
  description: string;
  name: string;
  profession: string;
}
const Flip: React.FC<FlipProps> = ({
  title,
  description,
  name,
  profession,
}) => {
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div
        className="bg-primary-200 cursor-pointer relative h-80 w-60"
        onClick={() => setFlip(!flip)}
      >
        <img
          className="object-cover h-80 w-60 rounded-lg"
          src="https://i.pinimg.com/474x/e0/51/3d/e0513dfbe1eee5a02210b9b48b2887fd.jpg"
        />
      </div>
      <div
        className="h-80 w-60 rounded-lg bg-primary-200 cursor-pointer"
        onClick={() => setFlip(!flip)}
      >
        <div className="text-center p-4">
          <h4 className="font-bold text-xl mb-2">{title}</h4>
          <p className="text-gray-700 text-base mb-2">{description}</p>
          <div className="font-semibold text-l">{name}</div>
          <div className="font-normal text-l mb-2">{profession}</div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Flip;
