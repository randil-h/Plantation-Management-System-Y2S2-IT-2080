import React from "react";

export default function Salaryform(){
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-5">Assign Salary</h1>
            <form className="max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Employee ID:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Month:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Basic salary:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">OT Hours:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">OT Rate:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">OT Total:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Bonus:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Total Salary:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
                    >
                        Assign Salary
                    </button>
                    <button
                        type="button"
                        className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
};