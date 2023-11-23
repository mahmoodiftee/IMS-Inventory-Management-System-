import Button from "../../../Components/Shared/Button/Button";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-8">
      <h1 className="text-black lg:w-[80%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
        Streamline Your Business with Our
        <br />
        Inventory Management System
      </h1>
      <p className="text-[10px] lg:text-[18px] mb-4 font-medium w-[80%] lg:w-[70%] mt-2 lg:mt-8 mx-auto text-center"style={{ letterSpacing: '1px' }}>
        Unlock efficiency and enhance productivity with our cutting-edge
        Inventory Management System. Seamlessly manage products, track stock
        levels, and optimize your supply chain.
      </p>
      <Button text={"GET STARTED"}></Button>

      <div className="w-[80%] mx-auto my-8 rounded-lg lg:rounded-[30px] shadow-lg lg:shadow-xl">
        <img src={banner} alt="" className="rounded-lg lg:rounded-[30px]"/>
      </div>
    </div>

  );
};

export default Banner;
