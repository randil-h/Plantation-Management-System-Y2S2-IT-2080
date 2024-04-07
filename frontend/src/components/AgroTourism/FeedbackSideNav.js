// SideNav.js
import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

const SideNav = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100 text-black" style={{ width: "250px" }}>
            <nav className="flex-1">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <SlArrowLeft className="mr-2" />
                        <Link to="/feedback" className="block p-3 hover:bg-gray-200">
                            Feedback Form
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <SlArrowLeft className="mr-2" />
                        <Link to="/feedbacklist" className="block p-3 hover:bg-gray-200">
                            All Feedbacks
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <SlArrowLeft className="mr-2" />
                        <Link to="/feedbackdash" className="block p-3 hover:bg-gray-200">
                            Feedback Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
