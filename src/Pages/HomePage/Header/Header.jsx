import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";
import Title from "../../../Components/Shared/title/Title";
import banner from "../../../assets/banner.png";

const Header = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center mt-8 relative z-10">
        <Title
          head={"Streamline Your Business with Our Inventory Management System"}
          semiHead={
            "Unlock efficiency and enhance productivity with our cutting-edge IMS. Seamlessly manage products, track stock levels, and optimize your supply chain."
          }
        ></Title>
        <Link to={'/dashboard'}>
          <Button text={"GET STARTED"}></Button>
        </Link>
        <div className="w-[80%] mx-auto my-5 lg:my-8 rounded-lg lg:rounded-[30px] shadow-lg lg:shadow-xl">
          <img src={banner} alt="" className="rounded-lg lg:rounded-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;