import React from "react";
import {Link} from 'react-router-dom'

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import HarvestNavigation from "../../../components/harvest/harvestNavigation";
import AddRecord from "../../../components/harvest/AddRecord";


export default function harvestRec() {
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

                    <div className="w-full col-span-5 flex flex-col ">
                        <HarvestNavigation/>
                    </div>
                    <div className="absolute left-1/4">
                        <AddRecord/>
                    </div>
                </div>

            </div>

        </div>
    );
}