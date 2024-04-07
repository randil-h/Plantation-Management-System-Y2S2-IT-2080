import React from "react";
import Navbar from "../../components/utility/Navbar";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import PaymentPortal from "../../components/AgroTourism/payment";
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import {PaymentConfirmation} from "../../components/AgroTourism/payment";

export default function PaymentPg() {
    return (
        <SnackbarProvider maxSnack={3}> {/* Wrap the component hierarchy with SnackbarProvider */}
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <StepIndicator/>
            <PaymentConfirmation/>
            <PaymentPortal/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
        </SnackbarProvider>
    )
}