import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

const SideNav = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100 text-black" style={{ width: "250px" }}>
            <nav className="flex-1">
                <ul className="space-y-4 pt-4">
                    <li className="flex items-center hover:bg-gray-200 p-3 rounded-md">
                        <SlArrowLeft className="mr-2" />
                        <Link to="/feedback" className="block">
                            Feedback Form
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-200 p-3 rounded-md">
                        <SlArrowLeft className="mr-2" />
                        <Link to="/feedbacklist" className="block">
                            All Feedbacks
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-200 p-3 rounded-md">
                        <SlArrowLeft className="mr-2" />
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
