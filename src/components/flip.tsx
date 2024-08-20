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
        className="relative cursor-pointer h-80 w-60"
        onClick={() => setFlip(!flip)}
      >
        <img
          className="object-cover rounded-lg h-80 w-60"
          src="https://i.pinimg.com/474x/e0/51/3d/e0513dfbe1eee5a02210b9b48b2887fd.jpg"
        />
      </div>
      <div
        className="rounded-lg cursor-pointer h-80 w-60"
        onClick={() => setFlip(!flip)}
      >
        <div className="p-4 text-center rounded-lg bg-lightSecondary dark:bg-darkSecondary">
          <h4 className="mb-2 text-xl font-bold">{title}</h4>
          <p className="mb-2 text-base dark:text-lightTertiary text-darkSecondary">
            {description}
          </p>
          <div className="font-semibold text-l">{name}</div>
          <div className="mb-2 font-normal text-l">{profession}</div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Flip;
