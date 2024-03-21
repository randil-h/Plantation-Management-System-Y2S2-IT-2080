import React from "react";
import { Link } from 'react-router-dom'

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import HarvestNavigation from "../../../components/harvest/harvestNavigation";
import AddRecord from "../../../components/harvest/AddRecord";

import HarvestList from "../../../components/harvest/RecordList"
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseList from "../../../components/diseaseManagement_home/DiseaseList";

export default function HarvestRec() {

    const breadcrumbItems = [
        { name: 'Home', href: '/harvest/home' },
        { name: 'Records', href: '/harvest/harvestRecords'}

    ];

    return (
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar />
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <HarvestNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>

                        <div>
                            <HarvestList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
