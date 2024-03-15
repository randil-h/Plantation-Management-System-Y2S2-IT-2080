import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import Rotation from "../../../components/cropManagement_home/recordRotation"
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";

export default function AddRotationPage() {
    return (
        <div className="Equipment">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                <div className="fixed h-full">
                    <SideBar/>
                </div>
            </div>
            <Rotation/>
        </div>
    );
}