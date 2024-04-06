import React, {useEffect, useState} from "react";
import { TbShoppingCartCopy } from "react-icons/tb";
import {InformationCircleIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import axios from "axios";

const OrderHistory = () => {
    const [orderRecords, setOrderRecords] = useState([]);
    const [loading,setLoading] = useState(false);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/orederRecords')
            .then((response) =>{
                setOrderRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    return (

        <div class="bg-white p-8 rounded-md w-full">
            <div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Product ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    product Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Price
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Update
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Delete
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {(searchQuery ? filteredRecords : orderRecords).map((record, index) => (
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-3 h-10">
                                            </div>
                                            <div className="ml-2">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    RD25045
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {record.orderDate}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {record.orderQuantity}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Rs. 10000.00
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Wrapping
                                        </p>
                                    </td>
                                    {/*<td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm items-center">*/}
                                    {/*    <a href="#"*/}
                                    {/*       className="font-medium text-blue-600  hover:underline">*/}
                                    {/*        <InformationCircleIcon*/}
                                    {/*            className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500 mt-2"*/}
                                    {/*            aria-hidden="true"/>*/}
                                    {/*    </a>*/}
                                    {/*</td>*/}
                                    <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                        <PencilSquareIcon
                                            className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                            aria-hidden="true"/>
                                        {/*<Link*/}
                                        {/*    //to={`/editProduct/${record._id}`}*/}
                                        {/*      className="font-medium text-blue-600 hover:underline">*/}
                                        {/*    <PencilSquareIcon*/}
                                        {/*        className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"*/}
                                        {/*        aria-hidden="true"/>*/}
                                        {/*</Link>*/}
                                    </td>
                                    <td className=" ">
                                        <button
                                            className="flex items-center"
                                            //onClick={() => handleDelete(record._id)}

                                        >
                                            <TrashIcon
                                                className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                                aria-hidden="true"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;