import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";

export default function DeleteDiseaseRecord(){
  /*  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const handleDeleteDisease = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/diseases/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/diseases/records');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened');
                console.log(error);
            });
    };*/

    const breadcrumbItems = [
        { name: 'Records', href: '/diseases/records' },
        { name: 'Delete Disease Record', href: '/diseases/records/deleteDisease' },
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
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div className= 'flex flex-col items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                            <h3 className= 'text-2xl'> Are you Sure you want to delete this record?</h3>
                            {/*<button
                                className= 'p-4 bg-red-600 text-white m-8 w-full'
                                onClick={handleDeleteDisease}
                            >
                            Yes
                            </button>*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}