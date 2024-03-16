// Booking.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        telNo: '',
        nicNo: '',
        email: '',
        selectedPackage: '',
        date: '',
        numberOfDays:'',

    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            if (name === "selectedPackage" && value !== "guidedFarmTour") {
                // If selected package is not guidedFarmTour, clear numberOfDays
                return { ...prevData, [name]: value, numberOfDays: '' };
            } else {
                return { ...prevData, [name]: value };
            }
        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(('http://localhost:5555/booking'), formData);
        console.log(response.data);
        setFormData({
            name: '',
            telNo: '',
            nicNo: '',
            email: '',
            selectedPackage: '',
            date: '',
        });

        // Redirect to a confirmation page or any other page after successful submission
        navigate('/payment');
    } catch (error) {
        console.log(error.message);
    }
};
return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-4 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Join With Us to Explore the Farm</h2>
        <form onSubmit={handleSubmit} method="post">
            <div><br/></div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div><br/></div>
            <div className="mb-4">
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                    Contact Number
                </label>
                <input
                    type="tel"
                    id="telNo"
                    name="telNo"
                    value={formData.telNo}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div><br/></div>
            <div className="mb-4">
                <label htmlFor="nicNumber" className="block text-sm font-medium text-gray-700">
                    NIC Number
                </label>
                <input
                    type="text"
                    id="nicNo"
                    name="nicNo"
                    value={formData.nicNo}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div><br/></div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div><br/></div>
            <div className="mb-4">
                <label htmlFor="selectedPackage" className="block text-sm font-medium text-gray-700">
                    Package Type
                </label>
                <select
                    id="selectedPackage"
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                >
                    <option value="fruitAndVegetablePicking">Fruit and Vegetable Picking</option>
                    <option value="farmChoreExperience">Farm Chore Experience</option>
                    <option value="guidedFarmTour">Guided Farm Tour</option>
                </select>
            </div>
            <div><br/></div>
            {/* Conditional rendering based on the selected package */}
            {formData.selectedPackage === 'guidedFarmTour' && (
                <div className="mb-4">
                    <label htmlFor="numberOfDays" className="block text-sm font-medium text-gray-700">
                        Number of Days for the Stay
                    </label>
                    <input
                        type="number"
                        id="numberOfDays"
                        name="numberOfDays"
                        value={formData.numberOfDays}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
            )}

            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date for Booking
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div><br/></div>
            <button type="submit" className="bg-black text-white p-2 rounded-md w-full hover:bg-emerald-700">
                Book Now
            </button>

        </form>
    </div>

);


};