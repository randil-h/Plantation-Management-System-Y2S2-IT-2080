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
        numberOfDays: '',
        numberOfPeople: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        // Validate name
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        // Validate contact number
        if (!formData.telNo.trim()) {
            errors.telNo = "Contact number is required";
        } else if (!/^\d+$/.test(formData.telNo)) {
            errors.telNo = "Invalid contact number";
        }

        // Validate NIC number
        if (!formData.nicNo.trim()) {
            errors.nicNo = "NIC number is required";
        } else if (!/^\d{9}[VvXx]?$/.test(formData.nicNo)) {
            errors.nicNo = "Invalid NIC number";
        }

        // Validate email
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email address";
        }

        // Validate selected package
        if (!formData.selectedPackage) {
            errors.selectedPackage = "Please select a package";
        }

        // Validate date
        if (!formData.date) {
            errors.date = "Date is required";
        }

        // Validate number of people
        if (!formData.numberOfPeople.trim()) {
            errors.numberOfPeople = "Number of people is required";
        } else if (!/^\d+$/.test(formData.numberOfPeople)) {
            errors.numberOfPeople = "Invalid number of people";
        }

        // Set the errors state
        setErrors(errors);

        // Check if there are any errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        const isValid = validateForm();

        if (isValid) {
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
                    numberOfPeople: '',
                });

                // Redirect to a confirmation page or any other page after successful submission
                navigate('/payment');
            } catch (error) {
                console.log(error.message);
            }
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
                        className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
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
                        className={`mt-1 p-2 w-full border rounded-md ${errors.telNo ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.telNo && <p className="text-red-500 text-sm">{errors.telNo}</p>}
                </div>
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
                        className={`mt-1 p-2 w-full border rounded-md ${errors.nicNo ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.nicNo && <p className="text-red-500 text-sm">{errors.nicNo}</p>}
                </div>
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
                        className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="selectedPackage" className="block text-sm font-medium text-gray-700">
                        Package Type
                    </label>
                    <select
                        id="selectedPackage"
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.selectedPackage ? 'border-red-500' : ''}`}
                        required
                    >
                        <option value="">Select Package</option>
                        <option value="fruitAndVegetablePicking">Fruit and Vegetable Picking</option>
                        <option value="farmChoreExperience">Farm Chore Experience</option>
                        <option value="guidedFarmTour">Guided Farm Tour</option>
                    </select>
                    {errors.selectedPackage && <p className="text-red-500 text-sm">{errors.selectedPackage}</p>}
                </div>
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
                            className={`mt-1 p-2 w-full border rounded-md ${errors.numberOfDays ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.numberOfDays && <p className="text-red-500 text-sm">{errors.numberOfDays}</p>}
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
                        className={`mt-1 p-2 w-full border rounded-md ${errors.date ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Number of People
                    </label>
                    <input
                        type="number"
                        id="numberOfPeople"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.numberOfPeople ? 'border-red-500' : ''}`}
                        required
                    />
                    {errors.numberOfPeople && <p className="text-red-500 text-sm">{errors.numberOfPeople}</p>}
                </div>
                <button type="submit" className="bg-black text-white p-2 rounded-md w-full hover:bg-emerald-700">
                    Book Now
                </button>
            </form>
        </div>
    );
}
