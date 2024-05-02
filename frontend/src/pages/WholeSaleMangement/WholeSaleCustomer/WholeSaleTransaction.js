import React from "react";
import Navbar from "../../../components/utility/Navbar";
import OrderPlacingForm from "../../../components/WholeSale_Management/OrderPlacingForm";
import MyOrderIcon from "../../../components/WholeSale_Management/MyOrderIcon";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";


export default function WholeSaleTransaction() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
                <div>
                    <MyOrderIcon />
                </div>
                <OrderPlacingForm />
                <div className="mt-16">
                    <Subscribe_newsletter/>
                    <Footer/>
                </div>

            </div>
        </div>
    );
}
