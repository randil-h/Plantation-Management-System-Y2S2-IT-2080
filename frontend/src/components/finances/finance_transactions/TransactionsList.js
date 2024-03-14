import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaTrash} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";

export default function TransactionsList() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [TransactionsRecords, setTransactionsRecords] = useState([]);

    const handleDeleteTransaction = (id) => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/transactions/${id}`)
            .then(() => {
                setTransactionsRecords(prevRecords => prevRecords.filter(record => record._id !== id));
                setLoading(false);
                enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/transactions')
            .then((response) => {
                setTransactionsRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Transaction records</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Browse a list of all income
                        and expense records stored in the system</p>
                </div>

                <div>
                    <a href="/finances/transactions/addTransaction"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new transaction <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead
                    className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                <tr className=" ">
                    <th></th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Payer/Payee
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Payment Method
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

                {TransactionsRecords.map((record, index) => (
                    <tr key={record._id}
                        className={` divide-y
            ${record.type === 'expense' ? 'border-l-4 border-red-400 ' : 'border-l-4 border-green-400 '}`}
                    >
<td></td>
                        <td className="px-6 py-4">
                            {record.date}
                        </td>
                        <td className="px-6 py-4">
                            {record.type}
                        </td>
                        <td className="px-6 py-4">
                            {record.amount}
                        </td>
                        <td className="px-6 py-4">
                            {record.description}
                        </td>
                        <td className="px-6 py-4">
                            {record.payer_payee}
                        </td>
                        <td className="px-6 py-4">
                            {record.method}
                        </td>
                        <td className=" py-4 text-right">
                            <a href="/finances/transactions/viewTransactionDetails" className="font-medium text-blue-600  hover:underline">
                                <InformationCircleIcon
                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className=" py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                <PencilSquareIcon
                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className=" ">
                            <button
                              className="flex items-center"
                                onClick={() => handleDeleteTransaction(record._id)}
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
    )
}
