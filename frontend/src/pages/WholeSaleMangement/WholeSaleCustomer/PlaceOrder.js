import React from "react";


import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import FinanceTransactionsStatBar from "../../../components/finances/finance_transactions/FinanceTransactionsStatBar";
import WholeSaleNavBar from "../../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import {TbShoppingCartCopy} from "react-icons/tb";
import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";
import Footer from "../../../components/utility/Footer";


export default function PlaceOrder() {
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
                {/*        className="h-10 w-10 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500 mt-2"*/}
                {/*        aria-hidden="true"/>*/}
                {/*</a>*/}

                <div className="mx-auto max-w-3xl sm:text-center sm:py-20">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-6xl">OUR PRODUCTS</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">Discover unparalleled freshness and quality in
                        every product, ensuring satisfaction and delight with every purchase.</p>
                </div>

                <WholeSaleProduct/>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="mx-auto max-w-xs px-8">
                        <a href="/wholesaleDashboard"
                           className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Go
                            to Dashboard
                        </a>
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </div>

    );
}

