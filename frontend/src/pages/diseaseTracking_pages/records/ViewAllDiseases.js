import React, {useState, useEffect } from 'react';
import axios from "axios";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";
import BackButton from "../../../components/utility/BackButton";
import {MdOutlineAddBox} from "react-icons/md";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";
import {Link} from "react-router-dom";
import DiseaseList from "../../../components/diseaseManagement_home/DiseaseList";

export default function ViewAllDiseases(){

    const [diseases, setDisease] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/diseases')
            .then((response) => {
                setDisease(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    },);
/*
    const breadcrumbItems = [
        { name: 'Records', href: '/diseases/records' },
    ];*/

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
                            {/*<Breadcrumb items={breadcrumbItems}/>*/}
                        </div>
                    </div>
                    <div className= 'p-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl my-8'>Disease List</h1>
                            <Link to='/diseases/records/addDisease'>
                                <MdOutlineAddBox className='text-sky-700 text-4xl'/>
                            </Link>
                        </div>

                        {loading ? (
                            <LoadingAnimation/>
                        ) :
                            <DiseaseList diseases={diseases}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}