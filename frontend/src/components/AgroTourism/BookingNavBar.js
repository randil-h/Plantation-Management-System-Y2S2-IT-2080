import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

const SideNav = () => {
    return (
        <div className="flex flex-col bg-gray-100 text-black" style={{ width: "250px", minHeight: "100vh" }}>
            <div className="flex-1 overflow-y-auto">
                <nav>
                    <ul className="space-y-4 pt-5">
                        <li className="flex items-center hover:bg-gray-200 ">
                            <SlArrowLeft className="mr-2"/>
                            <Link to="/confirmation" className="block p-3">
                                My Bookings
                            </Link>
                        </li>
                        <li className="flex items-center hover:bg-gray-200">
                            <SlArrowLeft className="mr-2"/>
                            <Link to="/farmchore" className="block p-3">
                                Farm Chore Experience
                            </Link>
                        </li>
                        <li className="flex items-center hover:bg-gray-200">
                            <SlArrowLeft className="mr-2"/>
                            <Link to="/fruitvegpick" className="block p-3">
                                Farm to Plate Experience
                            </Link>
                        </li>
                        <li className="flex items-center hover:bg-gray-200">
                            <SlArrowLeft className="mr-2"/>
                            <Link to="/farmtour" className="block p-3">
                                Guided Farm Tour
                            </Link>
                        </li>
                        <li className="flex items-center hover:bg-gray-200">
                            <SlArrowLeft className="mr-2"/>
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
