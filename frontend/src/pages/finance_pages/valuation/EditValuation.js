import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {SnackbarProvider, useSnackbar} from 'notistack';
import axios from 'axios';
import Navbar from '../../../components/utility/Navbar';
import SideBar from '../../../components/SideBar';
import FinanceNavigation from '../../../components/finances/FinanceNavigation';
import Breadcrumb from '../../../components/utility/Breadcrumbs';
import BackButton from '../../../components/utility/BackButton';
import {message} from "antd";

function EditValuation() {
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [subtype, setSubType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [payerPayee, setPayerPayee] = useState('');
    const [appreciationOrDepreciation, setAppreciationOrDepreciation] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://elemahana-backend.vercel.app/valuation/${id}`)
            .then((response) => {
                setDate(response.data.date);
                setType(response.data.type);
                setSubType(response.data.subtype);
                setQuantity(response.data.quantity);
                setPrice(response.data.price);
                setDescription(response.data.description);
                setPayerPayee(response.data.payer_payee);
                setAppreciationOrDepreciation(response.data.appreciationOrDepreciation);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    const handleEditValuationRecord = async (e) => {
        e.preventDefault();

        if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
            message.warning('Quantity and price must be positive numbers.');
            return;
        }
        if (!date || !type || !subtype || !quantity || !price || !description || !payerPayee || !appreciationOrDepreciation) {
            message.warning('Please fill in all fields. The record will not be saved with incomplete data');
            return;
        }

        if (!date || new Date(date) > new Date()) {
            message.warning('Please select a date on or before today.');
            return;
        }
        const data = {
            date,
            type,
            subtype,
            quantity,
            price,
            description,
            payer_payee: payerPayee,
            appreciationOrDepreciation,
        };
        setLoading(true);
        axios
            .put(`https://elemahana-backend.vercel.app/valuation/${id}`, data)
            .then(() => {
                setLoading(false);
                message.success('Valuation record has successfully updated.');
                navigate('/finances/valuation');
            })
            .catch((error) => {
                setLoading(false);
                message.error('Valuation record updating failed.');
                console.log(error);
                navigate('/finances/valuation');
            });
    };

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Valuation', href: '/finances/valuation' },
        { name: 'Edit Valuation', href: '/finances/transactions/editValuation' },
    ];

    const handleCancel = () => {
        navigate(-1); // This will navigate back to the previous location in the history stack
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
        // Reset subtype when type changes
        setSubType('Loans');
    };

    return (
        <SnackbarProvider>
            <div className="">
                <Navbar/>
                <div className="">
                    <div className="grid sm:grid-cols-6 ">
                        <div className="col-span-1 sticky top-0">
                            <SideBar/>
                        </div>

                        <div className="w-full col-span-5 flex flex-col ">
                            <FinanceNavigation/>
                            <div className="flex flex-row">
                                <BackButton/>
                                <Breadcrumb items={breadcrumbItems}/>
                            </div>

                            <form className=" flex-col flex items-center justify-center">
                                <div className="space-y-12 px-0 pb-8 w-8/12 ">
                                    <div className="">
                                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <fieldset className="sm:col-span-4 gap-y-8">
                                                <legend
                                                    className="text-sm font-semibold leading-6 text-gray-900">Valuation
                                                    type
                                                </legend>
                                                <p className="mt-1 text-sm leading-6 text-gray-600">Specify whether this
                                                    is
                                                    an
                                                    asset or a liability</p>
                                                <div className="mt-6 gap-4 flex flex-row items-center ">
                                                    <div className="flex items-center gap-x-3 ">
                                                        <input
                                                            id="asset"
                                                            name="type"
                                                            type="radio"
                                                            value="asset"
                                                            checked={type === 'asset'}
                                                            onChange={handleTypeChange}
                                                            className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-600"
                                                        />
                                                        <label htmlFor="asset"
                                                               className="block text-sm font-medium leading-6 text-gray-900">
                                                            Asset
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-x-3 ">
                                                        <input
                                                            id="liability"
                                                            name="type"
                                                            type="radio"
                                                            value="liability"
                                                            checked={type === 'liability'}
                                                            onChange={handleTypeChange}
                                                            className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-600"
                                                        />
                                                        <label htmlFor="liability"
                                                               className="block text-sm font-medium leading-6 text-gray-900">
                                                            Liability
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label htmlFor="subtype"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Sub Type
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        name="subtype"
                                                        value={subtype}
                                                        onChange={(e) => setSubType(e.target.value)}
                                                        id="subtype"
                                                        autoComplete="subtype"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                    >


                                                        {type === 'asset' ? (
                                                            <>
                                                                <option>Land</option>
                                                                <option>Machinery</option>
                                                                <option>Crops</option>
                                                                <option>Infrastructure</option>
                                                                <option>Utilities</option>
                                                                <option>Water</option>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <option>Loan</option>
                                                                <option>Debts</option>
                                                                <option>Leases</option>
                                                                <option>Taxes</option>
                                                            </>

                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Date */}
                                            <div className="sm:col-span-3">
                                                <label htmlFor="date"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Date
                                                </label>
                                                <input
                                                    type="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    id="date"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            {/* Amount */}
                                            <div className="sm:col-span-3">
                                                <label htmlFor="quantity"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Quantity
                                                </label>
                                                <input
                                                    id="quantity"
                                                    name="quantity"
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    type="number"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label htmlFor="price"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Price
                                                </label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    type="number"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            {/* Description */}
                                            <div className="col-span-full">
                                                <label htmlFor="description"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    autoComplete="description"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            {/* Payer/Payee */}
                                            <div className="col-span-full">
                                                <label htmlFor="payer_payee"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Payer/Payee
                                                </label>
                                                <input
                                                    type="text"
                                                    name="payer_payee"
                                                    value={payerPayee}
                                                    onChange={(e) => setPayerPayee(e.target.value)}
                                                    id="payer_payee"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            {/* Payment Method */}
                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label htmlFor="percentage"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Percentage
                                                </label>

                                                <input
                                                    name="appreciationOrDepreciation"
                                                    type="number"
                                                    value={appreciationOrDepreciation}
                                                    onChange={(e) => setAppreciationOrDepreciation(e.target.value)}
                                                    id="appreciationOrDepreciation"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div
                                className="h-14  sticky border-b z-10 bottom-0 left-0 right-0 bg-gray-100 bg-opacity-50 backdrop-blur border-t"
                                id="savebar">
                                <div
                                    className="flex justify-end gap-2 align-middle items-center text-sm font-semibold h-full pr-8 z-30">
                                    <button type="button"
                                            className="rounded-full bg-gray-300 px-4 py-1 hover:bg-gray-400 text-sm font-semibold  text-gray-900"
                                            onClick={handleCancel}>
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleEditValuationRecord}
                                        className="rounded-full bg-lime-200 px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                                    >
                                        Save
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SnackbarProvider>

    );
}

export default EditValuation;
