import "../RightSide/RightSide.css";
import logo from "../../../../assets/man.png"
import Pie from "./pie/DiagramChart"

const RightSide = () => {
    return (
        <div className="pt-[1rem] rounded-2xl MainDash">
            <div className="flex flex-col gap-6 rounded-2xl justify-center items-center">
                <div className="w-full h-[170px] flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-blue-200 to-cyan-200 justify-center items-center">
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src={logo} />
                        </div>
                    </div>
                    <p>Admin</p>
                </div>
                <div className="w-full h-[260px] flex rounded-2xl bg-gradient-to-r from-blue-200 to-cyan-200 justify-center items-center">
                    <Pie />
                </div>
            </div>

        </div>
    );
};

export default RightSide;