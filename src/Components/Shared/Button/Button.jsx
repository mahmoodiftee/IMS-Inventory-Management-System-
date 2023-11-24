import { MdDoubleArrow } from "react-icons/md";
const Button = ({ text }) => {
  return (
    <button className="chronicle-button">
      <span >
        <em className="flex justify-center items-center gap-3">{text} <MdDoubleArrow /></em>
        
      </span>
      <span>
        <em className="flex justify-center items-center gap-3">{text} <MdDoubleArrow /></em>
        
      </span>
    </button>
  );
};

export default Button;
