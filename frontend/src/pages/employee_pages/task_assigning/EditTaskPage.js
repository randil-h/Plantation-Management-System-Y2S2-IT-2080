import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import React from "react";
import EmployeeNavbar from "../../../components/Employee/EmployeeNavbar";
import EditTask from "../../../components/Employee/Task_assign/EditTask";

export default function EditTaskPage() {

    const breadcrumbItems = [
        { name: 'Employee', href: '/employees' },
        { name: 'Task', href: '/employees/tasks' },
        { name: 'Edit Task Details', href: '/employees/tasks/editTasks' },
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
                        <Breadcrumb items={breadcrumbItems}/>

                        <div>
                            <EditTask/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}