import React from "react";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";
import EditInventoryRecords from "../../../components/Inventory/Inventory_records/EditInventoryRecords";

export default function AddInventoryRecordsPage() {
    const breadcrumbItems = [
        { name: 'Inventory', href: '/inventory/home' },
        { name: 'Inventory Records', href: '/inventory/inventoryrecords' },
        { name: 'Edit inventory Records', href: '/inventory/inventoryrecords/editinventorypage' }
    ];

    return (
        <div className="flex"> {/* Adjusted this wrapper */}
            <div className="fixed h-full"> {/* Moved the sidebar here */}
                <SideBar />
            </div>
            <div className="flex flex-col w-full"> {/* Adjusted layout */}
                <div className="border-b sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="flex flex-row">
                    <BackButton />
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <InventoryNavbar />
                <EditInventoryRecords />
            </div>
        </div>
    );
}
