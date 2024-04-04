import React from "react";


import Navbar from "../../components/utility/Navbar";
import SideBar from "../../components/SideBar";
import EmployeeNavbar from "../../components/Employee/EmployeeNavbar";
import BackButton from "../../components/utility/BackButton";
import Breadcrumb from "../../components/utility/Breadcrumbs";
import Emphome from "../../components/Employee/Emp_Home/Emphome";





export default function Employee() {

    const breadcrumbItems = [
        { name: 'Employees', href: '/employees/home' },

    ];

    return (

        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>
                    <div className="w-full col-span-5 flex flex-col ">
                        <EmployeeNavbar/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>

                        </div>
                        <div>
                            <Emphome/>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};