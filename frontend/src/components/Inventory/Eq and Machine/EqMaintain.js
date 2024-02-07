import React from 'react';
import {Link} from "react-router-dom";

export default function EqMaintain() {
    return (
        <div>
            <Link to="../maintenancelog">
                <button
                    className="rounded-full bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-4 mr-5"
                >
                    Add
                </button>
            </Link>
        <div className="container mx-auto p-8 ml-60 mt-16">
            <table className="w-auto bg-white shadow-md rounded-md overflow-hidden ml-1/3" style={{width: '90%'}}>
                <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4 border border-gray-400">No</th>
                    <th className="py-2 px-4 border border-gray-400">Equipment/Machine</th>
                    <th className="py-2 px-4 border border-gray-400">ID</th>
                    <th className="py-2 px-4 border border-gray-400">Date</th>
                    <th className="py-2 px-4 border border-gray-400">Comment</th>
                    <th className="py-2 px-4 border border-gray-400">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border border-gray-400">2</td>
                    <td className="py-2 px-4 border border-gray-400">Ladder</td>
                    <td className="py-2 px-4 border border-gray-400">5</td>
                    <td className="py-2 px-4 border border-gray-400">3</td>
                    <td className="py-2 px-4 border border-gray-400">2</td>
                    <td className="py-2 px-4 border border-gray-400">
                        <button
                            className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800 cursor-pointer border-none">
                            Edit
                        </button>
                        <button
                            className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800 cursor-pointer ml-6 border-none">
                            Delete
                        </button>
                    </td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
        </div>
    );
}