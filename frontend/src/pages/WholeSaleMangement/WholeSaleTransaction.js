import React from "react";


import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import Statbar from "../../components/dashboard_home/Statbar";
import WholeSaleNavBar from "../../components/WholeSale_Management/WholeSaleNavBar";
import WholeSaleProduct from "../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";


export default function WholeSaleTransaction() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
                <WholeSaleNavBar/>

                <div className="mx-auto max-w-3xl sm:text-center sm:py-20">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">OUR PRODUCTS</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Discover unparalleled freshness and quality in
                        every product, ensuring satisfaction and delight with every purchase.</p>
                </div>

                {/*<WholeSaleProduct/>*/}
            </div>

            <div>

            </div>

        </div>
    );
}

