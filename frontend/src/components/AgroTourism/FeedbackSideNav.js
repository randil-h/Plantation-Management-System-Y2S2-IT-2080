import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLineChart } from "react-icons/lu";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";

const SideNav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 text-black" style={{ width: "250px" }}>
            <nav className="flex-1">
                <ul className="space-y-4 pt-4">
                    <li className={`flex items-center p-3 rounded-md ${isActive("/feedback") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:shadow-md hover:text-lime-700"}`}>
                        <BiMessageRoundedDots className="mr-3 ml-2" />
                        <Link to="/feedback" className="block">
                            Feedback Form
                        </Link>
                    </li>
                    <li className={`flex items-center p-3 rounded-md ${isActive("/feedbacklist") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:shadow-md hover:text-lime-700"}`}>
                        <BiMessageRoundedDetail className="mr-3 ml-2" />
                        <Link to="/feedbacklist" className="block">
                            All Feedbacks
                        </Link>
                    </li>
                    <li className={`flex items-center p-3 rounded-md ${isActive("/feedbackdash") ? "bg-gray-200 text-lime-700 rounded-xl px-3 shadow-md" : "hover:bg-gray-200 hover:shadow-md hover:text-lime-700"}`}>
                        <LuLineChart className="mr-3 ml-2" />
                        <Link to="/feedbackdash" className="block">
                            Feedback Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
