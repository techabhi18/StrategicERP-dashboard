import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-auto hide-scrollbar">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="flex-1 overflow-auto hide-scrollbar">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
