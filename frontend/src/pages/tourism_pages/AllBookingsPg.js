import React from "react";
import Navbar from "../../components/utility/Navbar";
import Footer from "../../components/utility/Footer";
import BookingForm from "../../components/AgroTourism/Booking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";
import StepIndicator from "../../components/AgroTourism/StepIndicator";
import AllBookings from "../../components/AgroTourism/AllBookings";
import SideBar from "../../components/SideBar";
export default function AllBookingsPg() {
    return (
        <div>
            <Navbar/>
            <div style={{display: "flex"}}>
                <SideBar/>
                <div style={{marginLeft: "250px", width: "100%"}}>
                    <AllBookings/>
                </div>
            </div>
        </div>

    );
}