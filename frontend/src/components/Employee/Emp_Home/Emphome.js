import React from "react";
import { FaUsers, FaUserPlus, FaTasks, FaCalendarPlus } from "react-icons/fa";

function Emphome() {


    return (
        <div className="container mx-auto px-4 py-6"> {/* Adjusted py-10 instead of py-20 */}
            <h1 className="text-3xl text-center mb-4">
                <span className="text-black font-semibold">Employee Management System</span>
            </h1>
            <p className="text-center mb-12 mt-2 text-gray-500 font-semibold">Welcome to the Employee Management System.</p>
            <div className="section mb-8">
                <div className="section-header flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Employee Registration</h2>
                    <a href="/employees/registration" className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800" >
                        View All Employees
                    </a>
                </div>
                <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card bg-green-300 rounded-lg p-6 hover:bg-green-400  ">
                        <FaUsers className="icon text-black mb-2"/>
                        <h3 className="text-lg font-semibold text-black">Total Employees</h3>
                        <p className="text-xl text-black">50</p>
                    </div>
                    <div className="card bg-green-300 rounded-lg p-6 hover:bg-green-400">
                        <FaUserPlus className="icon text-black mb-2"/>
                        <h3 className="text-lg font-semibold text-black">Registered Today</h3>
                        <p className="text-xl text-black">5</p>
                    </div>
                </div>
            </div>
            <div className="section mb-8">
                <div className="section-header flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Assign Tasks</h2>
                    <a href="/employees/tasks" className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                        View All Tasks
                    </a>
                </div>
                <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card bg-green-300 rounded-lg p-6 hover:bg-green-400">
                        <FaTasks className="icon text-black mb-2"/>
                        <h3 className="text-lg font-semibold text-black">Total Tasks</h3>
                        <p className="text-xl text-black">20</p>
                    </div>
                    <div className="card bg-green-300 rounded-lg p-6 hover:bg-green-400">
                        <FaCalendarPlus className="icon text-black mb-2"/>
                        <h3 className="text-lg font-semibold text-black">Assigned Today</h3>
                        <p className="text-xl text-black">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Emphome;
