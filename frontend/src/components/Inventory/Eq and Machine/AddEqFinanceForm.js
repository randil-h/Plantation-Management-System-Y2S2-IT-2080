import React, { useState } from 'react';


export default function AddEqFinanceForm() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Equipment / Machine Finances
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center">
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="Eq_machine_fin"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Equipment / Machine Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Eq_machine_fin"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="company"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Company
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="company"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="sell_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="sell_name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="or_date_eq"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Ordered Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="or_date_eq"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="re_date_eq"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Received date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="re_date_eq"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="quan_finance" className="block text-sm font-medium leading-6 text-gray-900">
                                    Quantity Purchased
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="quan_finance"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="Quality_eq" className="block text-sm font-medium leading-6 text-gray-900">
                                    Quality
                                </label>
                                <div className="mt-2">
                                <textarea
                                    id="Quality_eq"
                                    name="Quality_eq"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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