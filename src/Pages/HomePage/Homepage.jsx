import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Powers from "./Powers/Powers";
import Testimonials from "./Testimonials/Testimonials";
import USP from "./USP/USP";
import Newsteller from "./CaseStudy/newsteller";

const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <USP></USP>
      <Powers></Powers>
      <Testimonials></Testimonials>
      <Newsteller></Newsteller>
      <Contact></Contact>
    </>
  );
};

export default Homepage;
