import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

const BookingList = () => {
    const [bookingRecords, setBookingRecords] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500"
                />
            </div>

            <Link to="/booking">
                <button
                    className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                    Add Booking
                </button>
            </Link>

            <div className="container mx-auto p-8 mt-16">
                <table
                    id="booking-table"
                    className="w-auto bg-white shadow-md rounded-md overflow-hidden"
                >
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border border-gray-400">No</th>
                        <th className="py-2 px-4 border border-gray-400">Date</th>
                        <th className="py-2 px-4 border border-gray-400">Name</th>
                        <th className="py-2 px-4 border border-gray-400">Tel No</th>
                        <th className="py-2 px-4 border border-gray-400">NIC No</th>
                        <th className="py-2 px-4 border border-gray-400">Email</th>
                        <th className="py-2 px-4 border border-gray-400">No Of People</th>
                        <th className="py-2 px-4 border border-gray-400">Package</th>
                        {/* Conditionally show the column based on the selected package */}
                        {bookingRecords.some(record => record.selectedPackage === 'guidedFarmTour') && (
                            <th className="py-2 px-4 border border-gray-400">Number of Days</th>
                        )}
                        <th className="py-2 px-4 border border-gray-400">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                            <td className="py-2 px-4 border border-gray-400">{index + 1}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.date}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.name}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.telNo}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.nicNo}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.email}</td>
                            <th className="py-2 px-4 border border-gray-400">{record.numberOfPeople}</th>
                            <td className="py-2 px-4 border border-gray-400">{mapPackageName(record.selectedPackage)}</td>
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

export default BookingList;
