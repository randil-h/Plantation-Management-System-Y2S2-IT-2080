import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditChemicalFinances = () => {
    const [chem_n, setChem_n] = useState('');
    const [chembill_no, setChembill_no] = useState('');
    const [chem_name, setChem_name] = useState('');
    const [chem_purchase, setChem_purchase] = useState('');
    const [chem_expire, setChem_expire] = useState('');
    const [chem_unit, setChem_unit] = useState('');
    const [chem_bulk, setChem_bulk] = useState('');
    const [chem_tot, setChem_tot] = useState('');
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams(); // Extracting id from route parameters

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/chemicalFinancesRecords/${id}`)
            .then((response) => {
                setChem_n(response.data.chem_n);
                setChembill_no(response.data.chembill_no);
                setChem_name(response.data.chem_name);
                setChem_purchase(response.data.chem_purchase.split("T")[0]);
                setChem_expire(response.data.chem_expire.split("T")[0]);
                setChem_unit(response.data.chem_unit);
                setChem_bulk(response.data.chem_bulk);
                setChem_tot(response.data.chem_tot);

                setLoading(false);
            }).catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
            console.log(error);
        });
    }, [id]); // Adding id to dependency array

    const handleEdit = () => {
        const data = {
            chem_n,
            chembill_no,
            chem_name,
            chem_purchase,
            chem_expire,
            chem_unit,
            chem_bulk,
            chem_tot
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/chemicalFinancesRecords/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Record Edited successfully', { variant: 'success' });
                navigate('/chemicallist', { state: { highlighted: true } });
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
                                <label htmlFor="chem_n" className="block text-sm font-medium leading-6 text-gray-900">
                                    Chemical Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chem_n"
                                        value={chem_n}
                                        onChange={(e) => setChem_n(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="chembill_no"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bill No
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chembill_no"
                                        value={chembill_no}
                                        onChange={(e) => setChembill_no(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="chem_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chem_name"
                                        value={chem_name}
                                        onChange={(e) => setChem_name(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="chem_purchase"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Purchased Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="chem_purchase"
                                        value={chem_purchase}
                                        onChange={(e) => setChem_purchase(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="chem_expire"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Expired Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="chem_expire"
                                        value={chem_expire}
                                        onChange={(e) => setChem_expire(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="chem_unit"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Unit Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chem_unit"
                                        value={chem_unit}
                                        onChange={(e) => setChem_unit(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="chem_bulk"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Bulk Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chem_bulk"
                                        value={chem_bulk}
                                        onChange={(e) => setChem_bulk(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="chem_tot"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Total Cost
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chem_tot"
                                        value={chem_tot}
                                        onChange={(e) => setChem_tot(e.target.value)}
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

export default EditChemicalFinances;
