import { toast } from "react-toastify";

const HelloPrompter = () => {
  const handleHi = () => {
    toast("😺 Hello Visitor");
  };

  return (
    <div
      className="bg-light dark:bg-dark  size-16 absolute ml-2 left-19 top-2 rounded-full"
      onClick={handleHi}
    >
      <span className="text-5xl">👋</span>
    </div>
  );
};

export default HelloPrompter;
