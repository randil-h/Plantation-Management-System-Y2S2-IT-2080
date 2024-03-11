import React, { useState } from "react";
import axios from "axios";

export default function RecordRotation() {
    const [formData, setFormData] = useState({
        season: '',
        fieldName: '',
        cropType: '',
        variety: '',
        quantity: '',
        yield: '',
        remarks: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5555/rotation', formData);
            console.log(response.data);
            setFormData({
                season: '',
                fieldName: '',
                cropType: '',
                variety: '',
                quantity: '',
                yield: '',
                remarks: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="relative w-full flex justify-center items-start">
            <div className="ml-2/3 mt-16">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-x-0 top-0 flex justify-cente pb-16">
                    Record Rotation
                </h1>
            </div>
            <form
                className="max-w-md mt-16 p-4 bg-gray-200 rounded-lg"
                onSubmit={handleSubmit}
                method = "post"
            >
                <label htmlFor="season" className="block pb-4">
                    Season
                </label>
                <select
                    id="season"
                    name="season"
                    onChange={handleChange}
                    value={formData.season}
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="2023 Oct - 2024 May">2023 Oct - 2024 May</option>
                    <option value="2023 May - 2023 Oct">2023 May - 2023 Oct</option>
                    <option value="2022 Oct - 2023 May">2022 Oct - 2023 May</option>
                </select>
                <label htmlFor="fieldName" className="block pb-4">
                    Field Name
                </label>
                <select
                    id="fieldName"
                    name="fieldName"
                    onChange={handleChange}
                    value={formData.fieldName}
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="fieldA">Field A</option>
                    <option value="fieldB">Field B</option>
                    <option value="fieldC">Field C</option>
                </select>

                <label htmlFor="cropType" className="block mb-4">
                    Crop Type
                </label>
                <select
                    id="cropType"
                    name="cropType"
                    onChange={handleChange}
                    value={formData.cropType}
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500"
                >
                    <option value="coconut">Coconut</option>
                    <option value="guava">Guava</option>
                    <option value="papaw">Papaya</option>
                </select>

                <label htmlFor="variety" className="block mb-4">
                    Seed Variety:
                </label>
                <input
                    type="text"
                    id="variety"
                    name="variety"
                    onChange={handleChange}
                    value={formData.variety}
                    className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                    required
                />

                <label htmlFor="quantity" className="block mb-4">
                    Seed Quantity:
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    onChange={handleChange}
                    value={formData.quantity}
                    className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                    min="0"
                    required
                />

                <label htmlFor="yield" className="block mb-4">
                    Yield (mt/ha)
                </label>
                <input
                    type="number"
                    id="yield"
                    name="yield"
                    onChange={handleChange}
                    value={formData.yield}
                    className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                    min="0"
                    required
                />

                <label htmlFor="remarks" className="block mb-4">
                    Remarks:
                </label>
                <input
                    type="text"
                    id="remarks"
                    name="remarks"
                    onChange={handleChange}
                    value={formData.remarks}
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Type Here.."
                    required
                />

                <button
                    type="submit"
                    className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
