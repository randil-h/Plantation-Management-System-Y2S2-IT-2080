import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";
import DiseaseList from "../../../components/diseaseManagement_home/DiseaseList";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";

export default function ViewAllDiseases() {

    /*const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/diseases')
            .then((response) => {
                setDiseaseRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);*/

    const breadcrumbItems = [
        { name: 'Records', href: '/disease/records' },

    ];

    return (
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <DiseaseTrackingNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
{/*
                        {loading ? (
                                <LoadingAnimation/>
                            ) :
                            <DiseaseList DiseaseRecords={DiseaseRecords}/>
                        }*/}


                    </div>
                </div>
            </div>
        </div>
    );
}
