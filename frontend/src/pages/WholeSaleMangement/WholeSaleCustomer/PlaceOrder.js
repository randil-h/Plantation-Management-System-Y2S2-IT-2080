import React from "react";

import Navbar from "../../../components/utility/Navbar";
import WholeSaleProduct from "../../../components/WholeSale_Management/WholeSaleProduct";
import {dividerClasses} from "@mui/material";
import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";
import {Link} from "react-router-dom";

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
                <div className="mt-12">
                    <Subscribe_newsletter/>
                    <Footer/>
                </div>

            </div>



        </div>

    );
}

