import { Outlet } from "react-router-dom";
import RightSide from "./DashboardElements/RightSide/RightSide";
import Sidebar from "./DashboardElements/Sidebar/Sidebar";

const DashboardRoot = () => {
    return (
        <div className="w-full App mx-auto">
            <div className="2xl:container AppGlass px-4 scroll-container">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
                <div className="">
                    <RightSide></RightSide>
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </div >
    );
};

export default DashboardRoot;