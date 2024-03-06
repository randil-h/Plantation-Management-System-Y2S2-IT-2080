import React from "react";


import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import WholeSaleNavBar from "../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import OrderHistory from "../../components/WholeSale_Management/OrderHistory";

export default function MyOrders() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                <WholeSaleNavBar/>
            </div>

            <div class="bg-white p-8 rounded-md w-full">
                <div class=" flex items-center justify-between pb-6">
                    <div>
                        <h1 class="text-gray-600 font-semibold">My Orders</h1>
                    </div>
                </div>

                <div>
                    <OrderHistory/>
                </div>
            </div>
        </div>
    );
}

