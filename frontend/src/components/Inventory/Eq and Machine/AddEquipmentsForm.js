import React from "react";

export default function AddEquipmentsForm() {
    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Equipment / Machines
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

                <label htmlFor="fields" className="block pb-4">
                    Type:
                <select id="fields" name="fields" className="w-full p-2 border rounded mb-4">
                    <option value="warehouse1">Machine</option>
                    <option value="warehouse2">Equipment</option>
                </select></label>

                <label htmlFor="fields" className="block pb-4">
                    Storage Location:
                <select id="fields" name="fields" className="w-full p-2 border rounded mb-4">
                    <option value="warehouse1">Warehouse 1</option>
                    <option value="warehouse2">Warehouse 2</option>
                </select></label>

                <label className="block mb-4">
                    Quantity in Use:
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Comment:
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