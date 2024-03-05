import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import EqMaintain from "../Eq and Machine/EqMaintain";

const SeedList = () => {
    const [seedRecords, setAddSeedRecord] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/seedRecords`)
            .then((response) => {
                setAddSeedRecord(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/seedRecords/${recordId}`)
            .then(() => {
                setAddSeedRecord(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };
    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 absolute top-28 left-72 mt-10"
                />
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-28 left-1/3 mt-10"
                >
                    Search
                </button>
            </div>

            <Link to="../addseedspage">
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-28 right-10 mt-10 mr-32"
                >
                    Add
                </button>
            </Link>

            <button
                className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-28 right-10 mt-10 mr-14"
            >
                Print
            </button>

            <div className="container mx-auto p-8 ml-64 -mt-56 ">
                <table className="w-auto bg-white shadow-md rounded-md overflow-hidden -ml-1 -mt-96" style={{width: '600%'}}>
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border border-gray-400">No</th>
                        <th className="py-2 px-4 border border-gray-400">Seed Name</th>
                        <th className="py-2 px-4 border border-gray-400">Serial No</th>
                        <th className="py-2 px-4 border border-gray-400">Storage Location</th>
                        <th className="py-2 px-4 border border-gray-400">Stock Amount</th>
                        <th className="py-2 px-4 border border-gray-400">Expired Date</th>
                        <th className="py-2 px-4 border border-gray-400">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {seedRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                        <td className="py-2 px-4 border border-gray-400">{index + 1}</td>
                        <td className="py-2 px-4 border border-gray-400">{record.add_seed}</td>
                        <td className="py-2 px-4 border border-gray-400">{record.seedadd_no}</td>
                        <td className="py-2 px-4 border border-gray-400">{record.seed_store}</td>
                        <td className="py-2 px-4 border border-gray-400">{record.seed_stock}</td>
                        <td className="py-2 px-4 border border-gray-400">{record.seed_expire.split("T")[0]}</td>
                        <td className="py-2 px-4 border border-gray-400">
                            <div className="flex">
                                <Link to={`../editseedlistpage/${record._id}`}
                                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer border-none flex items-center">
                                    <FaEdit className="mr-1"/>
                                    <span>Edit</span>
                                </Link>
                            <button
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer ml-6 border-none flex items-center"
                                onClick={() => handleDelete(record._id)}
                            >
                            <FaTrash className="mr-1"/>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default SeedList;