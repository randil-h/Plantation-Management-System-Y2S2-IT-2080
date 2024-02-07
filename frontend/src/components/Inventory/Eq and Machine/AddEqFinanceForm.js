import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function AddEqFinanceForm() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Equipment / Machine Finances
                </h1>
            </div>
            <form className="max-w-md ml-96 mt-8 p-4 bg-gray-200 rounded-lg">
                <label className="block mb-4">
                    Equipment/Machine Name:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>
                <label className="block mb-4">
                    Company:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Seller Name:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Ordered Date:
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Received Date:
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Quantity Purchased:
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"

                    />
                </label>

                <label className="block mb-4">
                    Quality:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"

                    />
                </label>

                <button
                    type="submit"
                    className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4"
                >
                    Save
                </button>
            </form>
        </div>
    );
};