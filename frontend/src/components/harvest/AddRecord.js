import React, { useState } from "react";
import axios from "axios";

export default function AddRecord() {
    const [date, setDate] = useState('');
    const [cropType, setCropType] = useState('');
    const [ageOfYield, setAgeOfYield] = useState('');
    const [wayPicked, setWayPicked] = useState('');
    const [quantity, setQuantity] = useState('');
    const [treesPicked, setTreesPicked] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                date,
                cropType,
                ageOfYield,
                wayPicked,
                quantity,
                treesPicked,
                remarks
            };
            await axios.post('http://localhost:5555/record', data);
            alert('Record submitted successfully!');

        } catch (error) {
            console.error('Error submitting record:', error);
            alert('An error occurred while submitting the record. Please try again.');
        }
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-2xl font-bold mb-5">Record Harvestings</h1>
                <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Date:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Crop Type:</label>
                        <select
                            value={cropType}
                            onChange={(e) => setCropType(e.target.value)}
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
                        <label className="block text-sm font-semibold mb-1">Age of the Yield (months):</label>
                        <input
                            type="text"
                            value={ageOfYield}
                            onChange={(e) => setAgeOfYield(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Way Picked:</label>
                        <input
                            type="text"
                            value={wayPicked}
                            onChange={(e) => setWayPicked(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Quantity (kg):</label>
                        <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Trees Picked:</label>
                        <input
                            type="text"
                            value={treesPicked}
                            onChange={(e) => setTreesPicked(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Remarks:</label>
                        <textarea
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
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
        </div>

    );
}
