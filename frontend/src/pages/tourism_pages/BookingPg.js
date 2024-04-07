import React from "react";
import Navbar from "../../components/utility/Navbar";
import Footer from "../../components/utility/Footer";
import BookingForm from "../../components/AgroTourism/Booking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
export default function BookingPg() {
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <div className="flex flex-grow">
                {/* SideNav */}
                <div className="w-64 bg-gray-100 text-black">
                    <BookingNavBar/>
                </div>
                {/* Main Content */}
                <div className="flex flex-col flex-grow">
                    {/* Centered Progress Stepper */}
                    <div className="flex items-center justify-center p-4">
                        <StepIndicator/>
                    </div>
                    {/* BookingForm */}
                    <div className="flex-grow">
                        <BookingForm />
                    </div>
                </div>
            </div>
            {/* Footer and Newsletter */}
            <Subscribe_newsletter/>
            <Footer />
        </div>
    );
}
