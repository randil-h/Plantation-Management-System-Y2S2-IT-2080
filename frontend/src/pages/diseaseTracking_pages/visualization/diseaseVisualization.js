import React from "react";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import GenerateGraphs from "../../../components/diseaseManagement_home/visualization/GenerateGraphs";





export default function DiseaseVisualization() {

    const breadcrumbItems = [
        { name: 'Visualization', href: '/disease/visualization' },

    ];

    return (
        <div className="">
            <div className=" sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <DiseaseTrackingNavigation/>
                        <div className="flex flex-row">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div>
                            <GenerateGraphs/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
