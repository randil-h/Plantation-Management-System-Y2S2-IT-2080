import React from "react";


import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import OrderPlacingForm from "../../../components/WholeSale_Management/OrderPlacingForm";
import WholeSaleNavBar from "../../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";


export default function WholeSaleTransaction() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                {/*<WholeSaleNavBar/>*/}
                <OrderPlacingForm/>
            </div>

            <div>

            </div>

        </div>
    );
}

