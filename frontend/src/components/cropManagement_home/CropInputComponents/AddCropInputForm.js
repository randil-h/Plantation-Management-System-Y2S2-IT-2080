import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import {enqueueSnackbar, useSnackbar} from "notistack";

export default function AddCropInputForm() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        date: "",
        type: "",
        field: "",
        cropType: "",
        variety: "",
        quantity: "",
        unitCost: "",
        remarks: ""
    });

    useEffect(() => {
        const prevPath = localStorage.getItem('prevPath');
        if (prevPath === "/crop/input") {
            setFormData({ ...formData, type: "Planting" });
        } else if (prevPath === "/crop/input/chemical/view") {
            setFormData({ ...formData, type: "Agrochemical" });
        }
    }, []);

    const [agrochemicals, setAgrochemicals] = useState({
        Coconut: [
            { name: "Urea, 50 kg", price: 14000},
            { name: "YPM, 50 kg", price: 12000},
            { name: "Dolomite, 50 kg", price: 6000},
            { name: "Muriate of Potash, 50 kg", price: 15000},
        ],
        Papaya: [
            { name: "NPK, 25 kg", price: 24000 },
        ],
        AppleGuava: [
            { name: "NPK, 25kg", price: 18000 },
        ],
    });

    const agrochemicalsData = [
        {
            name: "Mitsu Abamectin (abamectin 18g/l EC) insecticide",
            quantity: "50ml bottle",
            price: 1050,
        },
        {
            name: "Marshal 20 SC (carbosulfan 200g/l SC) insecticide",
            quantity: "400ml bottle",
            price: 3680,
        },
        {
            name: "Daconil Chlorothalonil 500g/l fungicide",
            quantity: "400ml bottle",
            price: 4250,
        },
        {
            name: "Booster K 45%",
            quantity: "400ml bottle",
            price: 820,
        },
        {
            name: "Alberts solution",
            quantity: "1kg packet",
            price: 2950,
        },
        {
            name: "Crop Master solution",
            quantity: "1l bottle",
            price: 4020,
        },
        {
            name: "Oasis Thiram fungicide",
            quantity: "1kg packet",
            price: 3850,
        },
        {
            name: "Glyphosate",
            quantity: "4l bottle",
            price: null,
        },
        {
            name: "Rootone",
            quantity: "500ml bottle",
            price: 2450,
        },
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "quantity" || name === "unitCost") {
            if (isNaN(value) || Number(value) < 0) {
                console.log("Please enter a positive number.");
                return;
            }
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5555/cropinput",
                formData
            );
            console.log(response.data);
            setFormData({
                date: "",
                type: "",
                field: "",
                cropType: "",
                variety: "",
                quantity: "",
                unitCost: "",
                remarks: ""
            });
            enqueueSnackbar('Record Added successfully', { variant: 'success' });
            if (formData.type === 'Planting') {
                navigate('/crop/input/planting/view');
            } else if (formData.type === 'Agrochemical') {
                navigate('/crop/input/chemical/view');
            }
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar('Error', { variant: 'error' });
        }
    };

    const handleCancel = () => {
        setFormData({
            date: "",
            type: "",
            field: "",
            cropType: "",
            variety: "",
            quantity: "",
            unitCost: "",
            remarks: ""
        });
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-96 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Crop Input Form
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
                            {/* Type Input */}
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
                                            className="form-radio h-4 w-4 text-lime-600 transition duration-150 ease-in-out"
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
                                            className="form-radio h-4 w-4 text-lime-600 transition duration-150 ease-in-out"
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

                            <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        onChange={handleChange}
                                        value={formData.date}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
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
                                    <select
                                        id="field"
                                        name="field"
                                        onChange={handleChange}
                                        value={formData.field}
                                        autoComplete="field"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Field A">Field A</option>
                                        <option value="Field B">Field B</option>
                                        <option value="Field C">Field C</option>
                                        <option value="Field D">Field D</option>
                                        <option value="Field E">Field E</option>
                                        <option value="Field F">Field F</option>
                                        <option value="Field G">Field G</option>
                                    </select>
                                </div>
                            </div>
                            {formData.type === "Planting" && (
                                <>
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                required
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Coconut">Coconut</option>
                                                <option value="Apple Guava">Apple Guava</option>
                                                <option value="Papaya">Papaya</option>
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {formData.type === "Agrochemical" && (
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
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>
                            )}
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1 mt-4">
                                <label
                                    htmlFor="unitCost"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Unit Cost (Rs.)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        id="unitCost"
                                        name="unitCost"
                                        onChange={handleChange}
                                        value={formData.unitCost}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                        placeholder="Type Here.."
                                        required
                                    />
                                </div>
                            </div>
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
                            className="rounded-md bg-lime-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
