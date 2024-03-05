import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditEqFinances = () => {
    const [eq_n, setEq_n] = useState('');
    const [eqbill_no, setEqbill_no] = useState('');
    const [eq_name, setEq_name] = useState('');
    const [eq_purchase, setEq_purchase] = useState('');
    const [eq_unit, setEq_unit] = useState('');
    const [eq_bulk, setEq_bulk] = useState('');
    const [eq_tot, setEq_tot] = useState('');
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams(); // Extracting id from route parameters

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/eqFinancesRecords/${id}`)
            .then((response) => {
                setEq_n(response.data.eq_n);
                setEqbill_no(response.data.eqbill_no);
                setEq_name(response.data.eq_name);
                setEq_purchase(response.data.eq_purchase.split("T")[0]);
                setEq_unit(response.data.eq_unit);
                setEq_bulk(response.data.eq_bulk);
                setEq_tot(response.data.eq_tot);


                setLoading(false);
            }).catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
            console.log(error);
        });
    }, [id]); // Adding id to dependency array

    const handleEdit = () => {
        const data = {
            eq_n,
            eqbill_no,
            eq_name,
            eq_purchase,
            eq_unit,
            eq_bulk,
            eq_tot
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/eqFinancesRecords/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Record Edited successfully', { variant: 'success' });
                navigate('/eqfinances', { state: { highlighted: true } });
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Seeds
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleEdit}>
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="eq_n" className="block text-sm font-medium leading-6 text-gray-900">
                                    Equipment Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eq_n"
                                        value={eq_n}
                                        onChange={(e) => setEq_n(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="eqbill_no"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bill No
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eqbill_no"
                                        value={eqbill_no}
                                        onChange={(e) => setEqbill_no(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="eq_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eq_name"
                                        value={eq_name}
                                        onChange={(e) => setEq_name(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="eq_purchase"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Purchased Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="eq_purchase"
                                        value={eq_purchase}
                                        onChange={(e) => setEq_purchase(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="eq_unit"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Unit Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eq_unit"
                                        value={eq_unit}
                                        onChange={(e) => setEq_unit(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="eq_bulk"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bulk Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eq_bulk"
                                        value={eq_bulk}
                                        onChange={(e) => setEq_bulk(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="eq_tot"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Total Cost
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="eq_tot"
                                        value={eq_tot}
                                        onChange={(e) => setEq_tot(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default EditEqFinances;
