import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";
import ViewDisease from "../../../components/diseaseManagement_home/ViewDisease";

export default function ViewDiseaseRecord(){


    const breadcrumbItems = [
        { name: 'Records', href: '/disease/records' },
        { name: 'View Record', href: '/diseases/records/viewDisease/:id'}

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
                            <ViewDisease/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}