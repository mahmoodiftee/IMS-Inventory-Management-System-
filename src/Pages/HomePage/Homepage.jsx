import Banner from "./Banner/Banner";
import CaseStudy from "./CaseStudy/CaseStudy";
import Powers from "./Powers/Powers";
import Testimonials from "./Testimonials/Testimonials";
import USP from "./USP/USP";

const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <USP></USP>
      <Powers></Powers>
      <Testimonials></Testimonials>
      <CaseStudy></CaseStudy>
    </>
  );
};

export default Homepage;
