import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import {
    HomeIcon,
    TrashIcon
} from '@heroicons/react/24/outline'
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
    { name: "HOME", path: "/dashboard", icon: HiHome },
    { name: "FINANCES", path: "/finances/home", icon: HiMiniWallet },
    { name: "CROPS", path: "/crops", icon: FaCannabis },
    { name: "EMPLOYEES", path: "/employees", icon: HiUsers },
    { name: "FERTILIZER", path: "/fertilizer", icon: HiMiniBeaker },
    { name: "EQUIPMENT", path: "/equipment", icon: HiWrenchScrewdriver },
    { name: "INSIGHTS", path: "/insights", icon: HiPresentationChartLine },
];

export default function SideBar() {
    const location = useLocation();

    const isActive = (path) => {
        const currentPath = location.pathname.split('/')[1]; // Get the first part of the current pathname
        return currentPath === path.split('/')[1]; // Compare with the first part of the provided path
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className=" bg-gray-100 h-screen sticky top-12 border-r z-10">
            <ul className="flex flex-col items-center text-gray-800 font-medium text-sm py-4">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`flex w-full h-12 my-1  focus:outline-none focus:ring focus:ring-lime-500 ${
                            isActive(item.path) ? "bg-gray-200 text-lime-600 drop-shadow-lg border-l-4 border-lime-600" : "hover:bg-gray-200 hover:shadow-md"
                        }`}
                    >
                        <Link to={item.path} className="pl-3 flex items-center h-full">
                            {item.icon && <item.icon className="mr-4" />}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
