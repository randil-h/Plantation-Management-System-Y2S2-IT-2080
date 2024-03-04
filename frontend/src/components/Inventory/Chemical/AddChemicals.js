import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddChemicals = () => {
    const [add_chemical, setAdd_chemical] = useState('');
    const [chemicaladd_no, setChemicaladd_no] = useState('');
    const [chemical_store, setChemical_store] = useState('');
    const [chemical_stock, setChemical_stock] = useState('');
    const [chemical_expire, setChemical_expire] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            add_chemical,
            chemicaladd_no,
            chemical_store,
            chemical_stock,
            chemical_expire
        };
        axios
            .post('http://localhost:5555/chemicalRecords', data)
            .then(() => {
                enqueueSnackbar('Record Created successfully', { variant: 'success' });
                navigate('/chemicallist', { state: { highlighted: true } }); // Navigate to maintenance log and highlight it
            })
            .catch((error) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Chemicals
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="add_chemical" className="block text-sm font-medium leading-6 text-gray-900">
                                    Chemical Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="add_chemical"
                                        value={add_chemical}
                                        onChange={(e) => setAdd_chemical(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="chemicaladd_no"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Serial No
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chemicaladd_no"
                                        value={chemicaladd_no}
                                        onChange={(e) => setChemicaladd_no(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="chemical_store"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Storage Location
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="chemical_store"
                                        value={chemical_store}
                                        onChange={(e) => setChemical_store(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option>Warehouse 1</option>
                                        <option>Warehouse 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="chemical_stock"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Stock Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="chemical_stock"
                                        value={chemical_stock}
                                        onChange={(e) => setChemical_stock(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="chemical_expire"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Expired Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="chemical_expire"
                                        value={chemical_expire}
                                        onChange={(e) => setChemical_expire(e.target.value)}
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
};

export default AddChemicals;