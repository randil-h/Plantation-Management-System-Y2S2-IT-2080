import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import AddSeeds from "../../components/cropManagement_home/AddSeeds";
import CropNavigation from "../../components/cropManagement_home/CropNavigation";
import AddChemical from "../../components/cropManagement_home/AddChemical";


export default function seedsPlanting() {
    return (
        <div className="flex-col">
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