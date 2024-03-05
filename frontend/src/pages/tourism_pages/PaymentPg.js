import React from "react";
import Navbar from "../../components/utility/Navbar";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import PaymentPortal from "../../components/AgroTourism/payment";
export default function PaymentPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <StepIndicator/>
            <PaymentPortal/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
    )
}