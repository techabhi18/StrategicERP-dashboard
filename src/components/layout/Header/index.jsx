import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaMicrophone, FaCalculator } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaEarthAmericas, FaListUl, FaCreditCard } from "react-icons/fa6";

const subMenus = [
    { name: "Modules", link: "/" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Home", link: "/home" },
    { name: "Pending", link: "/pending" },
    { name: "Todo Tasks", link: "/todo-tasks" },
    { name: "Scheduler", link: "/scheduler" },
    { name: "Report Tool", link: "/report-tool" },
    { name: "Profile", link: "/profile" },
    { name: "e-Files", link: "/e-files" },
    { name: "Shared e-Files", link: "/shared-e-files" },
    { name: "Updates", link: "/updates" },
    { name: "Chanakya", link: "/chanakya" },
    { name: "ESS", link: "/ess" }
];

const Header = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("/");

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location.pathname]);

    return (
        <div className="sticky top-0 z-99 shadow-sm">
            <div className="bg-primary py-2 px-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <NavLink to="/">
                        <img src="/images/StrategicERP-white-logo.png" alt="StrategicERP" className="w-full max-w-32" />
                    </NavLink>
                    <FiMenu className="text-primary bg-white rounded-full p-[3px] text-3xl cursor-pointer" />
                </div>
                <div className="md:flex hidden items-center gap-4">
                    <IoMdMail className="text-white text-[26px] cursor-pointer" />
                    <FaCreditCard className="text-white text-2xl cursor-pointer" />
                    <FaMicrophone className="text-white text-2xl cursor-pointer" />
                    <FaCalculator className="text-white text-2xl cursor-pointer" />
                    <MdOutlineContentCopy className="text-white text-2xl cursor-pointer" />
                    <FaEarthAmericas className="text-white text-2xl cursor-pointer" />
                    <FaListUl className="text-white text-2xl cursor-pointer" />
                </div>
            </div>
            <div className="submenus hide-scrollbar w-full flex xl:justify-between justify-start overflow-auto gap-x-7 gap-y-4 items-center bg-white px-8 py-2">
                {subMenus.map((menu, i) => (
                    <div
                        key={i}
                        className={`whitespace-nowrap text-sm inline-block ${activeMenu === menu.link ? "submenu-active text-blue-600 font-bold" : "text-primary font-semibold"
                            }`}
                    >
                        <NavLink to={menu.link} onClick={() => setActiveMenu(menu.link)} className="submenu-text">
                            {menu.name}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
