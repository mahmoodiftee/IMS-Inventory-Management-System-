import Button from "../../../Components/Shared/Button/Button";
import Title from "../../../Components/Shared/title/Title";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative mt-24">
      {/* Centered Circle */}
      <div className="w-full absolute top-0 left-0 h-full bgs-container"></div>

      {/* Bottom Left Circle */}
      <div className="w-full absolute bottom-0 left-0 h-full bgss-container"></div>

      <div className="w-full flex flex-col justify-center items-center mt-8 relative z-10">
        <Title
          head={"Streamline Your Business with Our Inventory Management System"}
          semiHead={
            "Unlock efficiency and enhance productivity with our cutting-edge IMS. Seamlessly manage products, track stock levels, and optimize your supply chain."
          }
        ></Title>
        <Button text={"GET STARTED"}></Button>
        <div className="w-[80%] mx-auto my-5 lg:my-8 rounded-lg lg:rounded-[30px] shadow-lg lg:shadow-xl">
          <img src={banner} alt="" className="rounded-lg lg:rounded-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
