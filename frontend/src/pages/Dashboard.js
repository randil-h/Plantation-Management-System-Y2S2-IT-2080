import React from "react";

import SideBar from "../components/SideBar";
import Navbar from "../components/utility/Navbar";
import Statbar from "../components/dashboard_home/Statbar";
import BackButton from "../components/utility/BackButton";
import Breadcrumb from "../components/utility/Breadcrumbs";


export default function Dashboard() {

    return (
        <div className="">
            {/* Navbar */}
            <div className=" sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5">
                        <Statbar/>
                    </div>
                </div>
            </div>

        </div>
    );
}
