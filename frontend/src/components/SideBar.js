import {Link, useLocation} from "react-router-dom";

import {
    HiHome,
    HiPresentationChartLine,
    HiUsers
} from "react-icons/hi2";
import {
    FaCannabis,
    FaDisease,
    FaBoxOpen,
    FaTrailer
} from "react-icons/fa";
import {FaMoneyCheck} from "react-icons/fa6";

import {
 ArrowLeftStartOnRectangleIcon,
    HomeIcon,
    Cog8ToothIcon,

} from '@heroicons/react/24/outline';


import {useEffect, useState} from "react";
import axios from "axios";
import {TreeSelect} from "antd";
import Tree from "antd/lib/tree/Tree";
import {GiFruitTree} from "react-icons/gi";
import {GrTree} from "react-icons/gr";
import {BsTree} from "react-icons/bs";
import {RiTreeLine} from "react-icons/ri";

const getWeekStartEnd = (date, startOfWeek) => {
    let weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + startOfWeek);
    weekStart.setHours(0, 0, 0, 0);

    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    return {start: weekStart, end: weekEnd};
};


export default function SideBar() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const isActive = (path) => {
        const currentPath = location.pathname.split('/')[1];
        return currentPath === path.split('/')[1];
    };

    const [currentWeekData, setCurrentWeekData] = useState({
        transactions: 0,
        income: 0,
        expense: 0,
        profitLoss: 0,
    });


    useEffect(() => {
        const today = new Date();
        const currentWeek = getWeekStartEnd(today, 1); // Assuming week starts on Monday
        const lastWeek = getWeekStartEnd(new Date(today.setDate(today.getDate() - 7)), 1);

        setLoading(true);
        axios.get('http://localhost:5555/transactions')
            .then((response) => {
                const records = response.data.data;

                const filterAndSummarize = (start, end) => {
                    const filtered = records.filter(record => {
                        const recordDate = new Date(record.date);
                        return recordDate >= start && recordDate <= end;
                    });
                    const income = filtered.filter(record => record.type === 'income').reduce((acc, record) => acc + record.amount, 0);
                    const expense = filtered.filter(record => record.type === 'expense').reduce((acc, record) => acc + record.amount, 0);
                    return {
                        transactions: filtered.length,
                        income,
                        expense,
                        profitLoss: income - expense,
                    };
                };

                setCurrentWeekData(filterAndSummarize(currentWeek.start, currentWeek.end));

                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const menuItems = [
        {name: "Home", path: "/dashboard", icon: HomeIcon},
        {name: "Finances", path: "/finances/home", icon: FaMoneyCheck, count: currentWeekData.transactions},
        {name: "Crops", path: "/crop/home", icon: FaCannabis},
        {name: "Employees", path: "/employees/home", icon: HiUsers},
        {name: "Inventory", path: "/inventory/home", icon: FaBoxOpen},
        {name: "Insights", path: "/insights/home", icon: HiPresentationChartLine},
        {name: "Disease Tracking", path: "/diseases/home", icon: FaDisease},
        {name: "Harvest", path: "/harvest/home", icon: RiTreeLine},
    ];

    const systemItems = [
        {name: "Settings", path: "/harvest/home", icon: Cog8ToothIcon},
        {name: "Logout", path: "/harvest/home", icon: ArrowLeftStartOnRectangleIcon},
    ];


    return (
        <div className="bg-gray-100 h-full fixed w-1/6 top-12 border-r z-0 flex flex-col justify-between">
            {/* First ul */}
            <ul className="flex flex-col items-center text-gray-800 font-medium text-base py-4 px-3">
                {menuItems.map((item) => (
                    <Link key={item.name} to={item.path} className="w-full">
                        <li
                            className={`flex w-full h-12 my-1 focus:outline-none focus:ring focus:ring-lime-500 transition-all duration-200 px-1 ${
                                isActive(item.path) ? "bg-gray-200 text-black rounded-xl px-3 shadow-xl" : "hover:bg-gray-200 hover:rounded-xl"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="pl-3 flex items-center">
                                    {item.icon && <item.icon className="mr-4 h-5 w-5"/>}
                                    {item.name}
                                </div>
                                {isActive(item.path) && item.count && (
                                    <span
                                        className="bg-gray-600 rounded-full w-5 h-5 mr-2 flex items-center justify-center text-xs text-gray-100">
                            {item.count}
                        </span>
                                )}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>

            {/* Second ul */}
            <ul className="flex flex-col items-center text-gray-800 font-medium text-base py-4 px-3">
                {systemItems.map((item) => (
                    <Link key={item.name} to={item.path} className="w-full">
                        <li
                            className={`flex w-full h-12 my-1 focus:outline-none focus:ring focus:ring-lime-500 transition-all duration-200 px-1 ${
                                isActive(item.path) ? "bg-gray-200 text-black rounded-xl px-3" : "hover:bg-gray-200 hover:rounded-xl"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="pl-3 flex items-center">
                                    {item.icon && <item.icon className="mr-4 h-5 w-5"/>}
                                    {item.name}
                                </div>
                                {isActive(item.path) && item.count && (
                                    <span
                                        className="bg-gray-600 rounded-full w-5 h-5 mr-2 flex items-center justify-center text-xs text-gray-100">
                            {item.count}
                        </span>
                                )}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>


    );
}
