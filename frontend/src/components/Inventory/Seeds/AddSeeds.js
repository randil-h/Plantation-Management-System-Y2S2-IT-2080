import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddSeeds = () => {
    const [add_seed, setAdd_seed] = useState('');
    const [seedadd_no, setSeedadd_no] = useState('');
    const [seed_store, setSeed_store] = useState('');
    const [seed_stock, setSeed_stock] = useState('');
    const [seed_expire, setSeed_expire] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            add_seed,
            seedadd_no,
            seed_store,
            seed_stock,
            seed_expire
        };
        axios
            .post('http://localhost:5555/seedRecords', data)
            .then(() => {
                enqueueSnackbar('Record Created successfully', { variant: 'success' });
                navigate('/seedlist', { state: { highlighted: true } }); // Navigate to maintenance log and highlight it
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
                    Add Seeds
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="add_seed" className="block text-sm font-medium leading-6 text-gray-900">
                                    Seed Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="add_seed"
                                        value={add_seed}
                                        onChange={(e) => setAdd_seed(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="seedadd_no"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Serial No
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="seedadd_no"
                                        value={seedadd_no}
                                        onChange={(e) => setSeedadd_no(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="seed_store"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Storage Location
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="seed_store"
                                        value={seed_store}
                                        onChange={(e) => setSeed_store(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option>Warehouse 1</option>
                                        <option>Warehouse 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="seed_stock"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Stock Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="seed_stock"
                                        value={seed_stock}
                                        onChange={(e) => setSeed_stock(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="seed_expire"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Expired Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="seed_expire"
                                        value={seed_expire}
                                        onChange={(e) => setSeed_expire(e.target.value)}
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

export default AddSeeds;