import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { DatePicker, Button, Popover, Radio } from 'antd'; // Assuming you're using Ant Design for popover and date picker

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    XMarkIcon, ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

export default function MachineRecordsList() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [machineRecords, setMachineRecords] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('asc');
    const { enqueueSnackbar } = useSnackbar();

    const [selectedDates, setSelectedDates] = useState([]);
    const [popoverVisible, setPopoverVisible] = useState(false);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://elemahana-mern-8d9r.vercel.app/machines')
            .then((response) => {
                setMachineRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDeleteMachineRecord = (id) => {
        setLoading(true);
        axios
            .delete(`http://elemahana-mern-8d9r.vercel.app/machines/${id}`)
            .then(() => {
                setMachineRecords((prevRecords) => prevRecords.filter((record) => record._id !== id));
                enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Record Deletion failed', { variant: 'error' });
                console.log(error);
            });
    };

    const sortedRecords = [...machineRecords].sort((a, b) => {
        if (sortBy === 'date') {
            return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
    });

    const filteredMachineRecords = sortedRecords.filter(record => {
        // Convert all values to lowercase for case-insensitive search
        const searchTerm = searchQuery.toLowerCase();

        // Check if any field in the record contains the search query
        return Object.values(record).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        );
    });

    const handleSortBy = (criteria) => {
        if (criteria === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('asc');
        }
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setSortBy('date');
        setSortOrder('asc');
    };

    const handleClearSorting = () => {
        setSearchQuery(''); // Reset search query
        setSortBy('');
        setSortOrder('asc');
    };

    const handleDownloadPDF = () => {
        const sortedRecords = machineRecords.sort((a, b) => {
            if (sortBy === 'date') {
                return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
            }
        });

        const filteredRecords = sortedRecords.filter(machine => {
            const transactionDate = new Date(machine.date);
            return transactionDate >= selectedDates[0] && transactionDate <= selectedDates[1];
        });

        const doc = new jsPDF();
        doc.text('Machine Records Report', 10, 10);

        const headers = [['Date', 'Type', 'Hours/nos.', 'Rate', 'Description', 'Payer/Payee', 'Paid', 'Total']];
        const data = filteredRecords.map(machine => [
            machine.date,
            machine.type,
            machine.hours_nos,
            machine.rate,
            machine.description,
            machine.payer_payee,
            machine.paid,
            machine.hours_nos * machine.rate
        ]);

        doc.autoTable({
            head: headers,
            body: data,
            startY: 20,
        });

        doc.save('machine_records_report.pdf');
    };


    return (
        <div>
        <div className=" overflow-x-auto ">
            <SnackbarProvider/>
            <div className="flex flex-row justify-between items-center align-bottom mx-8 py-4">
                <div>
                    <h1 className="text-lg font-semibold text-left">Machine Renting records</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">
                        Browse a list of all machine renting activity stored in the system
                    </p>
                    <div className="flex flex-row gap-4">
                        <div className="py-4  relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="text-gray-500 h-4 w-4"/>
                            </div>
                            <input
                                type="text"
                                placeholder="Search all records..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border border-gray-300 rounded-full px-3 py-1 w-fit text-sm pl-10 pr-4"
                                style={{paddingRight: ''}}
                            />
                            {searchQuery && (
                                <button
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setSearchQuery('')}
                                >
                                    <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 cursor-pointer"/>
                                </button>
                            )}
                        </div>

                        <div className="flex items-center space-x-4 relative px-4">
                            <button
                                className="flex items-center space-x-1 cursor-pointer bg-lime-200 px-4 py-1 rounded-full hover:bg-lime-400"
                                onClick={() => handleSortBy('date')}
                            >
                                <span className="text-sm text-gray-600">Date</span>
                                {sortBy === 'date' && (
                                    sortOrder === 'asc' ? (
                                        <ChevronUpIcon
                                            className="w-4 h-4 bg-green-800 text-white stroke-2 rounded-full"/>
                                    ) : (
                                        <ChevronDownIcon
                                            className="w-4 h-4 bg-green-800 text-white stroke-2 rounded-full"/>
                                    )
                                )}
                            </button>

                            <button
                                className="flex items-center space-x-1 bg-rose-200 rounded-full hover:bg-red-400 cursor-pointer p-1"
                                onClick={handleClearSorting}
                            >
                                <XMarkIcon className="w-4 h-4 "/>
                            </button>

                            <div>
                                <Button
                                    shape="round"
                                    className="flex flex-row gap-2 items-center font-semibold bg-amber-200 text-gray-700 hover:bg-amber-500 border-none"
                                    onClick={() => setPopoverVisible(true)}>
                                    Download PDF Report <ArrowDownTrayIcon className="w-4 h-4 self-center"/>
                                </Button>
                                <Popover
                                    content={
                                        <div className="text-gray-600">
                                            <DatePicker.RangePicker
                                                onChange={(dates) => setSelectedDates(dates)}
                                            />
                                            <div className="flex flex-col space-y-4 py-4">
                                                <span>Select sorting criteria:</span>
                                                <Radio.Group
                                                    onChange={(e) => setSortBy(e.target.value)}
                                                    value={sortBy}
                                                >
                                                    <Radio value="date">Date</Radio>

                                                </Radio.Group>
                                                <span>Select sorting order:</span>
                                                <Radio.Group
                                                    onChange={(e) => setSortOrder(e.target.value)}
                                                    value={sortOrder}
                                                >
                                                    <Radio value="asc">Ascending</Radio>
                                                    <Radio value="desc">Descending</Radio>
                                                </Radio.Group>
                                            </div>
                                            <Button shape="round"
                                                    className="bg-lime-600 border-none hover:text-lime-600 text-white"
                                                    onClick={handleDownloadPDF}>Download</Button>
                                        </div>
                                    }
                                    title="Select Date Range and Sorting"
                                    trigger="click"
                                    visible={popoverVisible}
                                    onVisibleChange={setPopoverVisible}
                                />
                            </div>


                        </div>
                    </div>

                </div>
                <div>
                    <a
                        href="/finances/machineHours/addMachineRecords"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Add New Machine Record <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

        </div>


            <div id="print-area">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead
                        className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                    <tr className=" ">
                        <th></th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hours/nos.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Payer/Payee
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fee
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
                    <tbody className="border-b border-gray-200">
                    {filteredMachineRecords.map((record, index) => (
                        <tr
                            key={record._id}
                            className={` divide-y
                                    ${record.paid === 'false' ? 'border-l-4 border-red-500 ' : 'border-l-4 border-lime-500 '}`}
                        >
                            <td></td>
                            <td className="px-6 py-4">{record.date}</td>
                            <td className="px-6 py-4">{record.type}</td>
                            <td className="px-6 py-4">{record.hours_nos}</td>
                            <td className="px-6 py-4">Rs.{record.rate}</td>
                            <td className="px-6 py-4">{record.description}</td>
                            <td className="px-6 py-4">{record.payer_payee}</td>
                            <td className="px-6 py-4">
                                <div
                                    className={record.paid === "true" ? "bg-lime-600 text-base font-semibold text-center text-white rounded-full hover:bg-lime-500" : "bg-red-600 text-base font-semibold text-center text-white rounded-full hover:bg-red-500"}>
                                    Rs.{record.hours_nos * record.rate}
                                </div>
                            </td>


                            <td className=" py-4 text-right">
                                <Link to={`/finances/machineHours/viewMachineRecords/${record._id}`}>
                                    <InformationCircleIcon
                                        className="h-6 w-6 flex-none bg-gray-200 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`/finances/machineHours/editMachineRecords/${record._id}`}>
                                    <PencilSquareIcon
                                        className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </td>
                            <td className=" ">
                                <Popover
                                    content={
                                        <div>
                                            <p>Are you sure you want to delete this record?</p>
                                            <div className="mt-4 flex justify-start">
                                                <button
                                                    className="bg-red-600 rounded-full px-4 text-white hover:bg-red-400"
                                                    onClick={() => {
                                                        handleDeleteMachineRecord(record._id);
                                                    }}
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    title="Confirmation"
                                    trigger="click"
                                >
                                    <Button shape="circle" type="text">
                                        <TrashIcon
                                            className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </Popover>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
