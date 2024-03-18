import {
    ArrowUpCircleIcon,
    ArrowDownCircleIcon
} from '@heroicons/react/24/outline'
import { GiPayMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaTractor } from "react-icons/fa";

export default function FinanceHomeStatCards() {
    return (
        <div className="flex flex-row relative columns-3 pt-12 h-[60%] text-gray-700 ">
            <div
                className="relative py-8 overflow-hidden  w-full  bg-gray-50 hover:w-[110%]  transition-all duration-1000 ease-in-out hover:bg-lime-200 hover:text-black">


                <div
                    className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col content-between h-full  justify-between">
                    <div className="mx-auto  flex max-w-xs flex-col gap-y-1  w-full">
                        <div className="flex flex-row   gap-4">
                            <div className="w-8 h-8">
                                <GiPayMoney className="w-full h-full"/>
                            </div>
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-2xl">
                                Transactions
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
            <div
                className="relative py-8 overflow-hidden  w-full  bg-gray-100 hover:w-[110%]  transition-all duration-1000 ease-in-out hover:bg-emerald-200 hover:text-black">

                <div
                    className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col content-between h-full  justify-between">
                    <div className="mx-auto  flex max-w-xs flex-col w-full gap-y-1">
                        <div className="flex flex-row   gap-4">
                            <div className="w-8 h-8">
                                <GiMoneyStack className="w-full h-full"/>
                            </div>
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-3xl">
                                Valuation
                            </dd>

                        </div>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col align-middle pb-12 w-full divide-y divide-gray-400 ">

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
            <div
                className="relative py-8 overflow-hidden  w-full  bg-gray-200 hover:w-[110%]  transition-all duration-1000 ease-in-out hover:bg-sky-200 hover:text-black">

                <div
                    className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col content-between h-full  justify-between">
                    <div className="mx-auto  flex max-w-xs flex-col w-full gap-y-1 ">
                        <div className="flex flex-row   gap-4">
                            <div className="w-8 h-8">
                                <GiTakeMyMoney className="w-full h-full"/>
                            </div>
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-3xl">
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
            <div
                className="relative py-8 overflow-hidden  w-full  bg-gray-300 hover:w-[110%]  transition-all duration-1000 ease-in-out hover:bg-indigo-200 hover:text-black">

                <div
                    className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col content-between h-full  justify-between">
                    <div className="mx-auto  flex max-w-xs flex-col w-full gap-y-1">
                        <div className="flex flex-row   gap-4">
                            <div className="w-8 h-8">
                                <FaTractor className="w-full h-full"/>
                            </div>
                            <dd className=" text-xl font-semibold  tracking-tight  sm:text-3xl">
                                Machine Hours
                            </dd>

                        </div>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col align-middle pb-12 w-full divide-y divide-gray-400 ">

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

        </div>

    )
}

