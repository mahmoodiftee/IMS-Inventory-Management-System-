import Title from "../../../Components/Shared/title/Title";
import UspCard from "./UspCard/UspCard";
import customer from "../../../assets/jsons/customer.json";
import business from "../../../assets/jsons/business.json";
import features from "../../../assets/jsons/features.json";
import inovation from "../../../assets/jsons/inovation.json";
import Modal from "./Modal/Modal";
const USP = () => {
  return (
    <div>
      <Title
        head={"Discover What Sets Us Apart"}
        semiHead={
          "Elevate Your Experience with Unparalleled Solutions - Where Innovation Meets Simplicity, and Your Success is Our Priority. Explore a World of Unique Features Designed Just for You."
        }
      ></Title>

      <div className="lg:w-[90%] grid gap-12 lg:gap-8 grid-cols-1 lg:grid-cols-4 lg:mx-auto mx-10 mt-4 lg:mt-20">
        <UspCard title={"Elevate Your Business"} des={"Experience the art of simplicity with our thoughtfully crafted products. Navigate life effortlessly with intuitive interfaces."} json={business}></UspCard>
        <Modal title={"Elevate Your Business"} des={"Experience the art of simplicity with our thoughtfully crafted products. Navigate life effortlessly with intuitive interfaces."} json={business} ></Modal>
        
        <UspCard title={"Exclusive Features"} des={"Explore a range of exclusive features tailored to meet your unique needs. We believe in going beyond the ordinary."} json={features}></UspCard>
        <Modal title={"Exclusive Features"} des={"Explore a range of exclusive features tailored to meet your unique needs. We believe in going beyond the ordinary."} json={features}></Modal>
        
        <UspCard title={"Customer Centric Approach"} des={"we prioritize your success. Our customer-centric approach ensures the product is crafted with your satisfaction in mind."} json={customer}></UspCard>
        <Modal title={"Customer Centric Approach"} des={"we prioritize your success. Our customer-centric approach ensures the product is crafted with your satisfaction in mind."} json={customer} ></Modal>
        
        <UspCard title={"Innovate with Confidence"} des={"Embrace the future with our innovative solutions. Stay ahead of the curve with cutting-edge technology."} json={inovation}></UspCard>
        <Modal title={"Innovate with Confidence"} des={"Embrace the future with our innovative solutions. Stay ahead of the curve with cutting-edge technology."} json={inovation}></Modal>
      
      </div>
    </div>
  );
};

export default USP;
