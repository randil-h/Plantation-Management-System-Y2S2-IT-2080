import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import React from "react";
import EqFinanceTable from "../../../components/Inventory/Eq and Machine/EqFinanceTable";

export default function Equipment() {
    return (
        <div className="Equipment">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar/>
                </div>
            </div>

            <EqFinanceTable/>
        </div>
    );
}