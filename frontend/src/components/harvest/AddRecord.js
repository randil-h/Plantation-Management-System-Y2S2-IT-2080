import React from "react";

export default function AddRecord() {
    return (

        <div className="relative w-full flex justify-center items-start">
            <div className="ml-2/3 mt-16">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-x-0 top-0 flex justify-cente pb-16">
                    Record Harvestings
                </h1>
            </div>
            <form className="max-w-md mt-16 p-4 bg-gray-200 rounded-lg">
                <label htmlFor="date" className="block pb-4">
                    Date
                </label>
                <input
                    type="date"
                    className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                    required
                />

                <label className="block mb-4">
                    Crop Type:
                </label>
                <select
                    id="cropType"
                    name="cropType"
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500">
                    <option value="coconut">Coconut</option>
                    <option value="guava">Guava</option>
                    <option value="papaya">Papaya</option>
                </select>

                <label className="block mb-4">
                    Picked harvest (Kg)
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>



                <button
                    type="submit"
                    className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4">
                    Save
                </button>
            </form>
        </div>
    );
};





