import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { InformationCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { GoAlert } from "react-icons/go";
import { useSnackbar } from 'notistack'; // Import useSnackbar hook

const InventoryRecordList = () => {
    const { enqueueSnackbar } = useSnackbar(); // Destructure enqueueSnackbar from useSnackbar hook
    const [inventoryInputs, setInventoryInputs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFieldFilter, setSelectedFieldFilter] = useState('All Fields');
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://elemahana-mern-8d9r.vercel.app/inventoryinputs`)
            .then((response) => {
                setInventoryInputs(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const [selectedRecordId, setSelectedRecordId] = useState(null);
    const handleDelete = (recordId) => {
        // Store the record id in state
        setSelectedRecordId(recordId);
        setShowConfirmation(true);
    };
    const handleConfirmDelete = () => {
        const recordId = selectedRecordId;
        axios
            .delete(`https://elemahana-mern-8d9r.vercel.app/inventoryinputs/${recordId}`)
            .then(() => {
                setInventoryInputs((prevInputs) => prevInputs.filter((input) => input._id !== recordId));
                setShowConfirmation(false);
                enqueueSnackbar('Record Deleted Successfully!', {
                    variant: 'success',
                    autoHideDuration: 6000,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Error deleting record. Please try again later.', {
                    variant: 'error',
                    autoHideDuration: 6000,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
            });
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    useEffect(() => {
        setFilteredRecords(
            inventoryInputs.filter((record) =>
                ((selectedFieldFilter === 'All Types' || record.type.toLowerCase() === selectedFieldFilter.toLowerCase()) &&
                    (
                        (record.type && record.type.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.record_ID && record.record_ID.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.record_name && record.record_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.storage && record.storage.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.size && record.size.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.unit && record.unit.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.quantity && record.quantity.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.expire_date && record.expire_date.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (record.description && record.description.toLowerCase().includes(searchQuery.toLowerCase()))
                    ))
            )
        );
    }, [inventoryInputs, searchQuery, selectedFieldFilter]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFieldFilterChange = (event) => {
        setSelectedFieldFilter(event.target.value);
    };

    const fieldOptions = ['All Types', 'Planting', 'Agrochemical', 'Equipments', 'Fertilizer'];
    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        setFilteredRecords(inventoryInputs);
    }, [inventoryInputs]);

    const handlePrint = () => {
        const input = document.getElementById('inventory-table');
        if (input) {
            const currentDate = new Date().toLocaleString('en-GB');

            html2canvas(input)
                .then((canvas) => {
                    const pdf = new jsPDF('l', 'mm', 'a3');

                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const textWidth = pdf.getStringUnitWidth('Inventory Records') * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
                    const centerPosition = (pageWidth - textWidth) / 2;

                    // Calculate total number of records
                    const totalRecords = input.querySelectorAll('tbody > tr').length;

                    pdf.setFontSize(16);
                    pdf.text('Inventory Records', centerPosition, 10);
                    pdf.setFontSize(12);
                    pdf.text(`As At: ${currentDate}`, centerPosition, 20);

                    // Display total records count
                    pdf.text(`Total Number of Records: ${totalRecords}`, 10, 30);

                    const yPos = 40;

                    // Columns to include in PDF
                    const includedColumns = ['No', 'Type', 'Record ID', 'Name', 'Storage Location', 'Quantity', 'Expire Date', 'Description'];

                    const rows = input.querySelectorAll('tbody > tr');
                    const columns = input.querySelectorAll('thead > tr > th');

                    const data = [];
                    rows.forEach((row) => {
                        const rowData = [];
                        const cells = row.querySelectorAll('td');
                        cells.forEach((cell, index) => {
                            const columnName = columns[index].textContent.trim();
                            if (includedColumns.includes(columnName)) {
                                rowData.push(cell.textContent.trim());
                            }
                        });
                        data.push(rowData);
                    });

                    pdf.autoTable({
                        head: [includedColumns], // Use included columns as header
                        body: data, // Use filtered data for the body
                        startY: yPos + 10,
                        theme: 'grid',
                    });

                    pdf.save(`inventory-records_generatedAt_${currentDate}.pdf`);
                })
                .catch((error) => {
                    console.error('Error generating PDF:', error);
                });
        } else {
            console.error('Table element not found');
        }
    };

    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Inventory Records</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored Inventory Records
                        within the system for thorough insights.</p>
                    <div className=" py-4">
                        <input
                            type="text"
                            placeholder="Search all maintenances records..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="border border-gray-300 rounded-full px-3 py-1 w-auto"
                        />
                        <select
                            value={selectedFieldFilter}
                            onChange={handleFieldFilterChange}
                            className="ml-3 border border-gray-300 rounded-full px-8 py-1"
                        >
                            {fieldOptions.map((field, index) => (
                                <option key={index} value={field}>{field}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <a href="/inventory/inventoryrecords/addinventoryrecordspage"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new inventory record <span aria-hidden="true">&rarr;</span>
                    </a>
                    <button
                        onClick={handlePrint}
                        className="ml-4 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Print
                    </button>
                </div>
            </div>
            <div>
                <div id="print-area">
                    <table
                        id = "inventory-table"
                        className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
                        <thead
                            className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                        <tr className=" ">
                            <th></th>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Record ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Storage Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expire Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
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
                        <tbody className="border-b border-green-400">

                        {filteredRecords.map((record, index) => (
                            <tr
                                key={index}
                                className={`divide-y ${
                                    record.type === 'Planting' ? 'border-l-4 border-green-400' : record.type === 'Equipments' ? 'border-l-4 border-red-400' : record.type === 'Agrochemical' ? 'border-l-4 border-blue-400' : 'border-l-4 border-yellow-900'}`}>
                                <td></td>
                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4">
                                    {record.type}
                                </td>
                                <td className="px-6 py-4">
                                    {record.record_ID}
                                </td>
                                <td className="px-6 py-4">
                                    {record.record_name}
                                </td>
                                <td className="px-6 py-4">
                                    {record.storage}
                                </td>
                                <td className="px-6 py-4">
                                    {record.size ? record.size : "N/A"}
                                </td>
                                <td className="px-6 py-4">
                                    {record.unit ? record.unit : "N/A"}
                                </td>
                                <td className="px-6 py-4">
                                    {record.quantity}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {record.expire_date ? new Date(record.expire_date).toISOString().split('T')[0] : "N/A"}
                                </td>
                                <td className="px-6 py-4">
                                    {record.description}
                                </td>
                                <td className=" py-4 text-right">
                                    <Link to={`/inventory/inventoryrecords/viewRecord/${record._id}`}
                                          className="font-medium text-blue-600  hover:underline">
                                        <InformationCircleIcon
                                            className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                            aria-hidden="true"/>
                                    </Link>
                                </td>
                                <td className=" py-4 text-right">
                                    <Link to={`/inventory/inventoryrecords/editinventorypage/${record._id}`}
                                          className="font-medium text-blue-600 hover:underline">
                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                    </Link>
                                </td>
                                <td className=" ">
                                    <button
                                        className="flex items-center"
                                        onClick={() => handleDelete(record._id)}>
                                        <TrashIcon
                                            className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                            aria-hidden="true"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* Confirmation Dialog */}
                    {showConfirmation && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
                            <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                                <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
                                <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
                                    <div className="md:flex items-center">
                                        <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                                            <GoAlert className="w-10 h-10" />
                                        </div>
                                        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                            <p className="font-bold">Confirm Deletion</p>
                                            <p className="text-sm text-gray-700 mt-1">Are you sure you want to delete this record?</p>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                                        <button onClick={handleConfirmDelete}
                                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 hover:bg-red-600 hover:text-white text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                                            Confirm
                                        </button>
                                        <button onClick={handleCancelDelete}
                                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 hover:bg-black hover:text-white rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default InventoryRecordList;
