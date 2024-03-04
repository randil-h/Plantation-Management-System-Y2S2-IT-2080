import React from "react"
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";
import PlantingList from "../../../components/cropManagement_home/PlantingList";

export default function ViewPlantingList() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-7">
                    <div className="col-span-1 sticky left-0 top-0 z-20">
                        <SideBar/>
                    </div>
                    <div className="z-20">
                        <CropNavigation/>
                    </div>
                    <div>
                        <PlantingList/>
                    </div>
                </div>
            </div>
        </div>
    )
}