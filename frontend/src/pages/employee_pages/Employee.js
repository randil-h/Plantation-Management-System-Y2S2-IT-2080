import React from "react";
import Navbar from "../../components/utility/Navbar";
import SideBar from "../../components/SideBar";
import EmployeeNavbar from "../../components/Employee/EmployeeNavbar";




export default function Employee() {

    return (

        <div className="">
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

                    </div>
                </div>
            </div>

        </div>
    )
}