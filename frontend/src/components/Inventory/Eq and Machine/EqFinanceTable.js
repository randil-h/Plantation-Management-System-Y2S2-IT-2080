import React from 'react';
import { Link } from "react-router-dom";
import {FaEdit, FaTrash} from "react-icons/fa";

export default function EqFinanceTable() {
    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 absolute top-14 left-72 mt-10"
                />
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 left-1/3 mt-10"
                >
                    Search
                </button>
            </div>

            <Link to="../addeqfinances">
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-10 mr-24"
                >
                    Add
                </button>
            </Link>

            <button
                className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-10 mr-5"
            >
                Print
            </button>

            <div className="container mx-auto p-8 -ml-1 mt-16">
                <table className="w-auto bg-white shadow-md rounded-md overflow-hidden ml-1/3" style={{width: '95%'}}>
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border border-gray-400">No</th>
                        <th className="py-2 px-4 border border-gray-400">Equipment/Machine</th>
                        <th className="py-2 px-4 border border-gray-400">Company</th>
                        <th className="py-2 px-4 border border-gray-400">Seller Name</th>
                        <th className="py-2 px-4 border border-gray-400">Ordered Date</th>
                        <th className="py-2 px-4 border border-gray-400">Received Date</th>
                        <th className="py-2 px-4 border border-gray-400">Quantity Purchased</th>
                        <th className="py-2 px-4 border border-gray-400">Quality</th>
                        <th className="py-2 px-4 border border-gray-400">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr className="hover:bg-gray-100">
                        <td className="py-2 px-4 border border-gray-400">1</td>
                        <td className="py-2 px-4 border border-gray-400">Tractor</td>
                        <td className="py-2 px-4 border border-gray-400">2</td>
                        <td className="py-2 px-4 border border-gray-400">1</td>
                        <td className="py-2 px-4 border border-gray-400">E_Trac001</td>
                        <td className="py-2 px-4 border border-gray-400">1</td>
                        <td className="py-2 px-4 border border-gray-400">1</td>
                        <td className="py-2 px-4 border border-gray-400">1</td>
                        <td className="py-2 px-4 border border-gray-400">
                            <div className="flex">
                                <button
                                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer border-none flex items-center">
                                    <FaEdit className="mr-1"/>
                                    <span>Edit</span>
                                </button>
                                <button
                                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer ml-6 border-none flex items-center">
                                    <FaTrash className="mr-1"/>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};
