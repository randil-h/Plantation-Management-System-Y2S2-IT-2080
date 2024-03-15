import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
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
                const pdf = new jsPDF('l', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0);
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
        axios
            .delete(`http://localhost:5555/rotation/${recordId}`)
            .then(() => {
                setRotationRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };

    return (
        <div className= "z-0">
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 absolute top-20 left-72 mt-10"
                />
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 absolute top-20 left-1/3 mt-10"
                >
                    Search
                </button>
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
                       className="w-fit bg-white shadow-md rounded-md overflow-hidden absolute top-1/3 left-60">
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
                    {RotationRecords.map((record, index) => (
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
                                <div className="flex">
                                    <Link to={`/crop/rotation/update/${record._id}`}
                                          className="bg-black text-white px-4 py-2 rounded-md hover:bg-lime-400 hover:text-black transition duration-300 cursor-pointer border-none flex items-center">
                                        <FaEdit className="mr-1"/>
                                        <span>Edit</span>
                                    </Link>
                                    <button
                                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-lime-400 hover:text-black transition duration-300 cursor-pointer ml-6 border-none flex items-center"
                                        onClick={() => handleDelete(record._id)}>
                                        <FaTrash className="mr-1"/>
                                        <span>Delete</span>
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

export default RotationList;
