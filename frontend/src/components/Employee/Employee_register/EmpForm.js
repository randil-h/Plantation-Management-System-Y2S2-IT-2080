import React from "react";

export default function EmpForm (){
    return(
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Employee Registration Form</h1>
            <form className="max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">First Name:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Last Name:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Date of Birth:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Gender:</label>
                    <select required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">

                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Contact Number:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">NIC:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Address:</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >

                    </textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Employee Type:</label>
                    <select required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">

                        <option value="">Select Type</option>
                        <option value="male">Trainee</option>
                        <option value="female">Farmer</option>
                        <option value="male">Manager</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Work qualifications:</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >

                    </textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Hired Date:</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
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
