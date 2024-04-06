import React, {useEffect, useState} from "react";
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

import {InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import {Link, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";
import {ChevronDownIcon, HomeModernIcon, RectangleGroupIcon, TruckIcon} from "@heroicons/react/24/solid";
import {GiFruitBowl, GiPayMoney, GiReceiveMoney, GiTwoCoins, GiWaterTank} from "react-icons/gi";
import {MdElectricalServices} from "react-icons/md";
import {FaMoneyCheck} from "react-icons/fa";
import {Button, Popover} from "antd";


export default function Valuation() {
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const [ValuationRecords, setValuationRecords] = useState([]);
    let [searchQuery, setSearchQuery] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Valuation', href: '/finances/valuation' },
    ];

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/valuation')
            .then((response) => {
                setValuationRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const filteredRecords = ValuationRecords.filter((record) =>
        Object.values(record).some((value) => {
            const query = searchQuery !== undefined ? searchQuery : ''; // Using ternary operator to set default value
            if (typeof value === 'string' || typeof value === 'number') {
                // Convert value to string and check if it includes the search query
                return String(value).toLowerCase().includes(query.toLowerCase());
            }
            return false;
        })
    );



    const handleDeleteValuation = (id) => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/valuation/${id}`)
            .then(() => {
                setValuationRecords(prevRecords => prevRecords.filter(record => record._id !== id));
                enqueueSnackbar('Record Deleted successfully', { variant: 'success' });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Record Deletion failed', { variant: 'error' });
                console.log(error);
            });
    };

    const subtypeBorderColorMap = {
        Land: "border-lime-400",
        Machinery: "border-green-400",
        Crops: "border-teal-400",
        Infrastructure: "border-cyan-400",
        Utilities: "border-sky-400",
        Water: "border-blue-400",
        Loans: "border-rose-400",
        Debts: "border-red-400",
        Leases: "border-pink-400",
        Taxes: "border-violet-400",
    };

    function getBorderColorClass(subtype) {
        return subtypeBorderColorMap[subtype] || "border-gray-200"; // Default color
    }

    return (
        <div className="">
            {/* Navbar */}
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>

                        <div>
                            <div className="flex flex-row justify-between items-center px-8 py-4">
                                <div>
                                    <h1 className=" text-lg font-semibold text-left">Valuation records</h1>
                                    <p className="mt-1 text-sm font-normal text-gray-500 0">Browse a list of all assets
                                        and liabilities stored in the system</p>
                                </div>

                                <div>
                                    <a href="/finances/valuation/addValuation"
                                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                                        Add new record <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className=" flex flex-row w-full bg-gray-200  h-72 ">
                                <button value="Land" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden h-full bg-lime-100 flex flex-col justify-between items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle justify-between pb-8  pt-8">
                                        <div className="w-8 h-8">
                                            <RectangleGroupIcon/>
                                        </div>
                                        <dd className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Land
                                        </dd>
                                    </div>
                                </button>
                                <button value="Machinery" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-green-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <TruckIcon/>
                                        </div>

                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Machinery
                                        </div>


                                    </div>
                                </button>
                                <button value="Crops" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-teal-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <GiFruitBowl className="w-full h-full"/>
                                        </div>

                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Crops
                                        </div>


                                    </div>
                                </button>
                                <button value="Infrastruscture" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-cyan-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <HomeModernIcon/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Infrastruscture
                                        </div>
                                    </div>
                                </button>
                                <button value="Utilities" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-sky-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <MdElectricalServices className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Utilities
                                        </div>
                                    </div>
                                </button>
                                <button value="Water" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-blue-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <GiWaterTank className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Water
                                        </div>
                                    </div>
                                </button>
                                <button value="Loans" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-rose-200 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <GiReceiveMoney className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Loans
                                        </div>
                                    </div>
                                </button>
                                <button value="Debts" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-red-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <GiPayMoney className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Debts
                                        </div>
                                    </div>
                                </button>
                                <button value="Leases" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-pink-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <FaMoneyCheck className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Leases
                                        </div>
                                    </div>
                                </button>
                                <button value="Taxes" onClick={(e) => setSearchQuery(e.target.value)}
                                    className="w-full overflow-hidden bg-violet-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] hover:shadow-xl transition-all duration-300 ease-in-out">
                                    <div
                                        className="flex flex-col h-full items-center content-center align-middle pt-8 pb-8  justify-between ">
                                        <div className="w-8 h-8">
                                            <GiTwoCoins className="w-full h-full"/>
                                        </div>
                                        <div
                                            className="text-xl font-semibold text-gray-900 sm:text-xl [writing-mode:vertical-lr] rotate-180">
                                            Taxes
                                        </div>
                                    </div>
                                </button>

                            </div>

                            <div className="flex justify-center align-middle w-full  py-4 ">
                                <div className="w-6 h-6 ">
                                    <ChevronDownIcon/>
                                </div>
                            </div>

                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                            <thead
                                className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                            <tr className=" ">
                                <th></th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subtype
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payer/Payee
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Percentage
                                </th>
                                <th scope="col" className=" py-3">
                                    <span className="sr-only">Info</span>
                                </th>
                                <th scope="col" className=" py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className=" py-3">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="border-b border-gray-200">

                            {filteredRecords.map((record, index) => (
                                <tr key={record._id}
                                    className={`divide-y border-l-4 ${getBorderColorClass(record.subtype)}`}
                                >
                                <td></td>
                                <td className="px-6 py-4">
                            {record.date}
                            </td>
                            <td className="px-6 py-4">
                                {record.type}
                            </td>
                            <td className="px-6 py-4">
                                {record.subtype}
                            </td>
                            <td className="px-6 py-4">
                                {record.quantity}
                            </td>
                            <td className="px-6 py-4">
                                {record.price}
                            </td>
                            <td className="px-6 py-4">
                                {record.description}
                            </td>
                            <td className="px-6 py-4">
                                {record.payer_payee}
                            </td>
                            <td className="px-6 py-4">
                                {record.appreciationOrDepreciation}
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`/finances/valuation/viewValuation/${record._id}`}>
                                    <InformationCircleIcon
                                        className="h-6 w-6 flex-none bg-gray-200 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                        aria-hidden="true"/>
                                </Link>
                            </td>
                            <td className=" py-4 text-right">
                                <Link to={`/finances/valuation/editValuation/${record._id}`}>
                                    <PencilSquareIcon
                                        className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                        aria-hidden="true"/>
                                </Link>
                            </td>
                            <td className=" ">
                                <Popover
                                    content={
                                        <div>
                                            <p>Are you sure you want to delete this record?</p>
                                            <div className="mt-4 flex justify-start">
                                                <button
                                                    className="bg-red-600 rounded-full px-4 text-white hover:bg-red-400"
                                                    onClick={() => {
                                                        handleDeleteValuation(record._id);
                                                    }}
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    title="Confirmation"
                                    trigger="click"
                                >
                                    <Button shape="circle" type="text">
                                        <TrashIcon
                                            className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </Popover>
                            </td>
                        </tr>
                        ))}


                    </tbody>
                </table>

            </div>
        </div>
</div>

</div>
)
    ;
}
