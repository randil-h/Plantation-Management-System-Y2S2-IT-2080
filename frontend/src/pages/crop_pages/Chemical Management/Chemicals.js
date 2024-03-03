import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import AddChemical from "../../../components/cropManagement_home/AddChemical";
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";


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
                    </div>
                    <div className="fixed top-36 right-5 z-10">
                        <a href="/crop/chemicals/add"
                           className="inline-flex items-center justify-center rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                            Record chemical addition <span aria-hidden="true" className="ml-1">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
