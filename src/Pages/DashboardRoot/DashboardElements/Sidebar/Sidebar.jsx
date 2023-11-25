import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import logo from "../../../../assets/dashboard.png"
import { motion } from "framer-motion";
const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return (
        <>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                <UilBars />
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                <div className="flex h-16 font-bold text-2xl text-[#ffd000e1] gap-3 items-center justify-center">
                    <img className="w-[3rem] [h-3rem]" src={logo} alt="" />
                    <p>Dashboard</p>
                </div>
                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div
                                className={selected === index ? "menuItem actives" : "menuItem"}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
