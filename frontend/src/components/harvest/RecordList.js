import React, { useEffect, useState } from "react";
import axios from "axios";
import { PencilSquareIcon, TrashIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import {enqueueSnackbar} from "notistack";

export default function HarvestList() {
    const [harvestRecords, setHarvestRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/record')
            .then((response) => {
                setHarvestRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching harvest records:', error);
                setLoading(false);
            });
    }, []);

    const handleDeleteHarvest = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this disease record?");
        if (confirmDelete) {
            setLoading(true);
            axios
                .delete(`http://localhost:5555/record/${id}`)
                .then(() => {
                    // Update state after successful deletion
                    setHarvestRecords(prevRecords => prevRecords.filter(record => record._id !== id));
                    setLoading(false);
                    enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className="text-lg font-semibold text-left">Harvest Records</h1>
                </div>
                <div>
                    <a href="/harvest/records/addRecord"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add New Harvest Record <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500">
                <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Crop Type</th>
                    <th scope="col" className="px-6 py-3">Age of Yield (months)</th>
                    <th scope="col" className="px-6 py-3">Way Picked</th>
                    <th scope="col" className="px-6 py-3">Quantity (kg)</th>
                    <th scope="col" className="px-6 py-3">Remarks</th>
                    <th scope="col" className="py-3"><span className="sr-only">Info</span></th>
                    <th scope="col" className="py-3"><span className="sr-only">Edit</span></th>
                    <th scope="col" className="py-3"><span className="sr-only">Delete</span></th>
                </tr>
                </thead>
                <tbody className="border-b border-green-400">
                {harvestRecords.map((record, index) => (
                    <tr key={index} className="border border-gray-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {record.cropType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {record.ageOfYield}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {record.wayPicked}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {record.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {record.remarks}
                        </td>
                        <td className="py-4 text-right">
                            <a href="/harvests/records/viewHarvest"
                               className="font-medium text-blue-600 hover:underline">
                                <InformationCircleIcon
                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className="py-4 text-right">
                            <a href={`/harvest/records/updateRecord/${record._id}`}
                               className="font-medium text-blue-600 hover:underline">
                                <PencilSquareIcon
                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className="py-4 text-right">
                            <button className="flex items-center" onClick={() => handleDeleteHarvest(record._id)}>
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
    );
}
