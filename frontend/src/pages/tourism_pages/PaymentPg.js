import React from "react";
import Navbar from "../../components/utility/Navbar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import PaymentPortal from "../../components/AgroTourism/payment";
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import { PaymentConfirmation } from "../../components/AgroTourism/payment";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";

export default function PaymentPg() {
    return (
        <SnackbarProvider maxSnack={3}>
            <div className="flex h-screen">
                {/* Navbar and BookingNavBar */}
                <div className="fixed top-0 left-0 h-full text-black overflow-y-auto z-10">
                    <Navbar/>
                    <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 text-black overflow-y-auto z-10">
                    <BookingNavBar/>
                </div>

                {/* Main Content */}
                <div className="flex flex-col flex-grow ml-64 mt-2">
                    {/* StepIndicator */}
                    <div className="p-4">
                        <StepIndicator/>
                    </div>
                    {/* Payment Confirmation */}
                    <div className="p-1">
                        <PaymentConfirmation/>
                    </div>
                    {/* Payment Portal */}
                    <div className="p-1">
                        <PaymentPortal/>
                    </div>
                </div>
            </div>
            </div>
        </SnackbarProvider>
    );
}
