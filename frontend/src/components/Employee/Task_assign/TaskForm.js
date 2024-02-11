import React from "react";
export default function TaskForm(){
    return (

        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-5">Assign Tasks</h1>
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
                    <label className="block text-sm font-semibold mb-1">Task:</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Assign Date:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Due Date:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="comments" className="block text-sm font-semibold mb-1">Comments/Notes:</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
                    >
                        Assign Task
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