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
import {useState} from "react";

export default function LiabilityList() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="">

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

