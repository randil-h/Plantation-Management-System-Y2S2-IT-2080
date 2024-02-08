import Navbar from "../components/Navbar";
import SubscribeNewsletter from "../components/subscribe_newsletter";
import Footer from "../components/Footer";
import React from "react";
import Booking from "../components/Booking";

export default function BookingPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <Booking/>
            <SubscribeNewsletter/>
            <Footer/>
        </div>
    )
}