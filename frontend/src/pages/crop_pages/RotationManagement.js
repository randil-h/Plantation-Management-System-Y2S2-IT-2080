import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import Rotation from "../../components/cropManagement_home/recordRotation"
import CropNavigation from "../../components/cropManagement_home/CropNavigation";

export default function seedsPlanting() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                    {/* Fixed Sidebar */}
                    <div className="grid sm:grid-cols-6 ">
                        <div className="col-span-1 sticky left-0 top-0">
                            <SideBar/>
                        </div>
                    <div>
                        <CropNavigation/>
                        <Rotation/>
                    </div>
                </div>

            </div>

        </div>
    );
}
