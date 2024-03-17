import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {InformationCircleIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";

const EqMaintain = () => {
    const [inventoryRecords, setInventoryRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/inventoryrecords`)
            .then((response) => {
                setInventoryRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        const confirmed = window.confirm("Are you sure you want to delete this record?");
        if (confirmed) {
            axios
                .delete(`http://localhost:5555/inventoryrecords/${recordId}`)
                .then(() => {
                    setInventoryRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const filteredRecords = inventoryRecords.filter((record) =>
        Object.values(record).some((value) => {
            if (typeof value === 'string' || typeof value === 'number') {
                return String(value).toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        })
    );

    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Maintenances Records</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored Maintenances Records
                        within the system for thorough insights.</p>
                    <div className=" py-4">
                        <input
                            type="text"
                            placeholder="Search all maintenances records..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded-full px-3 py-1 w-full"
                        />
                    </div>
                </div>
                <div>
                    <a href="/inventory/maintenancelog/addeqmainpage"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new maintenances record <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div>
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-24 right-10 mt-36 mr-5"
                >
                    Print
                </button>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
                    <thead
                        className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                    <tr className=" ">
                        <th></th>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Equipment/Machine
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Eq / Machine ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date referred to
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Received date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Referred location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comment
                        </th>
                        <th scope="col" className=" py-3">
                            <span className="sr-only">Info</span>
                        </th>
                        <th scope="col" className=" py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className=" py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="border-b border-green-400">

                    {filteredRecords.map((record, index) => (
                        <tr key={index}>
                            <td></td>
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <td className="px-6 py-4">
                                {record.Eq_machine_main}
                            </td>
                            <td className="px-6 py-4">
                                {record.Eq_id_main}
                            </td>
                            <td className="px-6 py-4">
                                {record.date_referred.split("T")[0]}
                            </td>
                            <td className="px-6 py-4">
                                {record.date_received.split("T")[0]}
                            </td>
                            <td className="px-6 py-4">
                                {record.ref_loc}
                            </td>
                            <td className="px-6 py-4">
                                {record.comment}
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`../editeqmainpage/${record._id}`}
                                      className="font-medium text-blue-600 hover:underline">
                                    <PencilSquareIcon
                                        className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                        aria-hidden="true"/>
                                </Link>
                            </td>
                            <td className=" ">
                                <button
                                    className="flex items-center"
                                    onClick={() => handleDelete(record._id)}
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
        </div>
    );
};
export default EqMaintain;
