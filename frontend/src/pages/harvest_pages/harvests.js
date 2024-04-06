import React from "react";
import {Link} from 'react-router-dom'

import Navbar from "../../components/utility/Navbar";
import SideBar from "../../components/SideBar";

import HarvestNavigation from "../../components/harvest/harvestNavigation";
import HarvestCalculator from "../../components/harvest/HarvestEstCal";
import LastMonthHarvestRecords from "../../components/harvest/HarvestHome";
import BackButton from "../../components/utility/BackButton";
import Breadcrumb from "../../components/utility/Breadcrumbs";


export default function harvest() {
    const breadcrumbItems = [
        { name: 'Home', href: '/harvest/home' },


    ];
    return (
         <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
             <div className="">
                 <div className="grid sm:grid-cols-6 ">

                     <div className="col-span-1 sticky left-0 top-0">
                         <SideBar/>
                     </div>

                     <div className="w-full col-span-5 flex flex-col ">
                         <HarvestNavigation/>
                         <div className="flex flex-row ">
                             <BackButton/>
                             <Breadcrumb items={breadcrumbItems}/>
                         </div>
                         <div>
                             <LastMonthHarvestRecords/>
                         </div>
                     </div>

                     <div>
                         <LastMonthHarvestRecords/>
                     </div>
                 </div>

             </div>

         </div>
    );
}