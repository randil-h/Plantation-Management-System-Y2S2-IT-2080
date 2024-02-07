import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import Rotation from "../../components/cropManagement_home/recordRotation"

export default function seedsPlanting() {
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

            </div>
            <div className="ml-80 mt-auto pt-10">
                <Rotation/>
            </div>
        </div>
    );
}
