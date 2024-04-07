import React from 'react';
import Navbar from '../../components/utility/Navbar';
import SubscribeNewsletter from '../../components/landingPage/subscribe_newsletter';
import Footer from '../../components/utility/Footer';
import { useLocation } from "react-router-dom";
import EditBooking from "../../components/AgroTourism/editBooking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";

export default function EditBookingPg() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            {/* Content */}
            <div className="flex flex-grow">
                {/* BookingNavBar */}
                <div className="w-64">
                    <BookingNavBar />
                </div>
                {/* EditBooking */}
                <div className="flex flex-col flex-grow">
                    <EditBooking />
                </div>
            </div>
            {/* Footer and Newsletter */}
            <div>
                <SubscribeNewsletter />
                <Footer />
            </div>
        </div>
    );
}
