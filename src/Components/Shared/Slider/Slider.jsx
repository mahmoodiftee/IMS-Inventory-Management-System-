import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation } from "swiper/modules";
import SliderCard from "../Cards/SliderCard";

const Slider = ({ cards }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#000",
      }}
      zoom={true}
      navigation={true}
      modules={[Zoom, Navigation]}
      className="mySwiper h-[380px]"
    >
      {cards.map((card) => (
        <SwiperSlide>
          <div className="swiper-zoom-container h-[380px]">
            <SliderCard card={card}></SliderCard>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
