import SideBar from "../../../components/SideBar";
import React from "react";
import Navbar from "../../../components/utility/Navbar";
import EditRotation from "../../../components/cropManagement_home/RotationComponents/EditRotation"
export default function UpdateRotation() {
    return (
        <div className="Equipment">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar/>
                </div>
            </div>

            <EditRotation/>
        </div>
    );
}