import React from "react";

export default function AddChemical() {
    return (
        <div className="relative w-full flex justify-center items-start">
            <div className="ml-2/3 mt-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-x-0 top-0 flex justify-cente pb-16 mt-4">
                    Add Chemicals
                </h1>
            </div>
            <form className="max-w-md ml-1/3 mt-16 p-4 bg-gray-200 rounded-lg">
                <label htmlFor="fields" className="block pb-4">
                    Field Name
                </label>
                <select id="fields" name="fields" className="w-full p-2 border rounded mb-4">
                    <option value="fieldA">Field A</option>
                    <option value="fieldB">Field B</option>
                    <option value="fieldC">Field C</option>
                </select>

                <label htmlFor="date" className="block pb-4">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-4">
                    Chemical Name:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Quantity:
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                        min="0"
                    />
                </label>

                <label className="block mb-4">
                    Cost:
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                        min="0"
                    />
                </label>

                <label className="block mb-4">
                    Remarks:
                    <input type="text"
                           className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Type Here.."
                    />
                </label>

                    <button
                        type="submit"
                        className="bg-black text-white py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4 w-full"
                    >
                        Add Chemical
                    </button>
            </form>
        </div>
);
};
