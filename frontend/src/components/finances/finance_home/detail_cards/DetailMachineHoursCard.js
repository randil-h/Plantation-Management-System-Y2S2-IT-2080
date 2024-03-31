import React from "react";
import {GiPayMoney} from "react-icons/gi";
import {ArrowDownCircleIcon,
    ArrowUpCircleIcon,
    XCircleIcon} from "@heroicons/react/24/outline";

export default function DetailMachineHoursCard({onBack, hidden}) {


    return (
        <div className="expanded-card relative py-8 overflow-hidden  w-full h-full bg-gradient-to-br from-lime-100 to-orange-100 rounded-3xl ">
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

                <div className="align-middle flex flex-col py-4">
                    <div className="flex flex-row items-center gap-4 w-full justify-between">
                        <dd className=" text-xl font-medium  tracking-tight  sm:text-xl">
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
                <button onClick={(e) => {
                    e.stopPropagation();
                    onBack();
                }}><XCircleIcon className="w-6 h-6"/>
                </button>

            </div>

        </div>
    );
}
