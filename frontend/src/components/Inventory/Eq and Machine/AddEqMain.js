import React, { useState } from "react";

export default function AddEqMain() {
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [payerPayee, setPayerPayee] = useState('');
    const [method, setMethod] = useState('');

    const handleSaveTransactionRecord = () => {
        // Handle saving transaction record here
    };

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
                            <label htmlFor="Eq_machine_main" className="block text-sm font-medium leading-6 text-gray-900">
                                Equipment / Machine Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Eq_machine_main"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="Eq_id_main" className="block text-sm font-medium leading-6 text-gray-900">
                                Equipment / Machine ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Eq_id_main"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="date_refferd" className="block text-sm font-medium leading-6 text-gray-900">
                                Date referred to
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="date_refferd"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="date_received"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Received date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="date_received"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="ref_loc" className="block text-sm font-medium leading-6 text-gray-900">
                                Referred location for maintenance
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="ref_loc"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                                Comment
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="comment"
                                    name="comment"
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
}
