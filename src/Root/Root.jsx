import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/createStore"]; // Add the paths where Navbar and Footer should be hidden

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <div className="2xl:container mx-auto">
      {!shouldHideNavbarFooter && <Navbar />}
      <div className="">
        <Outlet />
      </div>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
};

export default Root;
