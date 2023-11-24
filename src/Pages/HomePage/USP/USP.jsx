import Title from "../../../Components/Shared/title/Title";
import UspCard from "./UspCard/UspCard";
import business from "../../../assets/jsons/customer.json";
import customer from "../../../assets/jsons/business.json";
import features from "../../../assets/jsons/features.json";
import inovation from "../../../assets/jsons/inovation.json";
const USP = () => {
  return (
    <div>
      <Title
        head={"Discover What Sets Us Apart"}
        semiHead={
          "Elevate Your Experience with Unparalleled Solutions - Where Innovation Meets Simplicity, and Your Success is Our Priority. Explore a World of Unique Features Designed Just for You."
        }
      ></Title>

      <div className="lg:w-[90%] grid gap-16 lg:gap-8 grid-cols-1 lg:grid-cols-4 lg:mx-auto mx-10 mt-4 lg:mt-20">
        <UspCard title={"Elevate Your Business"} des={"Experience the art of simplicity with our thoughtfully crafted products. Navigate life effortlessly with intuitive interfaces."} json={business}></UspCard>
        <UspCard title={"Exclusive Features"} des={"Explore a range of exclusive features tailored to meet your unique needs. We believe in going beyond the ordinary."} json={features}></UspCard>
        <UspCard title={"Customer Centric Approach"} des={"we prioritize your success. Our customer-centric approach ensures the product is crafted with your satisfaction in mind."} json={customer}></UspCard>
        <UspCard title={"Innovate with Confidence"} des={"Embrace the future with our innovative solutions. Stay ahead of the curve with cutting-edge technology."} json={inovation}></UspCard>
      </div>
    </div>
  );
};

export default USP;
