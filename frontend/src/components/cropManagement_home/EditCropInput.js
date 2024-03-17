import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditCropInput = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        date: "",
        type: "",
        field: "",
        chemicalName: "",
        quantity: "",
        cropType: "",
        variety: "",
        unitCost: "",
        remarks: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/cropinput/${id}`);
                console.log("API Response: ", response.data);

                const formattedDate = new Date(response.data.date).toISOString().split('T')[0];
                const formField = response.data.field;
                const formCrop  = response.data.cropType;
                setFormData({
                    ...response.data,
                    date: formattedDate,
                    field: formField,
                    cropType: formCrop
                });
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                enqueueSnackbar("Error fetching data", { variant: "error" });
                setLoading(false);
            }
        };
        fetchData();
    }, [id, enqueueSnackbar]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:5555/cropinput/${id}`, formData);
            setLoading(false);
            enqueueSnackbar('Record Updated successfully', { variant: 'success' });
            navigate('/cropinput');
        } catch (error) {
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        }
    };

    const handleCancel = () => {
        setFormData({
            date: "",
            type: "",
            field: "",
            chemicalName: "",
            quantity: "",
            cropType: "",
            variety: "",
            unitCost: "",
            remarks: ""
        });
    };
    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Edit Crop Input
                </h1>
            </div>
            <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
                method="post"
            >
                <div className="space-y-12 px-0 py-16 w-6/12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Type
                                </label>
                                <div className="mt-2 flex">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="Planting"
                                            name="type"
                                            value="Planting"
                                            onChange={handleChange}
                                            checked={formData.type === "Planting"}
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                            required
                                        />
                                        <label
                                            htmlFor="Planting"
                                            className="ml-2 text-sm leading-5 text-gray-900"
                                        >
                                            Planting
                                        </label>
                                    </div>
                                    <div className="flex items-center ml-6">
                                        <input
                                            type="radio"
                                            id="Agrochemical"
                                            name="type"
                                            value="Agrochemical"
                                            onChange={handleChange}
                                            checked={formData.type === "Agrochemical"}
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                            required
                                        />
                                        <label
                                            htmlFor="Agrochemical"
                                            className="ml-2 text-sm leading-5 text-gray-900"
                                        >
                                            Agrochemical
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        onChange={handleChange}
                                        value={formData.date}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>

                            {formData.type === "Planting" && (
                                <>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="field"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Field Name
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="field"
                                                name="field"
                                                onChange={handleChange}
                                                value={formData.field}
                                                autoComplete="field"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="fieldA">Field A</option>
                                                <option value="fieldB">Field B</option>
                                                <option value="fieldC">Field C</option>
                                                <option value="fieldD">Field D</option>
                                                <option value="fieldE">Field E</option>
                                                <option value="fieldF">Field F</option>
                                                <option value="fieldG">Field G</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="cropType"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Crop Type
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="cropType"
                                                name="cropType"
                                                onChange={handleChange}
                                                value={formData.cropType}
                                                autoComplete="cropType"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="coconut">Coconut</option>
                                                <option value="apple guava">Apple Guava</option>
                                                <option value="papaw">Papaya</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="variety"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Variety
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="variety"
                                                name="variety"
                                                onChange={handleChange}
                                                value={formData.variety}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Quantity
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                onChange={handleChange}
                                                value={formData.quantity}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="unitCost"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Unit Cost
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                id="unitCost"
                                                name="unitCost"
                                                onChange={handleChange}
                                                value={formData.unitCost}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="remarks"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Remarks
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="remarks"
                                                name="remarks"
                                                onChange={handleChange}
                                                value={formData.remarks}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Type Here.."
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {formData.type === "Agrochemical" && (
                                <>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="chemicalName"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Chemical Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="chemicalName"
                                                name="chemicalName"
                                                onChange={handleChange}
                                                value={formData.chemicalName}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="field"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Field Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="field"
                                                name="field"
                                                onChange={handleChange}
                                                value={formData.field}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Quantity
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                onChange={handleChange}
                                                value={formData.quantity}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="unitCost"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Unit Cost
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                id="unitCost"
                                                name="unitCost"
                                                onChange={handleChange}
                                                value={formData.unitCost}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                        <label
                                            htmlFor="remarks"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Remarks
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="remarks"
                                                name="remarks"
                                                onChange={handleChange}
                                                value={formData.remarks}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Type Here.."
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditCropInput;
