import React from "react";
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import CropNavigation from "../../components/cropManagement_home/CropNavigation";
import CropSummary from "../../components/cropManagement_home/CropSummary";

export default function CropManagement() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>
                    <div className = "w-full col-span-5 flex flex-col ">
                        <CropNavigation/>
                        <CropSummary/>
                    </div>
                </div>
            </div>
        </div>
    );
};