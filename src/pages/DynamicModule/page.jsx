import React, { useState } from "react";

import Workflow from "../../components/DynamicModule/Workflow";
import Dashboard from "../../components/DynamicModule/Dashboard";
import SelfTraining from "../../components/DynamicModule/SelfTraining";

const moduleComponents = {
    workflow: Workflow,
    dashboard: Dashboard,
    "self-training": SelfTraining,
};

const tabs = [
    { key: "workflow", label: "Workflow", props: { img: "/modules/erpadmin.jpg" } },
    { key: "dashboard", label: "Dashboard", props: { img: "/modules/cooluser.png" } },
    { key: "self-training", label: "Self Training", props: { videos: [{ id: 1, title: "Training Video", thumbnail: "/images/video.png" }] } },
];

const DynamicModule = () => {
    const [selectedModule, setSelectedModule] = useState("workflow");
    const SelectedModule = moduleComponents[selectedModule];
    const selectedProps = tabs.find(tab => tab.key === selectedModule)?.props || {};

    return (
        <div className="flex">
            <div className="bg-[#b1eeff] w-7 flex flex-col items-center py-10 space-y-6 gap-14 overflow-hidden fixed left-[91px] top-[62px] h-full">
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        className={`cursor-pointer text-xs w-full whitespace-nowrap font-semibold p-1 rotate-90 origin-center ${selectedModule === tab.key ? "rounded-md text-[#6259ca]" : ""}`}
                        onClick={() => setSelectedModule(tab.key)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto w-full">
                <SelectedModule {...selectedProps} />
            </div>
        </div>
    );
};

export default DynamicModule;
