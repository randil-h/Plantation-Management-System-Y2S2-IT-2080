import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";
import BackButton from "../../../components/utility/BackButton";

export default function AddNewTransaction() {

    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [payer_payee, setPayerPayee] = useState('');
    const [method, setMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();


    const handleSaveTransactionRecord = () => {
        const data = {
            date,
            type,
            amount,
            description,
            payer_payee,
            method,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/transactions/addTransactions', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Record Created successfully', { variant: 'success' });
                navigate('/transactions');
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happened. Please Check console');
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Transactions', href: '/finances/transactions' },
        { name: 'Add New Transaction', href: '/finances/transactions/addTransaction' },
    ];

    return (
        <div className="">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>

                        <form className=" flex-col flex items-center justify-center">
                            <div className="space-y-12 px-0 py-16 w-6/12 ">
                            <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                        <fieldset className="sm:col-span-4">
                                            <legend
                                                className="text-sm font-semibold leading-6 text-gray-900">Transaction
                                                type
                                            </legend>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">Specify whether this is
                                                an income or an expense</p>
                                            <div className="mt-6 space-y-6 flex flex-row align-middle">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="type"
                                                        name="type"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        value={type}
                                                        onChange={(e) => setType(e.target.value)}
                                                    />
                                                    <label htmlFor="push-everything"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Income
                                                    </label>
                                                </div>
                                                {/*
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="type"
                                                        name="type"
                                                        type="radio"
                                                        value={type}
                                                        onChange={(e) => setType(e.target.value)}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="push-email"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Expense
                                                    </label>
                                                </div> */}
                                            </div>
                                        </fieldset>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="date"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Date
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    id="date"
                                                    autoComplete="given-date"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="amount"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Amount
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="amount"
                                                    name="amount"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    type="text"
                                                    autoComplete="amount"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="description"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    defaultValue={''}
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    autoComplete="description"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="payer_payee"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Payer/Payee
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="payer_payee"
                                                    value={payer_payee}
                                                    onChange={(e) => setPayerPayee(e.target.value)}
                                                    id="payer_payee"
                                                    autoComplete="payer_payee"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2 sm:col-start-1">
                                            <label htmlFor="method"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Payment Method
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    name="method"
                                                    value={method}
                                                    onChange={(e) => setMethod(e.target.value)}
                                                    id="method"
                                                    autoComplete="method"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option>Cash</option>
                                                    <option>Online Transfer</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>


                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveTransactionRecord}
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
