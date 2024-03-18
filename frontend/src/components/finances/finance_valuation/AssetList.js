import {
    TruckIcon,
    RectangleGroupIcon,
    HomeModernIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid'
import { GiFruitBowl } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { GiWaterTank } from "react-icons/gi";
import { RiCoinsFill } from "react-icons/ri";

export default function AssetList() {
    return (
        <div>
            <div className="w-full overflow-hidden bg-lime-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-4 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Land
                            </dd>
                            <div className="w-8 h-8">
                                <RectangleGroupIcon/>
                            </div>
                        </div>
                        <div className="gap-0.5 divide-y">
                            <dt className="text-base  text-gray-900">Front Land</dt>
                            <dt className="text-base  text-gray-900">New Land</dt>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-green-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-1 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Machinery
                            </dd>
                            <div className="w-8 h-8">
                                <TruckIcon/>
                            </div>
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-teal-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-1 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Crops
                            </dd>
                            <div className="w-8 h-8 ">
                                <GiFruitBowl className="w-full h-full"/>
                            </div>
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-cyan-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-1 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Infrastruscture
                            </dd>
                            <div className="w-8 h-8">
                                <HomeModernIcon/>
                            </div>
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-sky-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-1 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-lg font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Utilities
                            </dd>
                            <div className="w-8 h-8">
                                <MdElectricalServices className="w-full h-full"/>
                            </div>
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-blue-100 flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
                    <div className="mx-auto flex max-w-xs flex-col  items-center gap-y-1 ">
                        <div className="flex flex-row items-center align-middle gap-4">
                            <dd className="text-lg font-semibold text-gray-900 tracking-tight sm:text-xl">
                                Water
                            </dd>
                            <div className="w-8 h-8">
                                <GiWaterTank className="w-full h-full"/>
                            </div>
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden bg-rose-200 flex flex-col justify-center items-center">
                <div className="flex flex-row items-center align-middle gap-4">
                    <dd className="text-xl font-semibold text-gray-900 sm:text-xl">
                        Loans
                    </dd>
                    <div className="w-8 h-8">
                        <RectangleGroupIcon/>
                    </div>
                </div>
                <dt className="text-base leading-7 text-gray-900">Income this week</dt>
            </div>

            <div className="w-full overflow-hidden bg-red-100 flex flex-col justify-center items-center">
                <div className="flex flex-row items-center align-middle gap-4">
                    <dd className="text-xl font-semibold text-gray-900 sm:text-xl">
                        Loans
                    </dd>
                    <div className="w-8 h-8">
                        <RectangleGroupIcon/>
                    </div>
                </div>
                <dt className="text-base leading-7 text-gray-900">Income this week</dt>
            </div>


            <div className="w-full overflow-hidden bg-pink-100 flex flex-col justify-center items-center">
                <div className="flex flex-row items-center align-middle gap-4">
                    <dd className="text-xl font-semibold text-gray-900 sm:text-xl">
                        Loans
                    </dd>
                    <div className="w-8 h-8">
                        <RectangleGroupIcon/>
                    </div>
                </div>
                <dt className="text-base leading-7 text-gray-900">Income this week</dt>
            </div>
            <div className="w-full overflow-hidden bg-violet-100 flex flex-col justify-center items-center">
                <div className="flex flex-row items-center align-middle gap-4">
                    <dd className="text-xl font-semibold text-gray-900 sm:text-xl">
                        Loans
                    </dd>
                    <div className="w-8 h-8">
                        <RectangleGroupIcon/>
                    </div>
                </div>
                <dt className="text-base leading-7 text-gray-900">Income this week</dt>
            </div>
        </div>


    )
}

