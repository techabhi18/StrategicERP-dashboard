import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const ModuleLayout = () => {
    const { module } = useParams();

    return (
        <div className="flex h-full">
            <Sidebar currentModule={module} />
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default ModuleLayout;
