import React from "react";
import Navbar from "../../components/utility/Navbar";
import Footer from "../../components/utility/Footer";
import BookingForm from "../../components/AgroTourism/Booking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";


export default function BookingPg() {
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <div className="flex flex-grow">
                {/* SideNav */}
                <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 text-black overflow-y-auto">
                    <BookingNavBar />
                </div>
                {/* Main Content */}
                <div className="flex flex-col flex-grow overflow-y-auto">
                    {/* Centered Progress Stepper */}
                    <div className="flex items-center justify-center p-4">
                        <StepIndicator />
                    </div>
                    {/* BookingForm */}
                    <div className="flex-grow">
                        <BookingForm />
                    </div>
                </div>
            </div>

        </div>
    );
}
