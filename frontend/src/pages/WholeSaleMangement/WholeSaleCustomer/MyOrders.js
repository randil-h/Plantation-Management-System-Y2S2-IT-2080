import React from "react";


import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";
import Navbar from "../../../components/utility/Navbar";
import WholeSaleNavBar from "../../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import OrderHistory from "../../../components/WholeSale_Management/OrderHistory";
import {TbShoppingCartCopy} from "react-icons/tb";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";


export default function MyOrders() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                {/*<WholeSaleNavBar/>*/}
            </div>
            <div>
                <MyOrderIcon/>
            </div>

            <div class="bg-white p-8 rounded-md w-full">
                <div class=" flex items-center justify-between pb-6">
                    <div>
                        <h1 class="text-gray-700 text-3xl font-semibold ml-32 mt-2">My Orders</h1>
                    </div>
                </div>

                <OrderHistory/>
            </div>

            <Subscribe_newsletter/>
            <Footer/>
        </div>
    );
}

