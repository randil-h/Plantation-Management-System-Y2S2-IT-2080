import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import {FaEdit, FaPrint, FaSearch, FaTrash} from "react-icons/fa";
import axios from 'axios';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import html2canvas from 'html2canvas';
import {HiOutlineDownload} from "react-icons/hi";
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


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

const mapVisitorType = (visitorType) => {
    switch (visitorType) {
        case 'local':
            return 'Local';
        case 'foreign':
            return 'Foreign';
        default:
            return visitorType;
    }
};

const AllBookings = () => {
    const [originalRecords, setOriginalRecords] = useState([]);
    const [bookingRecords, setBookingRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [totalPayment, setTotalPayment] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://elemahana-backend.vercel.app/booking`)
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

    useEffect(() => {
        // Fetch total payment from the previous page if available
        const totalPaymentFromPreviousPage = location.state?.totalPayment;
        if (totalPaymentFromPreviousPage) {
            setTotalPayment(totalPaymentFromPreviousPage);
        }
    }, [location.state?.totalPayment]);

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
        const doc = new jsPDF('l', 'pt', 'a4');
        doc.setFontSize(12);

        const headers = [
            'No',
            'Date',
            'Name',
            'Tel No',
            'NIC No',
            'Email',
            'Type',
            'No Of People',
            'Package',
            bookingRecords.some(record => record.selectedPackage === 'guidedFarmTour') ? 'Number of Days' : '',
            'Paid Amount',
        ];

        const data = bookingRecords.map((record, index) => [
            index + 1,
            new Date(record.date).toLocaleDateString('en-GB'),
            record.name,
            record.telNo,
            record.nicNo,
            record.email,
            mapVisitorType(record.visitorType),
            record.numberOfPeople,
            mapPackageName(record.selectedPackage),
            record.selectedPackage === 'guidedFarmTour' ? record.numberOfDays : '',
            calculateTotalPayment(record),
        ]);

        const styles = {
            header: {
                fillColor: [202, 202, 202],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
            },
            alternateRow: {
                fillColor: [240, 240, 240],
            },
        };

        doc.autoTable({
            head: [headers],
            body: data,
            styles: styles,
            headStyles: { fillColor: [128, 128, 128] },
            alternateRowStyles: { fillColor: [240, 240, 240] },
            columnStyles: {
                0: { halign: 'center' },
                1: { halign: 'center' },
                2: { halign: 'left' },
                3: { halign: 'center' },
                4: { halign: 'center' },
                5: { halign: 'left' },
                6: { halign: 'center' },
                7: { halign: 'center' },
                8: { halign: 'left' },
                9: { halign: 'center' },
                10: { halign: 'right' },
            },
        });

        doc.save('booking-list.pdf');
    };
    const handleDelete = (recordId) => {
        axios
            .delete(`https://elemahana-backend.vercel.app/booking/${recordId}`)
            .then(() => {
                setBookingRecords(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const calculateTotalPayment = (record) => {
        const { selectedPackage, numberOfDays, numberOfPeople, visitorType } = record;
        let price = 0;

        switch (selectedPackage) {
            case 'fruitAndVegetablePicking':
                price = visitorType === 'foreign' ? 700 * parseInt(numberOfPeople) : 300 * parseInt(numberOfPeople);
                break;
            case 'farmChoreExperience':
                price = visitorType === 'foreign' ? 2500 * parseInt(numberOfPeople) : 1200 * parseInt(numberOfPeople);
                break;
            case 'guidedFarmTour':
                price = visitorType === 'foreign' ? 700 * parseInt(numberOfDays) * parseInt(numberOfPeople) : 700 * parseInt(numberOfDays) * parseInt(numberOfPeople);
                break;
            default:
                price = 0;
        }

        return `${price}/=`;
    };

    const calculateTotalAmount = () => {
        let total = 0;
        bookingRecords.forEach(record => {
            total += parseFloat(calculateTotalPayment(record));
        });
        return total.toFixed(2); // Format the total to display with two decimal places
    };


    return (
        <div className="mx-6">
            <p className="text-center text-3xl font-bold mt-5">All Bookings</p>
            <div className="flex items-center justify-between mb-4 mt-8">

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleSearch}
                        className="border rounded-full px-3 py-1 pl-10 focus:outline-none focus:border-blue-500 ml-5" // Adjust the width as needed
                    />
                    <FaSearch className="absolute left-3 top-2 text-gray-400 ml-5"/>
                </div>
                <div className="bg-lime-200 rounded-lg px-7 py-3 mb-4 mr-28">
                    <p className="text-center text-black font-light">Total Bookings: {bookingRecords.length}</p>
                    <p className="text-black font-light">Total Amount: {calculateTotalAmount()}/=</p>

                </div>

                <div className="flex">
                    <button
                        className="bg-black text-white px-3 py-1 rounded-full hover:bg-emerald-700 focus:outline-none mr-4 flex items-center"
                        onClick={handlePrint}
                    >
                        Print Bookings <HiOutlineDownload className="ml-1"/>
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
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">No Of People</th>
                        <th className="px-6 py-3">Package</th>
                        {/* Conditionally show the column based on the selected package */}
                        {bookingRecords.some(record => record.selectedPackage === 'guidedFarmTour') && (
                            <th className="px-6 py-3">Number of Days</th>
                        )}
                        <th className="px-6 py-3">Paid Amount</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingRecords.map((record, index) => (
                        <tr className="hover:bg-gray-100 divide-y divide-gray-200 text-sm" key={index}>
                            <td className="px-6 py-3">{index + 1}</td>
                            <td className="px-6 py-3">{new Date(record.date).toLocaleDateString('en-GB')}</td>
                            <td className="px-6 py-3">{record.name}</td>
                            <td className="px-6 py-3">{record.telNo}</td>
                            <td className="px-6 py-3">{record.nicNo}</td>
                            <td className="px-6 py-3">{record.email}</td>
                            <th className="px-6 py-3">{mapVisitorType(record.visitorType)}</th>
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
                            <th className="px-6 py-3">{calculateTotalPayment(record)}</th>
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

export default AllBookings;
