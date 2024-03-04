import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../../../components/SideBar";
import ChemicalList from "../../../components/Inventory/Chemical/ChemicalList";
import Navbar from "../../../components/utility/Navbar";
import InventoryNavbar from "../../../components/Inventory/InventoryNavbar";

export default function Equipment() {
    return (
        <div className="Equipment">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                {/* Fixed Sidebar */}
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>


                    <div className="w-full col-span-5 flex flex-col ">
                        <InventoryNavbar/>
                    </div>

                    <ChemicalList/>
                </div>
            </div>
        </div>
    );
}