import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {enqueueSnackbar, useSnackbar} from "notistack";

const EmployeeList = () => {

    const [RegistrationRecords, setRegistrationRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const {enqueueSnackbar } = useSnackbar();
    const [selectedTypeFilter, setSelectedTypeFilter] = useState('All Types');


    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://elemahana-mern-8d9r.vercel.app/employeeRecords`)
            .then((response) => {
                setRegistrationRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this registration record?");
        if (confirmDelete) {
            setLoading(true);
            axios
                .delete(`https://elemahana-mern-8d9r.vercel.app/employeeRecords/${id}`)
                .then(() => {
                    
                    setRegistrationRecords(prevRecords => prevRecords.filter(record => record._id !== id));
                    setLoading(false);
                    enqueueSnackbar('Record Deleted successfully', { variant: 'success' });

                })
                .catch((error) => {
                    console.log(error);
                    // Handle error
                });
        }
    };


    const filteredRecords = RegistrationRecords.filter((record) =>
        Object.values(record).some((value) => {
            if (typeof value === 'string' || typeof value === 'number') {
                // Convert value to string and check if it includes the search query
                return String(value).toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        })  && (selectedTypeFilter === 'All Types' || record.emp_type === selectedTypeFilter)
    );

    const employeeTypes = [...new Set(RegistrationRecords.map(record => record.emp_type))];


    const handlePrint = () => {
        const input = document.getElementById('print-area');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = pdf.internal.pageSize.getWidth() - 20;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 10;
                pdf.setFontSize(16);
                pdf.text("Employee Summary", 10, position);
                heightLeft -= position + 10;

                pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
                heightLeft -= imgHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
                    heightLeft -= imgHeight;
                }

                pdf.save('Employee_Details.pdf');
            });
    };




        return (
            <div className=" overflow-x-auto  ">

                <div className="flex flex-row justify-between items-center px-8 py-4">
                    <div>
                        <h1 className=" text-lg font-semibold text-left">Employee Details</h1>
                        <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored employee details
                            within the system for thorough insights.</p>
                        <div className=" py-4">
                            <input
                                type="text"
                                placeholder="Search all employees..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border border-gray-300 rounded-full px-3 py-1 w-full "
                            />


                        </div>

                    </div>
                    <div className="mt-2">
                        <select
                            value={selectedTypeFilter}
                            onChange={(e) => setSelectedTypeFilter(e.target.value)}
                            className="appearance-none rounded-full bg-white px-7 py-1.5 text-sm text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-11"
                            style={{marginLeft: "-175px"}}
                        >
                            <option value="All Types">All Types</option>
                            {employeeTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>


                    <div>

                        <a href="/employees/registration/addEmployee"
                           className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                            Add new employee <span aria-hidden="true">&rarr;</span>
                        </a>
                        <button
                            onClick={handlePrint}
                            className="ml-4 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                            Generate Report
                        </button>
                    </div>
                </div>

                <div id="print-area">
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
                        <th scope="col" className="px-6 py-3">
                            Hourly Rate
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
                                    {record.f_name}
                                </td>
                                <td className="px-6 py-4">
                                    {record.l_name}
                                </td>
                                <td className="px-6 py-4">
                                    {record.dob.split("T")[0]}
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
                                    {record.h_date.split("T")[0]}
                                </td>
                                <td className="px-6 py-4">
                                    {record.h_rate}
                                </td>


                                <td className=" py-4 text-right">
                                    <Link to={`/employees/registration/viewEmployee/${record._id}`}
                                          className="font-medium text-blue-600  hover:underline">
                                        <InformationCircleIcon
                                            className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                            aria-hidden="true"/>
                                    </Link>
                                </td>
                                <td className=" py-4 text-right">
                                    <Link to={`/employees/registration/editEmployee/${record._id}`}
                                          className="font-medium text-blue-600 hover:underline">
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                    </Link>
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
            </div>
        )
};
export default EmployeeList;