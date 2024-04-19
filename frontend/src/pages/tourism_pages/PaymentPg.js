import React from "react";
import Navbar from "../../components/utility/Navbar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import PaymentPortal from "../../components/AgroTourism/payment";
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import {PaymentConfirmation} from "../../components/AgroTourism/payment";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";

export default function PaymentPg() {
    return (
        <SnackbarProvider maxSnack={3}> {/* Wrap the component hierarchy with SnackbarProvider */}
            <div className="flex flex-col h-screen">
                {/* Navbar */}
                <Navbar/>
                {/* Content */}
                <div className="flex flex-grow">
                    {/* SideNav */}
                    <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 text-black overflow-y-auto">
                        <BookingNavBar/>
                    </div>
                    {/* Main Content */}
                    <div className="flex flex-col flex-grow overflow-y-auto">
                        {/* Centered Progress Stepper */}
                        <div className="flex items-center justify-center p-4">
                            <StepIndicator/>


                        <PaymentConfirmation/>
                        <PaymentPortal/>
                        </div>
                    </div>
                </div>
            </div>
        </SnackbarProvider>
)
}