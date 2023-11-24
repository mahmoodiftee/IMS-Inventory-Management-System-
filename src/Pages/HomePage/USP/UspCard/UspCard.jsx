import { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const UspCard = ({ title, des, json }) => {
    const playerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      playerRef.current?.play();
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      playerRef.current?.stop();
      setIsHovered(false);
    };
  
    return (
      <div
        className={`shadow-xl cursor-pointer rounded-xl transition-transform transform hover:scale-120 ease-in-out ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <figure className="h-[170px] w-[80%] m-auto overflow-hidden">
          <Player loop src={json} className="h-full w-full" ref={playerRef}></Player>
        </figure>
        <div className="py-6 px-4">
          <h2 className="text-center text-lg font-bold">{title}</h2>
          <p className="text-center text-sm mt-2">{des}</p>
        </div>
      </div>
    );
  };
  
  export default UspCard;
  