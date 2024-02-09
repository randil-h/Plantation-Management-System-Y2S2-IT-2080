import React from "react";


import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import Statbar from "../../components/dashboard_home/Statbar";
import WholeSaleNavBar from "../../components/WholeSale_Management/WholeSaleNavBar";
import {dividerClasses} from "@mui/material";


export default function PlaceOrder() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                <WholeSaleNavBar/>
            </div>

            <div>

            </div>

        </div>
    );
}

