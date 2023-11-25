import { MdOutgoingMail } from "react-icons/md";
import img from "../../../assets/socialss.png";
const Contact = () => {
  return (
    <div className="mb-32 mt-24 w-[90%] mx-auto flex flex-col-reverse lg:flex-row-reverse lg:gap-20 justify-center items-center">
      <div className="flex-1 flex items-center">
        <div className="">
          <h1 className="block text-start text-[22px] lg:text-6xl font-extrabold ">
            Contact with us
          </h1>
          <div className="w-full flex justify-start mt-2 lg:mt-6 gap-4 items-center">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered  bg-transparent w-full p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered bg-transparent w-full p-2"
            />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className="mt-4 input input-bordered bg-transparent w-full p-2"
          />
          <textarea
            className="mt-4 textarea textarea-bordered bg-transparent lg:h-36 w-full p-2"
            placeholder="Go on we are listening"
          ></textarea>
          <button className="Achronicle-button mt-4 w-full">
            <span>
              <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                send <MdOutgoingMail />
              </em>
            </span>
            <span>
              <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                send <MdOutgoingMail />
              </em>
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img className="mx-auto w-[800px] object-cover" src={img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
