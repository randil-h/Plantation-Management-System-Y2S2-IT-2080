import React from "react";

export default function AddSeeds() {
    return (
        <div className="relative w-full flex justify-center items-start">
            <div className="ml-2/3 mt-16">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-x-0 top-0 flex justify-cente pb-16">
                    Record Rotation
                </h1>
            </div>
            <form className="max-w-md mt-16 p-4 bg-gray-200 rounded-lg">
                <label htmlFor="seasons" className="block pb-4">
                    Season
                </label>
                <select id="seasons" name="seasons" className="w-full p-2 border rounded mb-4">
                    <option value="Season1">2023 Oct - 2024 May</option>
                    <option value="Season2">2023 May - 2023 Oct</option>
                    <option value="Season3">2022 Oct - 2023 May</option>
                </select>
                <label htmlFor="fields" className="block pb-4">
                    Field Name
                </label>
                <select id="fields" name="fields" className="w-full p-2 border rounded mb-4">
                    <option value="fieldA">Field A</option>
                    <option value="fieldB">Field B</option>
                    <option value="fieldC">Field C</option>
                </select>

                <label className="block mb-4">
                    Crop Type:
                </label>
                <select
                    id="cropType"
                    name="cropType"
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500">
                    <option value="coconut">Coconut</option>
                    <option value="guava">Guava</option>
                    <option value="papaw">Papaya</option>
                </select>

                <label className="block mb-4">
                    Seed Variety:
                    <input
                        type="text"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Seed Quantity:
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        min="0"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Yield (mt/ha)
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        min="0"
                        required
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
                    className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4">
                    Save
                </button>
            </form>
        </div>
    );
};
