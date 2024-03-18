import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

const PlantingList = () => {
    const [plantingRecords, setPlantingRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/cropinput`)
            .then((response) => {
                const formattedRecords = response.data.data
                    .filter(record => record.type === "Planting")
                    .map(record => ({
                        ...record,
                        date: new Date(record.date).toLocaleDateString('en-GB')
                    }));
                setPlantingRecords(formattedRecords);
                setFilteredRecords(formattedRecords);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/cropinput/${recordId}`)
            .then(() => {
                setPlantingRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSearch = () => {
        const filteredRecords = plantingRecords.filter(record =>
            record.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.cropType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.remarks.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecords(filteredRecords);
    };

    const generatePDF = () => {
        const input = document.getElementById('planting-table');
        if (input) {
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('l', 'mm', 'b4');
                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.save('planting-list.pdf');
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
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search..."
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 absolute top-20 left-72 mt-10"
                />
                <button
                    onClick={handleSearch}
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-20 left-1/3 mt-10"
                >
                    Search
                </button>
            </div>
            <Link to="/crop/input/add">
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
                <table
                    id="planting-table"
                    className="w-10/12 bg-white shadow-md rounded-md overflow-hidden absolute top-1/3 left-64"
                >
                    <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Field Name</th>
                        <th className="px-6 py-3">Crop Type</th>
                        <th className="px-6 py-3">Variety</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Unit Cost</th>
                        <th className="px-6 py-3">Remarks</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100 divide-y divide-gray-200" key={index}>
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{record.date}</td>
                            <td className="px-6 py-4">{record.field}</td>
                            <td className="px-6 py-4">{record.cropType}</td>
                            <td className="px-6 py-4">{record.variety}</td>
                            <td className="px-6 py-4">{record.quantity}</td>
                            <td className="px-6 py-4">{record.unitCost}</td>
                            <td className="px-6 py-4">{record.remarks}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-between">
                                    <Link to={`/crop/input/update/${record._id}`}>
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                    <button className="flex items-center" onClick={() => handleDelete(record._id)}>
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
            </div>
        </div>
    );
};

export default PlantingList;
