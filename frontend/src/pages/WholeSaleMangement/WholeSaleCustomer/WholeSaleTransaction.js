import React from "react";


import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import OrderPlacingForm from "../../../components/WholeSale_Management/OrderPlacingForm";
import WholeSaleNavBar from "../../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import {TbShoppingCartCopy} from "react-icons/tb";
import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";


export default function WholeSaleTransaction() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                {/*<WholeSaleNavBar/>*/}
                <div>
                    <MyOrderIcon/>
                </div>

                {/*<a href="/WholeSale/orders"*/}
                {/*   className="font-medium text-blue-600  hover:underline">*/}
                {/*    <TbShoppingCartCopy*/}
                {/*        className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500 mt-2"*/}
                {/*        aria-hidden="true"/>*/}
                {/*</a>*/}

                <OrderPlacingForm/>
            </div>

            <div>

            </div>

        </div>
    );
}

