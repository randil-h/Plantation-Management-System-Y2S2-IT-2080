import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";
import {message, DatePicker} from "antd";
import moment from "moment";


export default function SalaryProcessingSection() {
    const [regEmpName, setRegEmpName] = useState('');
    const [regNic, setRegNIC] = useState('');
    const [regType, setRegType] = useState('');
    const [regBasicRate, setRegBasicRate] = useState('');

    const [empName, setEmpName] = useState(regEmpName);
    const [nic, setNIC] = useState('');
    const [paymentDate, setPaymentDate] = useState(regNic);
    const [type, setType] = useState(regType);

    const [salaryStartDate, setSalaryStartDate] = useState('');
    const [salaryEndDate, setSalaryEndDate] = useState('');

    const [basicDays, setBasicDays] = useState('');
    const [basicRate, setBasicRate] = useState(regBasicRate);
    const [bonusSalary, setBonusSalary] = useState(0);
    const [otHours, setOtHours] = useState(0);
    const [otRate, setOtRate] = useState(0);
    const [epfEtf, setEpfEtf] = useState(6);
    const [description, setDescription] = useState('');

    const [id, setID] = useState('');




    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [RegistrationRecords, setRegistrationRecords] = useState([]);

    const handleSaveSalaryRecord = async (e) => {
        e.preventDefault();
        const data = {
            paymentDate,
            empName,
            salaryStartDate,
            salaryEndDate,
            nic,
            type,
            basicDays,
            basicRate,
            bonusSalary,
            otHours,
            otRate,
            epfEtf,
            description

        };
        setLoading(true);
        axios
            .post('http://localhost:5555/salary', data)
            .then(() => {
                setLoading(false);
                message.success('Salary record has successfully saved.');
                navigate('/finances/valuation');
            })
            .catch((error) => {
                setLoading(false);
                message.error('Salary record saving failed.');
                console.log(error);
                navigate('/finances/valuation');
            });
    };



    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/employeeRecords`)
            .then((response) => {
                setRegistrationRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const [selectedID, setSelectedID] = useState(null);

    const handleRadioChange = (id) => {
        setSelectedID(id);
    };

    const handleDateChange = (dates) => {
        if (dates && dates.length === 2) {
            setSalaryStartDate(dates[0].format('YYYY-MM-DD'));
            setSalaryEndDate(dates[1].format('YYYY-MM-DD'));
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/employeeRecords/${id}`)
            .then((response) => {
                setRegEmpName(response.data.f_name);
                setRegType(response.data.emp_type);
                setRegBasicRate(response.data.h_rate);
                setRegNIC(response.data.nic);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    return (
        <div className="border-t ">

            <div className="flex flex-row">
                <div className="w-1/3 bg-gray-50 h-fit mb-14 overscroll-auto border-r  bottom-14" id="employeelist">
                    <ul role="list" className="divide-y divide-gray-300">
                        {RegistrationRecords.map((person) => (
                            <li key={person._id}
                                className={``}>
                                <label htmlFor={person._id}
                                       className={`py-3 px-4 flex hover:bg-lime-50 transition-all hover:shadow-xl duration-200  justify-between gap-x-4 ${selectedID === person._id ? 'bg-lime-100 border-l-4 border-lime-600 shadow-xl' : ''}`}>
                                    <div className="flex min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.f_name} {person.l_name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person._id}</p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <p className="text-sm leading-6 text-gray-900">{person.emp_type}</p>
                                        <p className="mt-1 text-xs leading-5 text-gray-500">{person.h_rate}</p>
                                    </div>
                                    <input
                                        type="radio"
                                        id={person._id}
                                        name="employee"
                                        className="size-0 invisible"
                                        value={person.nic}
                                        checked={selectedID === person._id}
                                        onChange={() => handleRadioChange(person._id)}
                                    />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="w-full">
                    <form className="flex-col flex items-center justify-center">
                        <div className="space-y-12 px-0 py-8 w-8/12">
                            <div className="">
                                <div className="mt-4  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">

                                    {/* EPM Name */}
                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="epm_name"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Employee Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="epm_name"
                                                value={empName}
                                                onChange={(e) => setEmpName(e.target.value)}
                                                id="epm_name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* NIC */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="nic"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            NIC
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="nic"
                                                value={nic}
                                                onChange={(e) => setNIC(e.target.value)}
                                                id="nic"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* Type */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="type"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Type
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                name="type"
                                                value={type}
                                                onChange={(e) => setType(e.target.value)}
                                                id="type"
                                                autoComplete="type"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="permanent">Permanent</option>
                                                <option value="trainee">Trainee</option>
                                                <option value="contract">Contract</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Basic days */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="basic_days"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Basic Days
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="basic_days"
                                                value={basicDays}
                                                onChange={(e) => setBasicDays(e.target.value)}
                                                id="basic_days"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>


                                    {/* Basic rate */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="basic_rate"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Basic Rate
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="basic_rate"
                                                value={basicRate}
                                                onChange={(e) => setBasicRate(e.target.value)}
                                                id="basic_rate"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* Bonus Salary */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="bonus_salary"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Bonus Salary
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="bonus_salary"
                                                value={bonusSalary}
                                                onChange={(e) => setBonusSalary(e.target.value)}
                                                id="bonus_salary"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* OT Hours */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="ot_hours"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            OT Hours
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="ot_hours"
                                                value={otHours}
                                                onChange={(e) => setOtHours(e.target.value)}
                                                id="ot_hours"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* OT Rate */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="ot_rate"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            OT Rate
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="ot_rate"
                                                value={otRate}
                                                onChange={(e) => setOtRate(e.target.value)}
                                                id="ot_rate"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* EPF/ETF */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="epf_etf"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            EPF/ETF (%)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="epf_etf"
                                                value={epfEtf}
                                                onChange={(e) => setEpfEtf(e.target.value)}
                                                id="epf_etf"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* start Date */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="payment_date"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Salary Start Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                value={paymentDate}
                                                onChange={(e) => setPaymentDate(e.target.value)}
                                                id="payment_date"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* end Date */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="payment_date"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Salary End Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                value={paymentDate}
                                                onChange={(e) => setPaymentDate(e.target.value)}
                                                id="payment_date"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>


                                    {/* Payment Date */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="payment_date"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Payment Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                value={paymentDate}
                                                onChange={(e) => setPaymentDate(e.target.value)}
                                                id="payment_date"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="description"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Remarks
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            required
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            id="description"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>


            <div className="flex relative " id="controlbar">
                <div
                    className="h-14  fixed border-b z-0 bottom-0 w-full right-0 bg-gray-100 bg-opacity-50 backdrop-blur border-t"
                    id="savebar">
                    <div
                        className="flex justify-end gap-2 align-middle items-center text-sm font-semibold h-full pr-8 z-30">

                        <Link className="bg-gray-300 rounded-full py-1 px-4 hover:bg-gray-400"
                              to="/dashboard">
                            Cancel
                        </Link>
                        <Link className="bg-amber-200 rounded-full py-1 px-4 hover:bg-amber-300"
                              to="/dashboard">
                            Generate Receipt
                        </Link>
                        <button className="bg-lime-200 rounded-full py-1 px-4 hover:bg-lime-400"
                                onClick={handleSaveSalaryRecord}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
