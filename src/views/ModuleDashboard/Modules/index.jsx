import React from 'react'
import { NavLink } from 'react-router';

const Modules = () => {
    const modulesData = [
        {
            name: "ERP Admin",
            "color-gradient": "linear-gradient(60deg,#ef5350,#e53935)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Process Management",
            "color-gradient": "linear-gradient(60deg, rgb(171, 71, 188), rgb(142, 36, 170))",
            img: "/modules/process-management.png",
        },
        {
            name: "Land Management",
            "color-gradient": "linear-gradient(60deg,#ffa726,#fb8c00)",
            img: "/modules/land-management.png",
        },
        {
            name: "SRA Management",
            "color-gradient": "linear-gradient(60deg, #66bb6a, #43a047)",
            img: "/modules/sra-management.png",
        },
        {
            name: "Redevelopment Management",
            "color-gradient": "linear-gradient(60deg, rgb(236, 64, 122), rgb(216, 27, 96))",
            img: "/modules/redevelopment-management.png",
        },
        {
            name: "Legal Management",
            "color-gradient": "linear-gradient(60deg, #26c6da, #00acc1)",
            img: "/modules/legal-management.png",
        },
        {
            name: "Liaison Management",
            "color-gradient": "linear-gradient(45deg, #303f9f, #7b1fa2)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Project Engineering",
            "color-gradient": "linear-gradient(45deg, #0288d1, #26c6da)",
            img: "/modules/project-engineering.png",
        },
        {
            name: "Legal Management",
            "color-gradient": "linear-gradient(60deg, #26c6da, #00acc1)",
            img: "/modules/legal-management.png",
        },
        {
            name: "Liaison Management",
            "color-gradient": "linear-gradient(45deg, #303f9f, #7b1fa2)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Project Engineering",
            "color-gradient": "linear-gradient(45deg, #0288d1, #26c6da)",
            img: "/modules/project-engineering.png",
        }, {
            name: "Legal Management",
            "color-gradient": "linear-gradient(60deg, #26c6da, #00acc1)",
            img: "/modules/legal-management.png",
        },
        {
            name: "Liaison Management",
            "color-gradient": "linear-gradient(45deg, #303f9f, #7b1fa2)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Project Engineering",
            "color-gradient": "linear-gradient(45deg, #0288d1, #26c6da)",
            img: "/modules/project-engineering.png",
        }, {
            name: "Legal Management",
            "color-gradient": "linear-gradient(60deg, #26c6da, #00acc1)",
            img: "/modules/legal-management.png",
        },
        {
            name: "Liaison Management",
            "color-gradient": "linear-gradient(45deg, #303f9f, #7b1fa2)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Project Engineering",
            "color-gradient": "linear-gradient(45deg, #0288d1, #26c6da)",
            img: "/modules/project-engineering.png",
        }, {
            name: "Legal Management",
            "color-gradient": "linear-gradient(60deg, #26c6da, #00acc1)",
            img: "/modules/legal-management.png",
        },
        {
            name: "Liaison Management",
            "color-gradient": "linear-gradient(45deg, #303f9f, #7b1fa2)",
            img: "/modules/erp-admin.png",
        },
        {
            name: "Project Engineering",
            "color-gradient": "linear-gradient(45deg, #0288d1, #26c6da)",
            img: "/modules/project-engineering.png",
        },
    ];

    return (
        <div className='bg-white p-8 rounded-lg gap-6 flex justify-center flex-wrap md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-[80vh] overflow-auto hide-scrollbar'>
            {modulesData?.map((module, index) => {
                return (
                    <NavLink to="/erpadmin" key={index} className='flex flex-col items-center justify-start cursor-pointer'>
                        <div className={`w-25 h-25 flex items-center justify-center rounded-lg p-4`} style={{ background: module["color-gradient"] }}>
                            <img src={module.img} alt={module.name} className='' />
                        </div>
                        <h1 className='text-sm pt-2 w-fit max-w-26 text-center text-[#333333]'>{module.name}</h1>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Modules
