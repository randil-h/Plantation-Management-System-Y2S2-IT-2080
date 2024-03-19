import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon, MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {enqueueSnackbar, useSnackbar} from "notistack";




export default function DiseaseList() {

     const [DiseaseRecords, setDiseaseRecords] = useState([]);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     const {id} = useParams();
     const [searchQuery, setSearchQuery] = useState('');
     const [diseaseChart, setDiseaseChart] = useState({});
     const { enqueueSnackbar } = useSnackbar();

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
   }, []);

    const handleDeleteDisease = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this disease record?");
        if (confirmDelete) {
            setLoading(true);
            axios
                .delete(`http://localhost:5555/diseases/${id}`)
                .then(() => {
                    // Update state after successful deletion
                    setDiseaseRecords(prevRecords => prevRecords.filter(record => record._id !== id));
                    setLoading(false);
                    enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        }
    };

    const filteredRecords = DiseaseRecords.filter((record) =>
        Object.values(record).some((value) => {
            if (typeof value === 'string' || typeof value === 'number') {
                // Convert value to string and check if it includes the search query
                return String(value).toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        })
    );

    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Disease Records</h1>
                    <div className=" py-4 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="text-gray-500 h-4 w-4"/>
                        </div>
                        <input
                            type="text"
                            placeholder="Search all records..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded-full px-3 py-1 w-full text-sm pl-10"
                            style={{paddingRight: "2.5rem"}}
                        />

                    </div>
                </div>

                <div>
                    <a href="/diseases/records/addDisease"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add New Disease Record <span aria-hidden="true">&rarr;</span>
                    </a>
                    &nbsp;

                    {/*<a href="/diseases/records/generateReport"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Generate Report
                    </a>*/}

                </div>


            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead
                    className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                <tr className=" ">
                    <th scope="col" className="px-6 py-3">Disease Name</th>
                    {/*<th scope="col" className="px-6 py-3"> Plant ID</th>*/}
                    <th scope="col" className="px-6 py-3">Crop Type</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Location</th>
                    <th scope="col" className="px-6 py-3">Severity</th>
                    <th scope="col" className="px-6 py-3">Treatment</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className=" py-3"><span className="sr-only">Info</span></th>
                    <th scope="col" className=" py-3"><span className="sr-only">Edit</span></th>
                    <th scope="col" className=" py-3"><span className="sr-only">Delete</span></th>
                </tr>
                </thead>

                <tbody className="border-b border-green-400">

                {filteredRecords.map((drecord, index) => (
                    <tr key={drecord._id} className='divide-y'>
                        <td className='px-6 py-4'>
                            {drecord.disease_name}
                        </td>
                        {/*<td className='px-6 py-4'>
                            {drecord.plant_id}
                        </td>*/}
                        <td className='px-6 py-4'>
                            {drecord.crop}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.date}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.location}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.severity}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.treatment}
                        </td>
                        <td className='px-6 py-4'>
                            {drecord.status}
                        </td>
                        <td className=" py-4 text-right">
                            <Link to={`/diseases/records/viewDisease/${drecord._id}`}>
                                <InformationCircleIcon
                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                    aria-hidden="true"/>
                            </Link>
                        </td>
                        <td className=" py-4 text-right">
                            <Link to={`/diseases/records/updateDisease/${drecord._id}`}>
                                <PencilSquareIcon
                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                    aria-hidden="true"/>
                            </Link>
                        </td>
                        <td className=" ">
                            <button
                                className="flex items-center"
                                onClick={() => handleDeleteDisease(drecord._id)}
                            >
                                <TrashIcon
                                    className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                    aria-hidden="true"/>
                            </button>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>
        </div>
    )
}
