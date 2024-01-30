import React from "react";

import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Statbar from "../components/dashboard_home/Statbar";

export default function Dashboard() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar />
                </div>

                {/* Main Content Area */}
                <div className="flex ml-72  w-screen">
                <Statbar/>
                </div>
            </div>
        </div>
    );
}
