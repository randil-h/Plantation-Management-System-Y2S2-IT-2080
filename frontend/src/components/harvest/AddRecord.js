import React from "react";

export default function AddRecord() {
    return (

        <div className=" mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Record Harvestings</h1>
            <form className="max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Date:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Crop Type:</label>
                    <select
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select Crop Type</option>
                        <option value="coconut">Coconut</option>
                        <option value="papaya">Papaya</option>
                        <option value="guava">Guava</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Age of the Yield (months) :</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Way Picked:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Quantity(kg) :</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Remarks:</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};





