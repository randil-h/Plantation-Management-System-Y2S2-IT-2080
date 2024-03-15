import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import AddCropInputForm from "../../../components/cropManagement_home/AddCropInputForm";
export default function AddCropInput() {
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
            <AddCropInputForm/>
        </div>
    );
}