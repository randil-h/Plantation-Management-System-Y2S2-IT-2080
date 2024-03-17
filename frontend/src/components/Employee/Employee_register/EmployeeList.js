import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'

const EmployeeList = () => {

    const [RegistrationRecords, setRegistrationRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/employeeRecords`)
            .then((response) => {
                setRegistrationRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/employeeRecords/${recordId}`)
            .then(() => {
                setRegistrationRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };



        return (
            <div className=" overflow-x-auto  ">

                <div className="flex flex-row justify-between items-center px-8 py-4">
                    <div>
                        <h1 className=" text-lg font-semibold text-left">Employee Details</h1>
                        <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored employee details
                            within the system for thorough insights.</p>
                    </div>

                    <div>
                        <a href="/employees/registration/addEmployee"
                           className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                            Add new employee <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                    <thead
                        className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                    <tr className=" ">
                        <th></th>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            DOB
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NIC
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Work Qualifications
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hired Date
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

                    {RegistrationRecords.map((record, index) => (
                            <tr key={index}>
                                <td></td>
                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4">
                                    {record.f_name}
                                </td>
                                <td className="px-6 py-4">
                                    {record.l_name}
                                </td>
                                <td className="px-6 py-4">
                                    {record.dob}
                                </td>
                                <td className="px-6 py-4">
                                    {record.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {record.contact_no}
                                </td>
                                <td className="px-6 py-4">
                                    {record.emp_email}
                                </td>
                                <td className="px-6 py-4">
                                    {record.nic}
                                </td>
                                <td className="px-6 py-4">
                                    {record.e_address}
                                </td>
                                <td className="px-6 py-4">
                                    {record.emp_type}
                                </td>
                                <td className="px-6 py-4">
                                    {record.qualifications}
                                </td>
                                <td className="px-6 py-4">
                                    {record.h_date}
                                </td>


                                <td className=" py-4 text-right">
                                    <a href="#"
                                       className="font-medium text-blue-600  hover:underline">
                                        <InformationCircleIcon
                                            className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                            aria-hidden="true"/>
                                    </a>
                                </td>
                                <td className=" py-4 text-right">
                                    <a href= "/employees/registration/editEmployee" className="font-medium text-blue-600 hover:underline">
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                    </a>
                                </td>
                                <td className=" py-4 text-right">

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
        )
};
export default EmployeeList;