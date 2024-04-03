import SideBar from "../../../components/SideBar";
import React from "react";
import Navbar from "../../../components/utility/Navbar";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";
import AddInventoryRecords from "../../../components/Inventory/Inventory_records/AddInventoryRecords";



export default function AddInventoryRecordsPage() {

    const breadcrumbItems = [
        { name: 'Inventory', href: '/inventory/home' },
        { name: 'Inventory Records', href: '/inventory/inventoryrecords' },
        { name: 'Add inventory Records', href: '/inventory/inventoryrecords/addinventoryrecordspage' }
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
                            <AddInventoryRecords/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}