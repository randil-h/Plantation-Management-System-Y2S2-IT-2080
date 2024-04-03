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
import {FaBan, FaCheck, FaHourglassStart, FaTools} from "react-icons/fa";
import {GiPauseButton} from "react-icons/gi";

const TaskList = () => {

    const [TaskRecords, setTaskRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const {enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/taskRecords`)
            .then((response) => {
                setTaskRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task record?");
        if (confirmDelete) {
            setLoading(true);
            axios
                .delete(`http://localhost:5555/taskRecords/${recordId}`)
                .then(() => {
                    setTaskRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
                    setLoading(false);
                    enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
                })
                .catch((error) => {
                    console.log(error);
                    // Handle error
                });
        }
    };

    const filteredRecords = TaskRecords.filter((record) =>
        Object.values(record).some((value) => {
            if (typeof value === 'string' || typeof value === 'number') {
                // Convert value to string and check if it includes the search query
                return String(value).toLowerCase().includes((searchQuery || '').toLowerCase());
            }
            return false;
        })
    );


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
                pdf.text("Task Details", 10, position);
                heightLeft -= position + 10;

                pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
                heightLeft -= imgHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
                    heightLeft -= imgHeight;
                }

                pdf.save('Task_Details.pdf');
            });
    };

    const subtypeBorderColorMap = {
        pending: "border-lime-400",
        inprogress: "border-green-400",
        completed: "border-blue-400",
        onhold: "border-cyan-400",
        cancelled: "border-red-400",

    };

    function getBorderColorClass(task_status) {
        return subtypeBorderColorMap[task_status] || "border-gray-200"; // Default color
    }


    return (
        <div className=" overflow-x-auto  ">

            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Task Details</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored task details
                        within the system for thorough insights.</p>
                    <div className=" py-4">
                        <input
                            type="text"
                            placeholder="Search all Tasks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded-full px-3 py-1 w-full"
                        />
                    </div>
                </div>

                <div>
                    <a href="/employees/tasks/addTask"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new task <span aria-hidden="true">&rarr;</span>
                    </a>
                    <button
                        onClick={handlePrint}
                        className="ml-4 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Print
                    </button>
                </div>
            </div>
            <div>
                <div className="flex flex-row bg-gray-200 h-30">

                    <button value="pending" onClick={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow overflow-hidden bg-yellow-100 flex flex-col justify-between items-center hover:w-[20%] hover:h-[105%] transition-all duration-300 ease-in-out">
                        <div
                            className="flex flex-col h-full items-center content-center align-middle justify-between pb-4  pt-4">
                            <div className="w-8 h-8">
                                <FaHourglassStart/>
                            </div>
                            <dd className="text-xl font-semibold text-gray-900">
                                Pending
                            </dd>
                        </div>
                    </button>
                    <button value="inprogress" onClick={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow overflow-hidden bg-green-100 flex justify-center items-center hover:w-[20%] hover:h-[105%] transition-all duration-300 ease-in-out">
                        <div
                            className="flex flex-col h-full items-center content-center align-middle pt-4 pb-4  justify-between ">
                            <div className="w-8 h-8">
                                <FaTools/>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">
                                In Progress
                            </div>
                        </div>
                    </button>
                    <button value="completed" onClick={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow overflow-hidden bg-blue-100 flex justify-center items-center hover:w-[20%] hover:h-[105%] transition-all duration-300 ease-in-out">
                        <div
                            className="flex flex-col h-full items-center content-center align-middle pt-4 pb-4  justify-between ">
                            <div className="w-8 h-8">
                                <FaCheck/>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">
                                Completed
                            </div>
                        </div>
                    </button>
                    <button value="onhold" onClick={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow overflow-hidden bg-purple-100 flex justify-center items-center hover:w-[20%] hover:h-[105%] transition-all duration-300 ease-in-out">
                        <div
                            className="flex flex-col h-full items-center content-center align-middle pt-4 pb-4  justify-between ">
                            <div className="w-8 h-8">
                                <GiPauseButton/>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">
                                On Hold
                            </div>
                        </div>
                    </button>
                    <button value="cancelled" onClick={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow overflow-hidden bg-red-100 flex justify-center items-center hover:w-[20%] hover:h-[105%] transition-all duration-300 ease-in-out">
                        <div
                            className="flex flex-col h-full items-center content-center align-middle pt-4 pb-4  justify-between ">
                            <div className="w-8 h-8">
                                <FaBan/>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">
                                Cancelled
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <br/> <br/>
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
                            Employee ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Task
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Assign Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Due Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Task Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
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
                        <tr key={index}
                            className={`divide-y border-l-4 ${getBorderColorClass(record.task_status)}`}
                        >
                            <td></td>
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <td className="px-6 py-4">
                                {record.emp_id}
                            </td>
                            <td className="px-6 py-4">
                                {record.task}
                            </td>
                            <td className="px-6 py-4">
                                {record.assign_date.split("T")[0]}
                            </td>
                            <td className="px-6 py-4">
                                {record.due_date.split("T")[0]}
                            </td>
                            <td className="px-6 py-4">
                                {record.task_des}
                            </td>
                            <td className="px-6 py-4">
                                {record.task_status}
                            </td>

                            <td className=" py-4 text-right">
                                <Link to={`/employees/tasks/viewTask/${record._id}`}
                                      className="font-medium text-blue-600  hover:underline">
                                    <InformationCircleIcon
                                        className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                        aria-hidden="true"/>
                                </Link>
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`/employees/tasks/editTasks/${record._id}`}
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
export default TaskList;