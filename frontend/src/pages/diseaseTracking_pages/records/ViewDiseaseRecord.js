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

export default function ViewDiseaseRecord(){
    /*const [DiseaseRecords, setDiseaseRecord] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();*/

    const breadcrumbItems = [

        { name: 'Finance', href: '/finances' },
        { name: 'Transactions', href: '/finances/transactions' },
        { name: 'View Transaction Details', href: '/finances/transactions/viewTransactionDetails' },
    ];
/*
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/diseases/${id}`)
            .then((response) => {
                setDiseaseRecord(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);*/

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

                        <div className="px-8 py-8">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Plant Disease Details</h3>
                            </div>
                           {/* {loading ? (
                                <LoadingAnimation/>
                            ) :
                                <div className='flex flex-col border-sky-400 rounded-xl w-fit p-4'>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Disease Name</span>
                                        <span>{DiseaseRecords.disease_name}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Crop Type</span>
                                        <span>{DiseaseRecords.crop}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Date</span>
                                        <span>{DiseaseRecords.date}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Location</span>
                                        <span>{DiseaseRecords.location}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Severity</span>
                                        <span>{DiseaseRecords.severity}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Treatment</span>
                                        <span>{DiseaseRecords.treatment}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Status</span>
                                        <span>{DiseaseRecords.status}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Created Time</span>
                                        <span>{new Date(DiseaseRecords.createdAt).toString()}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Updated At</span>
                                        <span>{new Date(DiseaseRecords.updatedAt).toString()}</span>
                                    </div>

                                </div>

                            }*/}

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}