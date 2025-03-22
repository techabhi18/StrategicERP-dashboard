import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

import { useLocale } from "../../../i18n";
import Icon from "../../common/Icon";

import DashboardIcon from "../../icons/DashboardIcon";
import PendingIcon from "../../icons/PendingIcon";
import TodoIcon from "../../icons/TodoIcon";
import CalenderIcon from "../../icons/CalenderIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import EFilesIcon from "../../icons/E-FilesIcon";
import SharedFilesIcon from "../../icons/SharedFilesIcon";
import ChanakyaAiIcon from "../../icons/ChanakyaAIIcon";
import ThemeSwitcher from "../ThemeSwitcher";

const subMenus = [
    { name: "Dashboard", link: "/", Icon: DashboardIcon },
    { name: "Pending", link: "/pending", Icon: PendingIcon },
    { name: "To Do", link: "/todo", Icon: TodoIcon },
    { name: "Calender", link: "/calender", Icon: CalenderIcon },
    { name: "Profile", link: "/profile", Icon: ProfileIcon },
    { name: "e-Files", link: "/e-files", Icon: EFilesIcon },
    { name: "Shared Files", link: "/shared-files", Icon: SharedFilesIcon },
    { name: "ChanakyaAI", link: "/chanakya-ai", Icon: ChanakyaAiIcon },
];

const MenuIcon = ({ IconComponent, isActive }) => {
    return <IconComponent color={isActive ? "#183EC2" : "#808080"} />;
};

const MenuItem = ({ name, link, IconComponent, isActive, onClick }) => {
    return (
        <div className={`whitespace-nowrap px-3 py-2 text-sm inline-block ${isActive ? "bg-container text-primaryText border-b-[3px] border-solid border-divider" : "text-primaryText"}`}>
            <NavLink to={link} onClick={onClick} className={`submenu-text flex gap-1.5 items-center`}>
                <MenuIcon IconComponent={IconComponent} isActive={isActive} />
                {name}
            </NavLink>
        </div>
    );
};

const Header = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("/");

    const { locale, switchLanguage } = useLocale();

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location.pathname]);

    return (
        <div className="sticky top-0 z-99 shadow-sm">
            <div className="bg-container py-2 px-4 flex items-center justify-between gap-4 h-[62px]">
                <div className="flex items-center gap-4">
                    <NavLink to="/">
                        <img src="/Header/StrategicERP.svg" alt="StrategicERP" className="w-full max-w-32" />
                    </NavLink>
                </div>

                <div>
                    <label htmlFor="search"></label>
                    <input type="search" name="search" id="search" placeholder="Search..." className="rounded-lg py-1 px-2 border border-solid border-divider text-sm min-w-72 w-full outline-none" />
                </div>

                <div className="md:flex hidden items-center gap-2.5">
                    <Icon src="/Header/Calculator_Icon.svg" alt="Calculator" />
                    <Icon src="/Header/New_Window_Icon.svg" alt="Open a new window" />
                    <Icon src="/Header/Video_Icon.svg" alt="Video" />
                    <Icon src="/Header/Maximum_Icon.svg" alt="Full Screen" />

                    <select className="bg-app-bg border border-solid border-divider text-primary p-[3px] rounded text-sm" value={locale} onChange={(e) => switchLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="sp">Spanish</option>
                    </select>

                    <div className="flex items-center gap-2 bg-app-bg border border-solid border-divider rounded-md p-1">
                        <img src="/Header/StrategicERP_Version.gif" alt="StrategicERP Version" className="w-[52px]" />
                    </div>
                    <IoMenuOutline className="text-3xl bg-white border border-solid border-divider rounded-md p-0.5 text-primary" />

                    <ThemeSwitcher />
                </div>
            </div>

            {location?.pathname == "/" ?
                <div className="submenus hide-scrollbar w-full flex flex-wrap justify-start gap-y-2 items-center bg-white px-2">
                    {subMenus.map(({ name, link, Icon: IconComponent }) => (
                        <MenuItem
                            key={link}
                            name={name}
                            link={link}
                            IconComponent={IconComponent}
                            isActive={activeMenu === link}
                            onClick={() => setActiveMenu(link)}
                        />
                    ))}
                    <p className="text-sm text-right block ml-auto text-primaryText">Good Evening!!! ERP Admin</p>
                </div>
                : null}
        </div>
    );
};

export default Header;
