import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import {FaEdit, FaPrint, FaSearch, FaTrash} from "react-icons/fa";
import axios from 'axios';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {HiOutlineDownload} from "react-icons/hi";

const BookingList = () => {
    const [originalRecords, setOriginalRecords] = useState([]);
    const [bookingRecords, setBookingRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const mapPackageName = (packageName) => {
        switch (packageName) {
            case 'guidedFarmTour':
                return 'Guided Farm Tour';
            case 'fruitAndVegetablePicking':
                return 'Fruit and Vegetable Picking';
            case 'farmChoreExperience':
                return 'Farm Chore Experience';
            default:
                return packageName;
        }
    };
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/booking`)
            .then((response) => {
                setOriginalRecords(response.data.data); // Set original records here
                setBookingRecords(response.data.data); // Also set booking records here initially
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase(); // Get the current value from the input field

        setSearchInput(searchQuery); // Update the searchInput state with the current value

        const filteredRecords = originalRecords.filter(record => {
            return (
                record.date.toLowerCase().includes(searchQuery) ||
                record.name.toLowerCase().includes(searchQuery) ||
                record.telNo.toLowerCase().includes(searchQuery) ||
                record.nicNo.toLowerCase().includes(searchQuery) ||
                record.email.toLowerCase().includes(searchQuery) ||
                record.numberOfPeople.toString().includes(searchQuery) ||
                mapPackageName(record.selectedPackage).toLowerCase().includes(searchQuery) ||
                (record.selectedPackage === 'guidedFarmTour' && record.numberOfDays.toString().includes(searchQuery))
            );
        });

        setBookingRecords(filteredRecords);
    };

    const handlePrint = () => {
        const input = document.getElementById('booking-table');

        // Remove the Actions column from the table before capturing
        const actionsColumn = input.querySelector('.actions-column');
        if (actionsColumn) {
            actionsColumn.style.display = 'none';
        }

        html2canvas(input, { scrollY: -window.scrollY })
            .then((canvas) => {
                // Restore the Actions column visibility after capturing
                if (actionsColumn) {
                    actionsColumn.style.display = '';
                }

                const imgData = canvas.toDataURL('image/png');

                // Define PDF dimensions and orientation
                const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape orientation

                // Add image to PDF
                pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

                // Save PDF
                pdf.save('booking-list.pdf');
            });
    };




    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/booking/${recordId}`)
            .then(() => {
                setBookingRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="mx-24">
            <div className="flex items-center justify-between mb-4 mt-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleSearch}
                        className="border rounded-full px-3 py-1 pl-10 focus:outline-none focus:border-blue-500" // Adjust the width as needed
                    />
                    <FaSearch className="absolute left-3 top-2 text-gray-400"/>
                </div>
                <div className="bg-black rounded-lg px-5 py-3 mb-4 items">
                    <p className="text-center text-white font-semibold">Total Bookings: {bookingRecords.length}</p>
                </div>
                <div className="flex">
                    <Link to="/booking">
                        <button
                            className="bg-black text-white px-3 py-1 rounded-full hover:bg-emerald-700 focus:outline-none mr-2"
                        >
                            Add Another Booking <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </Link>
                    <button
                        className="bg-black text-white px-3 py-1 rounded-full hover:bg-emerald-700 focus:outline-none ml-2 flex items-center"
                        onClick={handlePrint}
                    >
                        Print <HiOutlineDownload className="ml-1"/>
                    </button>
                </div>

            </div>


            <div className="overflow-x-auto flex justify-center">
                <table id="booking-table"
                       className="w-10/12 bg-white shadow-md rounded-md overflow-hidden  top-1/3 mb-10">
                    <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Tel No</th>
                <th className="px-6 py-3">NIC No</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">No Of People</th>
                <th className="px-6 py-3">Package</th>
                {/* Conditionally show the column based on the selected package */}
                {bookingRecords.some(record => record.selectedPackage === 'guidedFarmTour') && (
                    <th className="px-6 py-3">Number of Days</th>
                        )}
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100 divide-y divide-gray-200" key={index}>
                            <td className="px-6 py-3">{index + 1}</td>
                            <td className="px-6 py-3">{new Date(record.date).toLocaleDateString('en-GB')}</td>
                            <td className="px-6 py-3">{record.name}</td>
                            <td className="px-6 py-3">{record.telNo}</td>
                            <td className="px-6 py-3">{record.nicNo}</td>
                            <td className="px-6 py-3">{record.email}</td>
                            <th className="px-6 py-3">{record.numberOfPeople}</th>
                            <td className="px-6 py-3">{mapPackageName(record.selectedPackage)}</td>
                            {/* Conditionally show the column based on the selected package */}
                            {record.selectedPackage === 'guidedFarmTour' && (
                                <td className="py-2 px-4 border border-gray-400">{record.numberOfDays}</td>
                            )}
                            {/* Add an empty cell if the selected package is 'Fruit and Vegetable Picking' or 'Farm Chore Activity' */}
                            {['fruitAndVegetablePicking', 'farmChoreExperience'].includes(record.selectedPackage) && (
                                <td className="py-2 px-4 border border-gray-400"></td>
                            )}
                            <td className="py-2 px-4 border border-gray-400">
                                <div className="flex">
                                    <Link to={`/booking/edit/${record._id}`}
                                          className="bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500">
                                        <PencilSquareIcon className="h-6 w-6 flex-none"/>
                                    </Link>
                                    <button onClick={() => handleDelete(record._id)}
                                            className="bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500">
                                        <TrashIcon className="h-6 w-6 flex-none"/>
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

export default BookingList;
