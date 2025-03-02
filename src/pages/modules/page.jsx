import React from "react";
import { useParams, Link } from "react-router-dom";
import FormsRegistry from "../../config/FormsRegistry";
import { findCaseInsensitiveKey, toKebabCase } from "../../utils/StringManipulation";

const DynamicModule = () => {
    const { module } = useParams();

    const moduleKey = findCaseInsensitiveKey(FormsRegistry, module);
    const moduleObj = moduleKey ? FormsRegistry[moduleKey] : null;

    if (!moduleObj) {
        return <div>Module not found.</div>;
    }

    const forms = Object.keys(moduleObj);

    return (
        <div className="bg-white flex items-center justify-center hide-submenus">
            <img src="/modules/erpadmin.jpg" alt="StrategicERP Admin" className="max-w-[770px]" />
        </div>
    );
};

export default DynamicModule;
