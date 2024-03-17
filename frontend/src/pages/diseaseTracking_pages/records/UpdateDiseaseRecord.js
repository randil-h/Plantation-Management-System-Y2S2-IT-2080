import React, {useState, useEffect} from "react";
import BackButton from "../../../components/utility/BackButton";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import UpdateDisease from "../../../components/diseaseManagement_home/UpdateDisease";
import {SnackbarProvider} from "notistack";


export default function UpdateDiseaseRecord(){


    const breadcrumbItems = [
        { name: 'Records', href: '/diseases/records' },
        { name: 'Update Disease Record', href: '/diseases/records/updateDisease' },
    ];

    return(

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
                            <SnackbarProvider>
                                <UpdateDisease/>
                            </SnackbarProvider>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )

}
