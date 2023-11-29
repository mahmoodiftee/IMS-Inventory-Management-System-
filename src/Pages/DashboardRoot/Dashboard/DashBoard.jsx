import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="">
            <h1 className="mx-auto text-black text-center text-[22px] lg:text-4xl font-extrabold">
                WELCOME TO YOU DASHBOARD <br /><span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{user?.displayName}</span>
            </h1> 
            <div>
                <div className="avatar mx-auto w-full mt-12">
                    <div className="w-96 mx-auto mask mask-hexagon">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;