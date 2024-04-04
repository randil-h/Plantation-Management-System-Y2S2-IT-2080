import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import React from "react";
import BackButton from "../../../components/utility/BackButton";
import EmployeeNavbar from "../../../components/Employee/EmployeeNavbar";
import TaskList from "../../../components/Employee/Task_assign/TaskList";
import {SnackbarProvider} from "notistack";


export default function ViewTaskList() {

    const breadcrumbItems = [
        { name: 'Employees', href: '/employees/home' },
        { name: 'Assign Tasks', href: '/employees/tasks' },
    ];


    return (
        <SnackbarProvider>
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
                        <div >
                            <TaskList/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </SnackbarProvider>
    )
}