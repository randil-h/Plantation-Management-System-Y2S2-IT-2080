import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuCalendarSearch, LuCalendarPlus, LuCarrot, LuWheat, LuCar, LuMessageCircle } from "react-icons/lu";
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
const SideNav = () => {
    const location = useLocation();

    const isActive = (path) => {
        const currentPath = location.pathname;
        return currentPath === path;
    };

    return (
        <div className="flex flex-col bg-gray-100 text-black" style={{ width: "250px", minHeight: "100vh" }}>
            <div className="flex-1 overflow-y-auto">
                <nav>
                    <ul className="space-y-4 pt-16">
                        <li className={`flex items-center ${isActive("/booking") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuCalendarSearch className="mr-1 ml-4" />
                            <Link to="/booking" className="block p-3">
                                Book Now
                            </Link>
                        </li>
                        <li className={`flex items-center ${isActive("/confirmation") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuCalendarPlus className="mr-1 ml-4" />
                            <Link to="/confirmation" className="block p-3">
                                My Bookings
                            </Link>
                        </li>
                        <li className={`flex items-center ${isActive("/farmchore") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuWheat className="mr-1 ml-4" />
                            <Link to="/farmchore" className="block p-3">
                                Farm Chore Experience
                            </Link>
                        </li>
                        <li className={`flex items-center ${isActive("/fruitvegpick") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuCarrot className="mr-1 ml-4" />
                            <Link to="/fruitvegpick" className="block p-3">
                                Farm to Plate Experience
                            </Link>
                        </li>
                        <li className={`flex items-center ${isActive("/farmtour") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuCar className="mr-1 ml-4" />
                            <Link to="/farmtour" className="block p-3">
                                Guided Farm Tour
                            </Link>
                        </li>
                        <li className={`flex items-center ${isActive("/feedback") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:rounded-xl hover:shadow-md hover:text-lime-700"}`}>
                            <LuMessageCircle className="mr-1 ml-4" />
                            <Link to="/feedback" className="block p-3">
                                Give Feedback
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default SideNav;
