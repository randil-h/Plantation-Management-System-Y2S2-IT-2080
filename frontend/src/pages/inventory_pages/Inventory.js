import React from "react";
import { Link } from 'react-router-dom';

import Navbar from "../../components/utility/Navbar";
import SideBar from "../../components/SideBar";
import InventoryNavbar from "../../components/Inventory/InventoryNavbar";

export default function Equipment() {

    return (
        <div>
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar/>
                </div>
            </div>

            <div className="w-full col-span-5 flex flex-col ">
                <InventoryNavbar/>
            </div>

        </div>
    );
};