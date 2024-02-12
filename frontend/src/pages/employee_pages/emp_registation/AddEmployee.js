import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import React from "react";
import EmpForm from "../../../components/Employee/Employee_register/EmpForm";
import EmployeeNavbar from "../../../components/Employee/EmployeeNavbar";


export default function AddEmployee(){
    return (

        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                {/* Fixed Sidebar */}
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>
                    <div>
                        <EmployeeNavbar/>
                        <EmpForm/>
                    </div>
                </div>

            </div>

        </div>
    );
};