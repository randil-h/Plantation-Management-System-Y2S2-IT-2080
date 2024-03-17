import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditHarvest = () => {
    const [date, setDate] = useState('');
    const [cropType, setCropType] = useState('');
    const [ageOfYield, setAgeOfYield] = useState('');
    const [wayPicked, setWayPicked] = useState('');
    const [quantity, setQuantity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [loading, setLoading] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {id} = useParams(); // Extracting id from route parameters

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/harvestRecords/${id}`)
            .then((response) => {
                setDate(response.data.date.split("T")[0]);
                setCropType(response.data.cropType);
                setAgeOfYield(response.data.ageOfYield);
                setWayPicked(response.data.wayPicked);
                setQuantity(response.data.quantity);
                setRemarks(response.data.remarks);
                setLoading(false);

            }).catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check the console.', {variant: 'error'});
            console.log(error);
        });
    }, [id]); // Adding id to dependency array

    const handleEdit = () => {
        const data = {
            date,
            cropType,
            ageOfYield,
            wayPicked,
            quantity,
            remarks,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/record/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Record Edited successfully', {variant: 'success'});
                navigate('/harvest/records');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', {variant: 'error'});
                console.log(error);
            });
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Edit Harvest Record
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleEdit}>
                <div className="space-y-12 px-0 py-16 w-6/12 ml-1">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="cropType" className="block text-sm font-medium leading-6 text-gray-900">
                                    Crop Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        value={cropType}
                                        onChange={(e) => setCropType(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    >
                                        <option value="">Select Crop Type</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="papaya">Papaya</option>
                                        <option value="guava">Guava</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="ageOfYield" className="block text-sm font-medium leading-6 text-gray-900">
                                    Age of the Yield (months)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="ageOfYield"
                                        value={ageOfYield}
                                        onChange={(e) => setAgeOfYield(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="wayPicked" className="block text-sm font-medium leading-6 text-gray-900">
                                    Way Picked
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="wayPicked"
                                        value={wayPicked}
                                        onChange={(e) => setWayPicked(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                    Quantity (kg)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="remarks" className="block text-sm font-medium leading-6 text-gray-900">
                                    Remarks
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="remarks"
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            onClick={() => navigate('/harvest/records')}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditHarvest;
