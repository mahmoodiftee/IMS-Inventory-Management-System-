import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const SliderCard = ({card}) => {
  // console.log(card);
  return (
    <div className="card card-side h-[350px] w-[800px]">
      <figure className="pl-20 pr-10 py-10">
        <img
          className="rounded-full h-[300px] object-cover filter grayscale"
          src={card.authorImage}
          alt=""
        />
      </figure>

      <div className="card-body relative w-1/2 h-full">
        <h2 className="font-extrabold text-2xl mt-8 text-start">
         {card.test}
        </h2>
        <div className="absolute bottom-6">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block mr-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {card.author}
                </h5>
                <Rating style={{ maxWidth: 90 }} value={card.rating} readOnly />
              </div>
              <p className="text-start text-sm">{card.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
