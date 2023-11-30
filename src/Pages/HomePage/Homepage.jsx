import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Powers from "./Powers/Powers";
import Testimonials from "./Testimonials/Testimonials";
import USP from "./USP/USP";
import Newsteller from "./CaseStudy/newsteller";
import Header from "./Header/Header";
import FAQ from "./FAQ/FAQ";

const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <Header></Header>
      <USP></USP>
      <Powers></Powers>
      <Testimonials></Testimonials>
      <Newsteller></Newsteller>
      <Contact></Contact>
      <FAQ></FAQ>
    </>
  );
};

export default Homepage;
