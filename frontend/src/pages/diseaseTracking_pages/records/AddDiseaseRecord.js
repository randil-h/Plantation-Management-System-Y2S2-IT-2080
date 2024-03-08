import React, {useState} from "react";
import BackButton from "../../../components/utility/BackButton";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import DiseaseTrackingNavigation from "../../../components/diseaseManagement_home/DiseaseTrackingNavigation";


export default function AddDiseaseRecord(){
/*
    const [diseaseName, setName] = useState('');
    const [cropType, setType] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [treatment, setTreatment] = useState('');
    const [severity, setSeverity] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveDisease = () => {
       const data = {
           diseaseName,
           cropType,
           date,
           location,
           treatment,
           severity,
           status
       };
       setLoading(true);
       axios
           .post('http://localhost:5555/diseases', data)
           .then(() => {
               setLoading(false);
               navigate('/');
           })
           .catch((error) => {
               setLoading(false);
               alert('An error happened. Please check console');
               console.log(error);
           })
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
                        <div className= 'items-center justify-center ml-96'>
                            <form method = "post" className="max-w-md ml-1/3 mt-16 p-4 bg-gray-200 rounded-lg items-center justify-center flex flex-col">
                                <legend className= 'text-x font-bold mb-2 '>Add New Disease Record</legend>
                                <label className='text-md mr-4 text-gray-500 mb-1'>Disease Name</label>
                                <select
                                    /*value={diseaseName}
                                    onChange={(e) => setName(e.target.value)}*/
                                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                                >
                                     <option value= "Wilt ">Wilt</option>
                                     <option value = "Powdery Mildew">Powdery Mildew</option>
                                     <option value = "Brown Spot">Brown Spot</option>
                                </select>
                                <label className='text-md mr-4 text-gray-500 mb-1'>Crop Type</label>
                                <select
                                   /* value={cropType}
                                    onChange={(e) => setType(e.target.value)}*/
                                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                                >
                                    <option value="Papaya">Papaya</option>
                                    <option value="Apple Guava">Apple Guava</option>
                                    <option value="Coconut">Coconut</option>
                                </select>
                                <label className='text-md mr-4 text-gray-500 mb-1'>Date</label>
                                <input
                                    type='date'
                                    required
                                   /* value={date}
                                    onChange={(e) => setDate(e.target.value)}*/
                                    className='border-2 rounded-md mb-5 border-gray-500 px-4 py-2 w-full'
                                />
                                <label className='text-md mr-4 mb-1 text-gray-500'>Location</label>
                                <select
                                    /*value={location}
                                    onChange={(e) => setLocation(e.target.value)}*/
                                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                                >
                                    <option value="Field A">Field A</option>
                                    <option value="Field B">Field B</option>
                                    <option value="Field C">Field C</option>
                                </select>
                                <label className='text-md mr-4 mb-1 text-gray-500'>Treatment</label>
                                <input
                                    type='text'
                                    required
                                    /*value={treatment}
                                    onChange={(e) => setTreatment(e.target.value)}*/
                                    className='border-2 mb-4 rounded-md border-gray-500 px-4 py-2 w-full'
                                />
                                <label className='text-md mb-1 mr-4 text-gray-500'>Severity</label>
                                <input
                                    type='text'
                                    required
                                   /* value={severity}
                                    onChange={(e) => setSeverity(e.target.value)}*/
                                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                                />
                                <label className='text-md mr-4 mb-1 text-gray-500'>Status</label>
                                <select
                                    /*value={status}
                                    onChange={(e) => setStatus(e.target.value)}*/
                                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                                >
                                    <option value="Not Treated">Not Treated</option>
                                    <option value="Under Treatment">Under Treatment</option>
                                    <option value="Recovered">Recovered</option>
                                </select>
                                <button className= 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
                                    Add
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}
