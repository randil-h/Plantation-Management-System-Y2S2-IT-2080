import React from "react";
import Navbar from "../../components/utility/Navbar";
import Footer from "../../components/utility/Footer";
import BookingForm from "../../components/AgroTourism/Booking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import AllBookings from "../../components/AgroTourism/AllBookings";
export default function AllBookingsPg() {
    return (
        <div>
            <Navbar />


        <AllBookings/>
        </div>
    );
}