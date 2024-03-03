import React, { useState } from "react";
import axios from "axios";

export default function AddChemical() {
    const [formData, setFormData] = useState({
        date: '',
        fieldName: '',
        chemicalType: '',
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
            const response = await axios.post('http://localhost:5555/chemicals', formData);
            console.log(response.data);
            setFormData({
                date: '',
                fieldName: '',
                chemicalType: '',
                quantity: '',
                unitCost: '',
                remarks: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="relative w-full flex justify-center items-start">
            <div className="ml-2/3 mt-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-x-0 top-0 flex justify-cente pb-16 mt-4">
                    Add Chemicals
                </h1>
            </div>
            <form 
                className="max-w-md ml-1/3 mt-16 p-4 bg-gray-200 rounded-lg"
                onSubmit = {handleSubmit}
                method = "post"
            >
                <label htmlFor="date" className="block pb-4">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleChange}
                    value = {formData.date}
                    className="w-full p-2 border rounded mb-4 bg-opacity-80 backdrop-blur-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="fields" className="block pb-4">
                    Field Name
                </label>
                <select id="fields" name="fieldName" onChange={handleChange} value = {formData.fieldName} className="w-full p-2 border rounded mb-4">
                    <option value="fieldA">Field A</option>
                    <option value="fieldB">Field B</option>
                    <option value="fieldC">Field C</option>
                </select>

                <label className="block mb-4">
                    Chemical Type:
                    <input
                        type="text"
                        id = "chemicalType"
                        name = "chemicalType"
                        onChange={handleChange}
                        value = {formData.chemicalType}
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
                        id = "quantity"
                        name = "quantity"
                        onChange={handleChange}
                        value = {formData.quantity}
                        min="0"
                    />
                </label>

                <label className="block mb-4">
                    Unit Cost: 
                    <input
                        type="number"
                        className="w-full p-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:shadow-md"
                        required
                        min="0"
                        name = "unitCost"
                        id = "unitCost"
                        onChange={handleChange}
                        value = {formData.unitCost}
                    />
                </label>

                <label className="block mb-4">
                    Remarks:
                    <input type="text"
                           className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Type Here.."
                           name = "remarks"
                           id = "remarks"
                           onChange={handleChange}
                           value = {formData.remarks}
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
