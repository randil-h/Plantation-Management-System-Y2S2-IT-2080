
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
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FaMoneyCheck } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";


export default function ValuationTiles() {
    return (

        <div>
            <div className=" flex flex-row w-full bg-gray-200  h-72 ">
                <button  className="w-full overflow-hidden h-full bg-lime-100 flex flex-col justify-between items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                <div className="w-full overflow-hidden bg-green-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-teal-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-cyan-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-sky-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>

                <div className="w-full overflow-hidden bg-blue-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-rose-200 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-red-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-pink-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>
                <div className="w-full overflow-hidden bg-violet-100 flex justify-center items-center hover:w-[120%] hover:h-[105%] transition-all duration-300 ease-in-out">
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
                </div>

            </div>

            <div className="flex justify-center align-middle w-full  py-4">
                <div className="w-6 h-6 ">
                    <ChevronDownIcon/>
                </div>
            </div>

        </div>

    )
}

