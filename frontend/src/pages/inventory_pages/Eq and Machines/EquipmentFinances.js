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
            <div className="">
                {/* Fixed Sidebar */}
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

            <EqFinanceTable/>
        </div>
            </div>
        </div>
    );
}