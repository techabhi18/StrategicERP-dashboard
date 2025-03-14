import React, { Fragment, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const menus = [
    { icon: "/Sidebar/home_icon.svg", path: "/", active: true },
    { name: "Admin", icon: "/Sidebar/ERP-Admin.svg", path: "/erp-admin", active: false },
    { name: "Process", icon: "/Sidebar/Process-Management.svg", path: "/process-management", active: false },
    { name: "Land", icon: "/Sidebar/Land-Management.svg", path: "/land-management", active: false },
    { name: "SRA", icon: "/Sidebar/SRA-Management.svg", path: "/sra-management", active: false },
    { name: "Redevelop", icon: "/Sidebar/Redevelopment-Management.svg", path: "/redevelopment-management", active: false },
    { name: "Legal", icon: "/Sidebar/Legal-Management.svg", path: "/legal-management", active: false },
    { name: "Liaison", icon: "/Sidebar/Liaison-Management.svg", path: "/liaison-management", active: false },
    { name: "Projects", icon: "/Sidebar/Project-Engineering.svg", path: "/project-management", active: false },
    { name: "Sites", icon: "/Sidebar/Sites-Management.svg", path: "/sites-management", active: false },
    { name: "Contractors", icon: "/Sidebar/Contractors-Management.svg", path: "/contractors-management", active: false }
];

const Sidebar = () => {
    const location = useLocation();
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <div
            className='relative flex h-screen'
            onMouseLeave={() => setHoveredMenu(null)}
        >
            <div className='border-b border-solid border-[#3c68dd] bg-[#3c68dd] text-white'>
                {menus?.map((menu, i) => {
                    const isActive =
                        menu.path === "/" ? location.pathname === "/"
                            : location.pathname.split("/").includes(menu.path.split("/").pop());

                    return (
                        <NavLink
                            key={i}
                            to={menu?.path}
                            className={`cursor-pointer bg-[#183ec1] border-b-2 border-solid border-[#3c68dd] py-1.5 px-3 flex flex-col text-center items-center justify-center w-full 
                            ${isActive ? 'bg-[#3c68dd]' : ''} ${menu?.path === '/' ? 'h-[62px] sticky top-0' : ''}`}
                            onMouseEnter={() => setHoveredMenu(menu.name)}
                        >
                            <img src={menu?.icon} alt={menu?.name} />
                            {menu?.name && <p className='mt-0.5 text-[13px]'>{menu?.name}</p>}
                        </NavLink>
                    )
                })}
            </div>

            {hoveredMenu && (
                <div
                    className='fixed top-[62px] left-[92px] z-10 w-64 h-full bg-white text-black'
                    onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                >
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold bg-[#eceffb] px-4 py-5'>{hoveredMenu}</p>
                        {hoveredMenu == "Admin" ?
                            <Fragment>
                                <div className='p-2'>
                                    <div className='border-b border-solid border-gray-400 pb-1 font-bold text-[16px] text-[#162d58]'>Statutory Setup</div>
                                    <div onClick={() => setHoveredMenu(null)}>
                                        <NavLink to='/erp-admin/company-master' className='sidebar-menu-item'>Company Master</NavLink>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='border-b border-solid border-gray-400 pb-1 font-bold text-[16px] text-[#162d58]'>Finance Setup</div>
                                    <div onClick={() => setHoveredMenu(null)}>
                                        <NavLink to='/erp-admin/legal-entity-master' className='sidebar-menu-item'>Legal Entity Master</NavLink>
                                    </div>
                                    <div onClick={() => setHoveredMenu(null)}>
                                        <NavLink to='/erp-admin/project-master' className='sidebar-menu-item'>Project Master</NavLink>
                                    </div>
                                    <div onClick={() => setHoveredMenu(null)}>
                                        <NavLink to='/erp-admin/sub-project-master' className='sidebar-menu-item'>Sub Project Master</NavLink>
                                    </div>
                                    <div onClick={() => setHoveredMenu(null)}>
                                        <NavLink to='/erp-admin/item-group-master' className='sidebar-menu-item'>Item Group Master</NavLink>
                                    </div>
                                </div>
                            </Fragment> : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
