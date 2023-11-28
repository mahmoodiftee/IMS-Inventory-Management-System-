import { Outlet } from "react-router-dom";
import RightSide from "./DashboardElements/RightSide/RightSide";
import Sidebar from "./DashboardElements/Sidebar/Sidebar";

const DashboardRoot = () => {
    return (
        <div className="2xl:container mx-auto App ">
            <div className="w-full  px-3 AppGlass scroll-container">
                <Sidebar></Sidebar>
                <div className="py-[2rem] px-2">
                    <Outlet></Outlet>
                </div>
                <div className="">
                    <RightSide></RightSide>
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </div >
    );
};

export default DashboardRoot;