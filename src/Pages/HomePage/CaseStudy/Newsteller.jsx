import { MdOutgoingMail } from "react-icons/md";
import news from "../../../assets/news.png"
const Newsteller = () => {
  return (
    <div className="mb-10 w-[90%] lg:pl-20 mx-auto flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="flex-grow-0 flex items-center">
        <div className="">
          <h1 className="block text-start text-[22px] lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Newsletter
          </h1>
          <h1 className="block text-start text-[22px] lg:mt-0 -mt-2 lg:text-6xl font-extrabold ">
            One more step to go
          </h1>
          <div className="w-full flex justify-start mt-2 lg:mt-6 items-center">
            <input
              type="text"
              placeholder="Your Email Address"
              className=" custom-border-gradient bg-transparent w-full max-w-xs p-2"
            />
            <button className="Achronicle-button">
              <span>
                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                  Subscribe <MdOutgoingMail />
                </em>
              </span>
              <span>
                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                  Subscribe <MdOutgoingMail />
                </em>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="mx-auto w-[800px] object-cover" src={news} alt="" />
      </div>
    </div>
  );
};

export default Newsteller;
