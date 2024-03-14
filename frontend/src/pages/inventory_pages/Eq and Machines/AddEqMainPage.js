
import SideBar from "../../../components/SideBar";

import React from "react";

import Navbar from "../../../components/utility/Navbar";
import AddEqMain from "../../../components/Inventory/Eq and Machine/AddEqMain";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";


export default function Equipment() {

    const breadcrumbItems = [
        { name: 'Inventory', href: '/inventory/home' },
        { name: 'Maintenances log', href: '/inventory/maintenancelog' },
        { name: 'Add New Maintenance Record', href: '/inventory/maintenancelog/addeqmainpage' },
    ];

    return (
        <div className="Equipment">
            <div className="">
                <Navbar />
                <div className="">
                    <div className="grid sm:grid-cols-6 ">
                        <div className="col-span-1 sticky top-0">
                            <SideBar />
                        </div>

                        <div className="w-full col-span-5 flex flex-col ">
                            <InventoryNavbar/>
                            <div className="flex flex-row">
                                <BackButton />
                                <Breadcrumb items={breadcrumbItems} />
                            </div>
                                <AddEqMain/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}