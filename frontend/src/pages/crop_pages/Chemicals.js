import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import AddChemical from "../../components/cropManagement_home/AddChemical";
import CropNavigation from "../../components/cropManagement_home/CropNavigation";


export default function seedsPlanting() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>
                    <div>
                        <CropNavigation/>
                        <div className="absolute left-1/4">
                            <AddChemical/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
