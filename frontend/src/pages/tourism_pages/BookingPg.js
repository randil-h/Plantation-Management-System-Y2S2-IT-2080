import React from "react";
import Navbar from "../../components/utility/Navbar";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import BookingForm from "../../components/AgroTourism/Booking";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
export default function BookingPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <StepIndicator/>
            <BookingForm/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
    )
}