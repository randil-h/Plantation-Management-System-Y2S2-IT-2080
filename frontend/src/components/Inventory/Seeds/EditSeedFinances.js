import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditSeedFinances = () => {
    const [fin_seed, setFin_seed] = useState('');
    const [finbill_no, setFinbill_no] = useState('');
    const [fin_name, setFin_name] = useState('');
    const [fin_purchase, setFin_purchase] = useState('');
    const [fin_expire, setFin_expire] = useState('');
    const [fin_unit, setFin_unit] = useState('');
    const [fin_bulk, setFin_bulk] = useState('');
    const [fin_tot, setFin_tot] = useState('');
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams(); // Extracting id from route parameters

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/seedFinancesRecords/${id}`)
            .then((response) => {
                setFin_seed(response.data.fin_seed);
                setFinbill_no(response.data.finbill_no);
                setFin_name(response.data.fin_name);
                setFin_purchase(response.data.fin_purchase.split("T")[0]);
                setFin_expire(response.data.fin_expire.split("T")[0]);
                setFin_unit(response.data.fin_unit);
                setFin_bulk(response.data.fin_bulk);
                setFin_tot(response.data.fin_tot);

                setLoading(false);
            }).catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
            console.log(error);
        });
    }, [id]); // Adding id to dependency array

    const handleEdit = () => {
        const data = {
            fin_seed,
            finbill_no,
            fin_name,
            fin_purchase,
            fin_expire,
            fin_unit,
            fin_bulk,
            fin_tot,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/seedFinancesRecords/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Record Edited successfully', { variant: 'success' });
                navigate('/seedlist', { state: { highlighted: true } });
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
                                <label htmlFor="fin_seed" className="block text-sm font-medium leading-6 text-gray-900">
                                    Seed Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fin_seed"
                                        value={fin_seed}
                                        onChange={(e) => setFin_seed(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="finbill_no"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bill No
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="finbill_no"
                                        value={finbill_no}
                                        onChange={(e) => setFinbill_no(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="fin_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fin_name"
                                        value={fin_name}
                                        onChange={(e) => setFin_name(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="fin_purchase"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Purchased Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="fin_purchase"
                                        value={fin_purchase}
                                        onChange={(e) => setFin_purchase(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="fin_expire"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Expired Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="fin_expire"
                                        value={fin_expire}
                                        onChange={(e) => setFin_expire(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="fin_unit"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Unit Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fin_unit"
                                        value={fin_unit}
                                        onChange={(e) => setFin_unit(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="fin_bulk"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bulk Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fin_bulk"
                                        value={fin_bulk}
                                        onChange={(e) => setFin_bulk(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="fin_tot"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Total Cost
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fin_tot"
                                        value={fin_tot}
                                        onChange={(e) => setFin_tot(e.target.value)}
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

export default EditSeedFinances;
