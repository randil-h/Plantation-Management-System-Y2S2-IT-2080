import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import FinanceNavigation from "../../components/finances/FinanceNavigation";
import BackButton from "../../components/utility/BackButton";
import Breadcrumb from "../../components/utility/Breadcrumbs";


export default function Finances() {

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
    ];

    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
