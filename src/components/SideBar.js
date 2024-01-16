import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
    HiMiniWallet,
    HiWrenchScrewdriver,
    HiHome,
    HiMiniBeaker,
    HiPresentationChartLine,
    HiUsers
} from "react-icons/hi2";
import { FaCannabis } from "react-icons/fa";

const menuItems = [
    { name: "Home", path: "/dashboard", icon: HiHome },
    { name: "Crops", path: "/crops", icon: FaCannabis },
    { name: "Employees", path: "/employees", icon: HiUsers },
    { name: "Fertilizer", path: "/fertilizer", icon: HiMiniBeaker },
    { name: "Equipment", path: "/equipment", icon: HiWrenchScrewdriver },
    { name: "Finances", path: "/finances", icon: HiMiniWallet },
    { name: "Insights", path: "/insights", icon: HiPresentationChartLine },
];

export default function SideBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-1/6 lg:w-1/4 xl:w-1/6 flex-shrink-0 hidden lg:flex flex-col items-start justify-between bg-white h-screen fixed border-r z-10">
            <ul className="flex flex-col justify-center w-full text-gray-800 font-medium text-md py-4">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`flex w-11/12 h-12 rounded-lg focus:outline-none focus:ring focus:ring-lime-500 ${
                            isActive(item.path) ? "bg-gray-200 text-lime-600" : "hover:bg-gray-200"
                        }`}
                    >
                        <Link to={item.path} className="pl-3 flex items-center h-full">
                            {item.icon && <item.icon className="mr-4" />}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Responsive Menu */}
            <Disclosure as="div" className="lg:hidden">
                <Disclosure.Button
                    className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium leading-6 text-gray-800 bg-gray-200 focus:outline-none focus:ring focus:ring-lime-500"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span>Menu</span>
                    <ChevronDownIcon
                        className={`h-5 w-5 flex-none transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <Transition
                    as={React.Fragment}
                    show={mobileMenuOpen}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Disclosure.Panel className="w-full bg-gray-100 py-2">
                        <ul className="flex flex-col w-full text-gray-800 font-medium text-md">
                            {menuItems.map((item) => (
                                <li
                                    key={item.name}
                                    className={`w-full h-12 rounded-lg focus:outline-none focus:ring focus:ring-lime-500 ${
                                        isActive(item.path) ? "bg-gray-200 text-lime-600" : "hover:bg-gray-200"
                                    }`}
                                >
                                    <Link to={item.path} className="pl-3 flex items-center h-full">
                                        {item.icon && <item.icon className="mr-4" />}
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    );
}
