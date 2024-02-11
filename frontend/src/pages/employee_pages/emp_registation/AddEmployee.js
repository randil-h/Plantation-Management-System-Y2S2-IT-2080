import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import React from "react";
import EmpForm from "../../../components/Employee/Employee_register/EmpForm";

export default function AddEmployee(){
    return (

        <div className="">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar/>
                </div>
            </div>

            <EmpForm/>
        </div>
    );
};