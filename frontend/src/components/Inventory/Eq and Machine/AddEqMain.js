import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddEqMain = () => {
    const [Eq_machine_main, setEq_machine_main] = useState('');
    const [Eq_id_main, setEq_id_main] = useState('');
    const [date_referred, setDate_referred] = useState('');
    const [date_received, setDate_received] = useState('');
    const [ref_loc, setRef_loc] = useState('');
    const [status, setStatus] = useState('');
    const [comment, setComment] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (new Date(date_received) <= new Date(date_referred)) {
            enqueueSnackbar('Received date should be after the referred date', {
                variant: 'error',
                autoHideDuration: 6000,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
            });
            return;
        }
        const data = {
            Eq_machine_main,
            Eq_id_main,
            date_referred,
            date_received,
            ref_loc,
            status,
            comment,

        };
        try {
            await axios.post('https://elemahana-mern-8d9r.vercel.app/inventoryrecords', data);
            enqueueSnackbar('Record Created Successfully!', {
                variant: 'success',
                autoHideDuration: 6000,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
            });
            navigate('/inventory/maintenancelog', { state: { highlighted: true } });
        } catch (error) {
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        }
    };

    const handleCancel = () => {
        setEq_machine_main('');
        setEq_id_main('');
        setDate_referred('');
        setDate_received('');
        setRef_loc('');
        setStatus('');
        setComment('');
    };

    return (
        <div className="pt-2">
            <div className="flex flex-col ml-64 mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Add Equipment / Machine Maintenance Record
                </h1>
            </div>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <div className="space-y-12 px-0 py-16 w-6/12 ml-1">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="Eq_machine_main"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Equipment / Machine Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Eq_machine_main"
                                        value={Eq_machine_main}
                                        onChange={(e) => setEq_machine_main(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Eq_id_main"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Equipment / Machine ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Eq_id_main"
                                        value={Eq_id_main}
                                        onChange={(e) => setEq_id_main(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="date_referred"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Date referred to
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="date_referred"
                                        value={date_referred}
                                        onChange={(e) => setDate_referred(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="date_received"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Received date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="date_received"
                                        value={date_received}
                                        onChange={(e) => setDate_received(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="ref_loc" className="block text-sm font-medium leading-6 text-gray-900">
                                    Referred location for maintenance
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="ref_loc"
                                        value={ref_loc}
                                        onChange={(e) => setRef_loc(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    onChange={(e) => setStatus(e.target.value)}
                                    id="status"
                                    autoComplete="status"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Select</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                                    Comment
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={handleCancel}>
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

export default AddEqMain;