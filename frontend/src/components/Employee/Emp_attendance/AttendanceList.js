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

const AttendanceList = () => {




    return (
        <div className=" overflow-x-auto  ">

            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Attendance Details</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Quickly access employee attendance data for valuable insights and analysis</p>
                    <div className=" py-4">
                        <input
                            type="text"
                            placeholder="Search employee attendance..."
                            className="border border-gray-300 rounded-full px-3 py-1 w-full "
                        />


                    </div>

                </div>
                <div>

                    <a href="/employees/attendance/getAttendance"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Get Attendance <span aria-hidden="true">&rarr;</span>
                    </a>
                    <button
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
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className=" py-3">
                            <span className="sr-only">Info</span>
                        </th>
                        <th scope="col" className=" py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                    </thead>

                </table>
        </div>
        </div>
    )
};
export default AttendanceList;