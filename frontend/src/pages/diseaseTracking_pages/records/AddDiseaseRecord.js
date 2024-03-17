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


   /* const handleDiseaseChange = (e) => {
        const selectedDisease = e.target.value;
        setDiseaseName(selectedDisease);
        // Set treatment based on selected disease
        if (selectedDisease === "Anthracnose") {
            setTreatment("Daconil Chlorothalonil");
        }else if(selectedDisease === "Maitas and Leaf Curling disease"){
            setTreatment("Mitsu Abamectin");
        }else if(selectedDisease === "Fungal Disease"){
            setTreatment("Oasis Thiram");
        }else if(selectedDisease === "Plesippa"){
            setTreatment("Marshal 20 SC");
        }
         else {
            setTreatment(""); // Reset treatment if disease changes
        }
    };*/

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
