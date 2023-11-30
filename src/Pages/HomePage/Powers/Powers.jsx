import one from "../../../assets/powers/1.png";
import two from "../../../assets/powers/2.jpg";
import three from "../../../assets/powers/3.png";
import four from "../../../assets/powers/profile.png";
import five from "../../../assets/powers/5.png";
import six from "../../../assets/powers/three.jpg";
const Powers = () => {
  return (
    <div className="lg:mt-20 p-8 lg:p-16">
      <div className="lg:mt-24 lg:my-20 my-8">
        <h1 className="text-black text-start text-[22px] lg:text-6xl font-extrabold">
          Discover Your New <br /><span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Superpowers</span>
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-7 gap-8">
        <div data-aos="fade-right" className="overflow-hidden col-span-1 md:col-span-4 rounded-2xl md:row-span-3 h-60 bg-white shadow-lg p-4">
            <p className="text-[22px] font-[900]">
              Present without even <br /> being there
            </p>
            <div>
              <img src={one} alt="" />
            </div>
          </div>

          <div data-aos="fade-down" className="col-span-1 overflow-hidden md:col-span-5 rounded-2xl md:row-span-4 h-72 bg-white shadow-lg p-4">
            <p className="text-[22px] font-extrabold">
              Keep you products upto date
            </p>
            <div>
              <img className="mx-auto" src={two} alt="" />
            </div>
          </div>

          <div data-aos="fade-left" className="col-span-1 overflow-hidden md:col-span-3 rounded-2xl md:row-span-3 h-60 bg-white shadow-lg p-4">
            <p className="text-[22px] font-extrabold">
              Everything managed <br /> in one place
            </p>
            <div>
              <img className="mx-auto" src={three} alt="" />
            </div>
          </div>

          <div data-aos="fade-right" className="col-span-1 md:col-span-4 rounded-2xl md:row-span-4 h-96 bg-white shadow-lg p-4">
            <p className="text-[22px] mt-10 font-extrabold">
              Get feedback from <br /> back in time
            </p>
            <div className="chat mx-auto chat-start mt-10">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src={four} />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">
                What about the sales last month?
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src={four} />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">Outstanding!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>

          <div className="col-span-1 overflow-hidden relative bg-gradient-to-r from-[#037cff] to-[#5eacff] md:col-span-5 rounded-2xl md:row-span-3 h-[335px] md:-mt-10 bg-white shadow-lg p-4">
            <p className="text-[22px] text-white font-extrabold">
              Organize work in the dashboard
            </p>
            <div className="absolute w-[900px] mx-auto -bottom-[300px] -left-52">
              <img className="w-full mx-auto" src={five} alt="" />
            </div>
          </div>

          <div data-aos="fade-left" className="overflow-hidden relative col-span-1 md:col-span-3 rounded-2xl md:row-span-4 h-96 md:-mt-[90px] bg-white shadow-lg p-4">
            <p className="text-[22px] font-extrabold mt-4">
              Get instant payments with payment records
            </p>
            <div className="absolute w-[500px] mx-auto -left-20 -bottom-[240px]">
              <img className="w-[500px] mx-auto" src={six} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powers;
