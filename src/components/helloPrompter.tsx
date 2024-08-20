import { toast } from "react-toastify";

const HelloPrompter = () => {
  const handleHi = () => {
    toast("😺 Hello Visitor");
  };

  return (
    <div
      className="absolute ml-2 rounded-full bg-light dark:bg-dark size-16 left-19 top-2"
      onClick={handleHi}
    >
      <span className="text-5xl">👋</span>
    </div>
  );
};

export default HelloPrompter;
