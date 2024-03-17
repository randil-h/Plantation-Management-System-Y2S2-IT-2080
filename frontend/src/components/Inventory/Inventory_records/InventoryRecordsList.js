import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import {InformationCircleIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";


const InventoryRecordList = () => {
    const [inventoryInputs, setInventoryInputs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/inventoryinputs`)
            .then((response) => {
                setInventoryInputs(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/inventoryinputs/${recordId}`)
            .then(() => {
                setInventoryInputs(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };
    const filteredRecords = inventoryInputs.filter((record) =>
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
                    <h1 className=" text-lg font-semibold text-left">Inventory Records</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored Inventory Records
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
                    <a href="/inventory/inventoryrecords/addinventoryrecordspage"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new inventory record <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div>
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-48 mr-5"
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
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Record ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Storage Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Expire Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
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
                        <tr
                            key={index}
                            className={`divide-y ${
                                record.type === 'Planting' ? 'border-l-4 border-green-400' : record.type === 'Equipments' ? 'border-l-4 border-red-400' : 'border-l-4 border-blue-400'}`}
                        >
                            <td></td>
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <td className="px-6 py-4">
                                {record.type}
                            </td>
                            <td className="px-6 py-4">
                                {record.record_ID}
                            </td>
                            <td className="px-6 py-4">
                                {record.record_name}
                            </td>
                            <td className="px-6 py-4">
                                {record.storage}
                            </td>
                            <td className="px-6 py-4">
                                {record.quantity}
                            </td>
                            <td className="px-6 py-4">
                                {record.expire_date ? new Date(record.expire_date).toISOString().split('T')[0] : "N/A"}
                            </td>
                            <td className="px-6 py-4">
                                {record.description}
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`/inventory/inventoryrecords/editinventorypage/${record._id}`}
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
export default InventoryRecordList;