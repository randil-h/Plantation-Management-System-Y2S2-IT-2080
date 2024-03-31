import React from "react";
import {GiPayMoney, GiTakeMyMoney} from "react-icons/gi";
import {ArrowDownCircleIcon, ArrowUpCircleIcon} from "@heroicons/react/24/outline";

export default function SalaryPaymentsCard() {


    return (
        <div
            className="relative py-8 overflow-hidden  w-full h-full bg-gray-200 rounded-3xl transition-all duration-700 ease-in-out hover:bg-gradient-to-r from-lime-200 to-emerald-200 hover:text-black">

            <div
                className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col content-between h-full  justify-between">
                <div className="mx-auto  flex max-w-xs flex-col w-full gap-y-1 ">
                    <div className="flex flex-row   gap-4">
                        <div className="w-8 h-8">
                            <GiTakeMyMoney className="w-full h-full"/>
                        </div>
                        <dd className=" text-xl font-semibold  tracking-tight  sm:text-2xl">
                            Salary Payments
                        </dd>

                    </div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col align-middle pb-12 w-full divide-y divide-gray-400 ">
                    <div className=" flex flex-col py-4">
                        <div className="flex flex-row items-center  gap-4 w-full justify-between">
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-xl">
                                Rs.110,000
                            </dd>
                            <div className="w-6 h-6">
                                <ArrowUpCircleIcon/>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-full justify-between">
                            <dt className="text-base leading-7 ">Income this week</dt>
                            <dt className="text-sm leading-7 ">13.49%</dt>
                        </div>

                    </div>
                    <div className="align-middle flex flex-col py-4">
                        <div className="flex flex-row items-center gap-4 w-full justify-between">
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-xl">
                                Rs.50,000
                            </dd>
                            <div className="w-6 h-6">
                                <ArrowDownCircleIcon/>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-full justify-between">
                            <dt className="text-base leading-7 ">Income this week</dt>
                            <dt className="text-sm leading-7 ">13.49%</dt>
                        </div>

                    </div>
                    <div className="align-middle flex flex-col py-4">
                        <div className="flex flex-row items-center gap-4 w-full justify-between">
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-xl">
                                Rs.60,000
                            </dd>
                            <div className="w-6 h-6">
                                <ArrowUpCircleIcon/>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-full justify-between">
                            <dt className="text-base leading-7 ">Income this week</dt>
                            <dt className="text-sm leading-7 ">13.49%</dt>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
