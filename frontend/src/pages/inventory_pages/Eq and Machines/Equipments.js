import React from "react";
import { Link } from 'react-router-dom';

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";

export default function Equipment() {

    return (
        <div>
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                {/* Fixed Sidebar */}
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <InventoryNavbar/>
                        <div className="flex flex-col items-center mt-10 ml-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Equipment and Machinery Management
                            </h1>
                        </div>

                        <div className="mt-20 ml-52 mr-52">
                            <div
                                className="bg-white p-4 rounded-lg shadow-md text-center mb-6 border border-green-800 transition duration-300 hover:bg-neutral-300">
                                <div className="flex justify-between items-center">
                                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-green-700">Equipment
                                        and Machines List</h1>
                                    <div className="space-x-4 mt-11">
                                        <Link to="../../eqlist">
                                            <button
                                                className="bg-green-800 text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-green-700">Go
                                                to page
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white p-4 rounded-lg shadow-md text-center mb-6 border border-green-800 transition duration-300 hover:bg-neutral-300">
                                <div className="flex justify-between items-center">
                                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-green-700">Equipment
                                        Finances</h1>
                                    <div className="space-x-4 mt-11">
                                        <Link to="/eqfinances">
                                            <button
                                                className="bg-green-800 text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-green-700">Go
                                                to page
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white p-4 rounded-lg shadow-md text-center mb-6 border border-green-800 transition duration-300 hover:bg-neutral-300">
                                <div className="flex justify-between items-center">
                                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-green-700">Maintenance
                                        Log</h1>
                                    <div className="space-x-4 mt-11">
                                        <Link to="/maintenancelog">
                                            <button
                                                className="bg-green-800 text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-green-700">Go
                                                to page
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
