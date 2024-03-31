import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pdfStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const generatePDF = () => {
    const input = document.getElementById('rotation-table');
    if (input) {
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('l', 'mm', 'a3');
                pdf.addImage(imgData, 'PNG', 0, 0);
                const tableWidth = input.offsetWidth - input.rows[0].cells[input.rows[0].cells.length - 1].offsetWidth;
                const tableHeight = input.offsetHeight;
                pdf.save('rotation-list.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    } else {
        console.error('Table element not found');
    }
};

const RotationList = () => {
    const [RotationRecords, setRotationRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [recordToDelete, setRecordToDelete] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/rotation`)
            .then((response) => {
                setRotationRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        setRecordToDelete(recordId);
    };

    const confirmDelete = () => {
        if (recordToDelete) {
            axios
                .delete(`http://localhost:5555/rotation/${recordToDelete}`)
                .then(() => {
                    setRotationRecords(prevRecords =>
                        prevRecords.filter(record => record._id !== recordToDelete)
                    );
                    setRecordToDelete(null);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const confirmDeleteAction = () => {
        axios
            .delete(`http://localhost:5555/rotation/${recordToDelete}`)
            .then(() => {
                setRotationRecords(prevRecords => prevRecords.filter(record => record._id !== recordToDelete));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCancelDelete = () => {
        setRecordToDelete(null);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        const filteredRecords = RotationRecords.filter(record =>
            record.season.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.fieldName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.cropType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.remarks.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecords(filteredRecords);
    };

    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        setFilteredRecords(RotationRecords);
    }, [RotationRecords]);


    return (
        <div className="z-0">
            <div>
                <input
                    type="text"
                    placeholder="Search Rotation"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-full px-3 py-1 absolute top-28 left-80 mt-10"
                />
            </div>

            <Link to="/crop/rotation/view-add">
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-10 mr-24"
                >
                    Add
                </button>
            </Link>

            <button
                onClick={generatePDF}
                className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-14 right-10 mt-10 mr-5"
            >
                Print
            </button>

            <div className="overflow-x-auto">
                <table id="rotation-table"
                       className="w-10/12 bg-white shadow-md rounded-md overflow-hidden absolute top-1/3 left-64">
                    <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Season</th>
                        <th className="px-6 py-3">Field Name</th>
                        <th className="px-6 py-3">Crop Type</th>
                        <th className="px-6 py-3">Variety</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Yield</th>
                        <th className="px-6 py-3">Remarks</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100 divide-y divide-gray-200" key={index}>
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{record.season}</td>
                            <td className="px-6 py-4">{record.fieldName}</td>
                            <td className="px-6 py-4">{record.cropType}</td>
                            <td className="px-6 py-4">{record.variety}</td>
                            <td className="px-6 py-4">{record.quantity}</td>
                            <td className="px-6 py-4">{record.yield}</td>
                            <td className="px-6 py-4">{record.remarks}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-between">
                                    <Link to={`/crop/rotation/update/${record._id}`}>
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                    </Link>
                                    <button
                                        className="flex items-center"
                                        onClick={() => handleDelete(record._id)}
                                    >
                                        <TrashIcon
                                            className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {recordToDelete && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-md shadow-lg">
                            <p className="text-lg font-semibold mb-3">Confirm Deletion</p>
                            <p className="mb-5">Are you sure you want to delete this record?</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                                >
                                    Confirm
                                </button>
                                <button
                                    onClick={() => setRecordToDelete(null)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RotationList;
