import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import React from "react";
import BackButton from "../../../components/utility/BackButton";
import EmployeeNavbar from "../../../components/Employee/EmployeeNavbar";
import EmpForm from "../../../components/Employee/Employee_register/EmpForm";
export default function AddEmployee() {

    const breadcrumbItems = [
        { name: 'Employees', href: '/finances' },
        { name: 'Transactions', href: '/finances/transactions' },
        { name: 'Delete Transaction', href: '/finances/transactions/addTransaction' },
    ];


    return (
        <div className="">
            <div className=" sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <EmployeeNavbar/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>

                        </div>
                        <div className="flex-col flex items-center justify-center">
                            <EmpForm/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
