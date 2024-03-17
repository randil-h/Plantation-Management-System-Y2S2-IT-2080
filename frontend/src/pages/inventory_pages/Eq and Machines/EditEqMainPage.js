
import SideBar from "../../../components/SideBar";

import React from "react";

import Navbar from "../../../components/utility/Navbar";
import EditEqMain from "../../../components/Inventory/Eq and Machine/EditEqMain";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";


export default function Equipment() {
    const breadcrumbItems = [
        { name: 'Inventory', href: '/inventory/home' },
        { name: 'Maintenances log', href: '/inventory/maintenancelog' },
        { name: 'Edit Maintenance Record', href: '/inventory/maintenancelog/editeqmainpage' },
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
                            <EditEqMain/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}