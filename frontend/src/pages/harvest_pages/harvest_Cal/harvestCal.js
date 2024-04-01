import React from "react";
import {Link} from 'react-router-dom'

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import HarvestNavigation from "../../../components/harvest/harvestNavigation";
import HarvestList from "../../../components/harvest/RecordList";
import HarvestCalculator from "../../../components/harvest/HarvestEstCal";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";



export default function harvestCal() {
    return (
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <HarvestNavigation/>


                        <div>
                            <HarvestCalculator/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}