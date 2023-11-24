import { useEffect, useState } from "react";
import Slider from "../../../Components/Shared/Slider/Slider";
import Title from "../../../Components/Shared/title/Title";

const Testimonials = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="p-8 lg:px-12">
      <div className="mb-6 lg:mb-16">
        <Title head={"What users & Shop Managers like you have to say"}></Title>
        {/* testimonials */}

        <div className="h-[400px]">
          <Slider cards={cards}></Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
