// BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        telNo: '',
        nicNo: '',
        email: '',
        selectedPackage: 'guidedFarmTour',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // Implement your booking logic here
        console.log('Booking submitted:', formData);
        // Reset form data after submission if needed
        // setFormData({ name: '', contactNumber: '', nicNumber: '', email: '', selectedPackage: 'guidedFarmTours', date: '' });
    };

    return (
        <div className="max-w-md mx-auto mt-8 mb-8 p-6 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Join With Us to Explore the Farm</h2>
            <form onSubmit={handleBookingSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        id="telNo"
                        name="telNo"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nicNumber" className="block text-sm font-medium text-gray-700">
                        NIC Number
                    </label>
                    <input
                        type="text"
                        id="nicNo"
                        name="nicNo"
                        value={formData.nicNumber}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
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
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="selectedPackage" className="block text-sm font-medium text-gray-700">
                        Package Type
                    </label>
                    <select
                        id="selectedPackage"
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="guidedFarmTour">Guided Farm Tour</option>
                        <option value="fruitAndVegetablePicking">Fruit and Vegetable Picking</option>
                        <option value="farmChoreExperience">Farm Chore Experience</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date for Booking
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="bg-black text-white p-2 rounded-md mx-auto block hover:bg-emerald-700">
                    Book Now
                </button>
            </form>
        </div>

    );
};

export default BookingForm;
