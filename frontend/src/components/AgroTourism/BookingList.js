import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";

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
                setBookingRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const handleSearch = () => {
        // Convert the searchInput to lowercase for case-insensitive search
        const searchQuery = searchInput.toLowerCase();

        // Filter the bookingRecords array based on the searchInput value
        const filteredRecords = bookingRecords.filter(record => {
            // Check if any field in the record contains the search query
            return Object.values(record).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchQuery);
                }
                return false;
            });
        });

        // Update the bookingRecords state with the filtered result
        setBookingRecords(filteredRecords);
    };
    const handleReset = () => {
        setSearchInput('');
        window.location.reload(); // Refreshes the page
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
        <div>
            <div className="flex items-center justify-center mb-4 mt-8">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 w-64" // Adjust the width as needed
                />
                <button
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none "
                    onClick={handleSearch}>
                    Search
                </button>
                <button
                    onClick={handleReset}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none ml-4"
                >
                    Reset
                </button>
            </div>
            <div className="flex items-center justify-center mb-4">
                <Link to="/booking">
                    <button
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none "
                    >
                        Add Another Booking
                    </button>
                </Link>
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
