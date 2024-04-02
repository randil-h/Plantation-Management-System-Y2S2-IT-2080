import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaSearch } from "react-icons/fa";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";

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

const ChemicalList = () => {
    const [ChemicalRecords, setChemicalRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [recordToDelete, setRecordToDelete] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/cropinput`)
            .then((response) => {
                const formattedRecords = response.data.data
                    .filter(record => record.type === "Agrochemical")
                    .map(record => ({
                        ...record,
                        date: new Date(record.date).toLocaleDateString('en-GB')
                    }));
                setChemicalRecords(formattedRecords);
                setFilteredRecords(formattedRecords);
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
                .delete(`http://localhost:5555/cropinput/${recordToDelete}`)
                .then(() => {
                    setChemicalRecords(prevRecords =>
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
            .delete(`http://localhost:5555/cropinput/${recordToDelete}`)
            .then(() => {
                setChemicalRecords(prevRecords =>
                    prevRecords.filter(record => record._id !== recordToDelete)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCancelDelete = () => {
        setRecordToDelete(null);
    };

    const handleSearch= (event) => {
        setSearchQuery(event.target.value);

        const filteredRecords = ChemicalRecords.filter(record =>
            record.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.remarks.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecords(filteredRecords);
    };

    const generatePDF = () => {
        const input = document.getElementById('chemical-table');
        if (input) {
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('l', 'mm', 'b4');
                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.save('chemical-list.pdf');
                })
                .catch((error) => {
                    console.error('Error generating PDF:', error);
                });
        } else {
            console.error('Table element not found');
        }
    };

    return (
        <div className="z-0">
            <div className="absolute left-80">
                <input
                    type="text"
                    placeholder="Search Agrochemical"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-full px-3 py-1 pl-10"
                />
                <FaSearch className="absolute left-3 top-2 text-gray-400"/>
            </div>

            <Link to="/crop/input/add">
                <button
                    className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 absolute top-14 right-10 mt-10 mr-24"
                >
                    Add New Agrochemical <span aria-hidden="true">&rarr;</span>
                </button>
            </Link>

            <button
                onClick={generatePDF}
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 absolute top-14 right-10 mt-10 mr-5"
            >
                Print
            </button>

            <div className="overflow-x-auto">
                <table
                    id="chemical-table"
                    className="w-10/12 bg-white shadow-md rounded-md overflow-hidden absolute top-1/3 left-64"
                >
                    <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Field Name</th>
                        <th className="px-6 py-3">Chemical Type</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Unit Cost</th>
                        <th className="px-6 py-3">Remarks</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100 divide-y divide-gray-200" key={record._id}>
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{record.date}</td>
                            <td className="px-6 py-4">{record.field}</td>
                            <td className="px-6 py-4">{record.chemicalName}</td>
                            <td className="px-6 py-4">{record.quantity}</td>
                            <td className="px-6 py-4">{record.unitCost}</td>
                            <td className="px-6 py-4">{record.remarks}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-between">
                                    <Link to={`/crop/input/update/${record._id}`}>
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                    </Link>
                                    <button className="flex items-center" onClick={() => handleDelete(record._id)}>
                                        <TrashIcon
                                            className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                            aria-hidden="true"/>
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

export default ChemicalList;
