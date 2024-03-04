import React, { useState } from "react";
import axios from "axios";

export default function AddPlanting() {
    const [formData, setFormData] = useState({
        date: '',
        fieldName: '',
        cropType: '',
        variety: '',
        quantity: '',
        unitCost: '',
        remarks: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5555/planting', formData);
            console.log(response.data);
            setFormData({
                date: '',
                fieldName: '',
                cropType: '',
                variety: '',
                quantity: '',
                unitCost: '',
                remarks: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="pt-2">
            <div className="flex flex-col ml-1/3 mt-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Seeds/Plants
                </h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="max-w-md ml-1/3 mt-8 p-4 bg-gray-200 rounded-lg"
            >
                <label htmlFor="date" className="block pb-4">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleChange}
                    value={formData.date}
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="fields" className="block pb-4">
                    Field Name
                </label>
                <select
                    id="fields"
                    name="fieldName"
                    onChange={handleChange}
                    value={formData.fieldName}
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="fieldA">Field A</option>
                    <option value="fieldB">Field B</option>
                    <option value="fieldC">Field C</option>
                </select>

                <label className="block mb-4">
                    Crop Type:
                    <input
                        type="text"
                        id="cropType"
                        name="cropType"
                        onChange={handleChange}
                        value={formData.cropType}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Variety:
                    <input
                        type="text"
                        id="variety"
                        name="variety"
                        onChange={handleChange}
                        value={formData.variety}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Quantity:
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        onChange={handleChange}
                        value={formData.quantity}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                    />
                </label>
                <label className="block mb-4">
                    Unit Cost:
                    <input
                        type="number"
                        id="unitCost"
                        name="unitCost"
                        onChange={handleChange}
                        value={formData.unitCost}
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        min="0"
                        required
                    />
                </label>
                <label className="block mb-4">
                    Remarks:
                    <input
                        type="text"
                        id="remarks"
                        name="remarks"
                        onChange={handleChange}
                        value={formData.remarks}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Type Here.."
                    />
                </label>

                <button
                    type="submit"
                    className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4"
                >
                    Add Planting
                </button>
            </form>
        </div>
    );
};
