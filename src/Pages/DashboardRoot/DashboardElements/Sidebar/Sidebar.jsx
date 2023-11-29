import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { UilBars } from "@iconscout/react-unicons";
import logo from "../../../../assets/dashboard.png"
import { motion } from "framer-motion"; import {
    UilShoppingBag,
    UilShop,
    UilChart,
    UilCreateDashboard,
    UilBox,
    UilUniversity,
} from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [manager, setManager] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://ims-server-kappa.vercel.app/users");
                const userData = response.data;
                const currentUser = userData.find((u) => u.role === 'manager');
                const role = currentUser && currentUser.role !== null && currentUser.role !== undefined;
                setManager(role);
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            }
        };
        if (user) {
            fetchData();
        }
    }, [user]);


    const SidebarData = [
        ...(user && manager
            ? [
                {
                    icon: UilCreateDashboard,
                    heading: "Dashboard",
                    link: "/dashboard",
                },
                {
                    icon: UilBox,
                    heading: "Product Management",
                    link: "/dashboard/product-management",
                },
                {
                    icon: UilShoppingBag,
                    heading: "Sale Collection",
                    link: "/dashboard/sale-collection",
                },
                {
                    icon: UilUniversity,
                    heading: "Payment and Subscription",
                    link: "/dashboard/subscription",
                },

                {
                    icon: UilChart,
                    heading: "Sales Summary",
                    link: "/dashboard/analytics",
                },
            ]
            : [
                {
                    icon: UilShop,
                    heading: "Manage Shop",
                    link: "/dashboard",
                },
                {
                    icon: UilChart,
                    heading: "Sale-Summary",
                    link: "/dashboard/orders",
                },
            ]
        ),
    ];


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
                <div className="flex h-16  font-bold text-2xl text-[#ffd000e1] gap-2 items-center justify-start">
                    <img className="w-[3rem] [h-3rem]" src={logo} alt="" />
                    <h1 className="block text-start text-[22px] lg:text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-200 text-transparent bg-clip-text">
                        Dashboard
                    </h1>
                </div>
                <div className="menus">
                    {SidebarData.map((item, index) => (
                        <NavLink
                            to={item.link}
                            className={selected === index ? "menuItems actives" : "menuItems"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </NavLink>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
