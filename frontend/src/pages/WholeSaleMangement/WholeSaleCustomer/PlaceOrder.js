import React from "react";

import Navbar from "../../../components/utility/Navbar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";

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

                <div className="mx-auto max-w-3xl sm:text-center sm:py-20">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-6xl">OUR PRODUCTS</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">Discover unparalleled freshness and quality in
                        every product, ensuring satisfaction and delight with every purchase.</p>
                </div>

                <WholeSaleProduct/>

                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="mx-auto max-w-xs px-8">
                        <Link to="/wholesaleDashboard"
                           className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Go
                            to Dashboard
                        </a>
                    </div>
                </div>
                <Subscribe_newsletter/>
                <Footer/>
            </div>



        </div>

    );
}

