import React, {useState} from "react";
import BackButton from "../../../components/utility/BackButton";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import AddDisease from "../../../components/diseaseManagement_home/AddDisease";


export default function AddDiseaseRecord(){

    const breadcrumbItems = [
        { name: 'Records', href: '/diseases/records/addDisease' },
        { name: 'New Disease Record', href: '/diseases/records/addDisease' },
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
                            <AddDisease/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
