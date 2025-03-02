import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormsRegistry from "../../../../config/FormsRegistry";
import { formatName, toKebabCase } from "../../../../utils/StringManipulation";

const Sidebar = ({ currentModule }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [openModule, setOpenModule] = useState(currentModule);

    useEffect(() => {
        const pathSegments = location.pathname.split("/");
        const detectedModule = pathSegments[1];

        const matchedModule = Object.keys(FormsRegistry).find(
            (mod) => toKebabCase(mod) === detectedModule
        );

        if (matchedModule) {
            setOpenModule(matchedModule);
        }
    }, [location.pathname]);

    const handleModuleClick = (moduleName) => {
        const moduleUrl = toKebabCase(moduleName);
        setOpenModule((prev) => (prev === moduleName ? null : moduleName));

        if (openModule !== moduleName) {
            navigate(`/${moduleUrl}`);
        }
    };

    return (
        <div className="w-52 h-[92vh] bg-white text-white p-2 border-r border-solid border-gray-400 hide-submenus">
            {Object.keys(FormsRegistry).map((moduleName) => {
                const moduleUrl = toKebabCase(moduleName);
                return (
                    <div key={moduleName}>
                        <button
                            className={`w-full text-left cursor-pointer text-[13px] font-bold py-2 px-3 my-1 rounded ${openModule === moduleName ? "bg-blue-500" : "bg-blue-600"
                                } hover:bg-blue-500`}
                            onClick={() => handleModuleClick(moduleName)}
                        >
                            {formatName(moduleName)}
                        </button>
                        {openModule === moduleName && (
                            <div className="rounded mt-2 mb-4 text-xs cursor-pointer">
                                {Object.keys(FormsRegistry[moduleName]).map((formName) => {
                                    const formUrl = toKebabCase(formName);
                                    return (
                                        <Link
                                            key={formName}
                                            to={`/${moduleUrl}/${formUrl}`}
                                            className="block bg-[#91e6f7] hover:bg-gray-200 text-black py-2 px-3 mb-1.5 rounded"
                                        >
                                            {formatName(formName)}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
