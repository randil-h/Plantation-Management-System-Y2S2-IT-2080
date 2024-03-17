import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBooking = () => {
    const [name, setFullName] = useState('');
    const [telNo, setTelNo] = useState('');
    const [nicNo, setNicNo] = useState('');
    const [email, setEmail] = useState('');
    const [selectedPackage, setselectedPackage] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams(); // Extracting id from route parameters

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/booking/${id}`)
            .then((response) => {
                const { name, telNo, nicNo, email, selectedPackage, numberOfDays } = response.data;
                setFullName(name);
                setTelNo(telNo);
                setNicNo(nicNo);
                setEmail(email);
                setselectedPackage(selectedPackage);
                setNumberOfDays(numberOfDays);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
                console.log(error);
            });
    }, [id]); // Adding id to dependency array
// Update numberOfDays when packageType changes
    useEffect(() => {
        if (selectedPackage !== 'guidedFarmTour') {
            setNumberOfDays(undefined); // Set numberOfDays to undefined when packageType changes
        }
    }, [selectedPackage]);

    const handleEdit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Submitting form...");
        const data = { name, telNo, nicNo, email, selectedPackage, numberOfDays };
        setLoading(true);
        try {
            await axios.put(`http://localhost:5555/booking/${id}`, data);
            console.log("Form submitted successfully");
            setLoading(false);
            enqueueSnackbar('Record Edited successfully', { variant: 'success' });
            navigate('/confirmation', { state: { highlighted: true } }); // Redirect after successful save
        } catch (error) {
            console.error("Error submitting form:", error);
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        }
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Edit Booking
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleEdit}>
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="telNo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="telNo"
                                        value={telNo}
                                        onChange={(e) => setTelNo(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="nicNo" className="block text-sm font-medium leading-6 text-gray-900">
                                    NIC Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="nicNo"
                                        value={nicNo}
                                        onChange={(e) => setNicNo(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="packageType" className="block text-sm font-medium leading-6 text-gray-900">
                                    Package Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="selectedPackage"
                                        value={selectedPackage}
                                        onChange={(e) => setselectedPackage(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    >
                                        <option value="">Select Package Type</option>
                                        <option value="fruitAndVegetablePicking">Fruit and Vegetable Picking</option>
                                        <option value="farmChoreExperience">Farm Chore Experience</option>
                                        <option value="guidedFarmTour">Guided Farm Tour</option>
                                    </select>
                                </div>
                            </div>
                            {selectedPackage === 'guidedFarmTour' && (
                                <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="numberOfDays" className="block text-sm font-medium leading-6 text-gray-900">
                                        Number of Days
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="numberOfDays"
                                            value={numberOfDays}
                                            onChange={(e) => setNumberOfDays(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-6 pb-10 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditBooking;
