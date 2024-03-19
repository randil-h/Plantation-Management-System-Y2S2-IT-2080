import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import DiseaseTrackingNavigation from "../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import DiseaseHome from "../../components/diseaseManagement_home/home/DiseaseHome";
import {SnackbarProvider} from "notistack";
import BackButton from "../../components/utility/BackButton";
import Breadcrumb from "../../components/utility/Breadcrumbs";


export default function DiseaseTracking() {

    const breadcrumbItems = [
        { name: 'Home', href: '/disease/home' },

    ];

    return (
        <SnackbarProvider
            style={{
                backgroundColor: 'red',
            }}
        >
        <div className="">
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
                        <DiseaseTrackingNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                    </div>
                    <div>
                        <DiseaseHome/>
                    </div>
                </div>
            </div>

        </div>
        </SnackbarProvider>
    );
}
