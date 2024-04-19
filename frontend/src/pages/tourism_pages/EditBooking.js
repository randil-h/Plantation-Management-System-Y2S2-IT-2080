import React from 'react';
import Navbar from '../../components/utility/Navbar';
import { useLocation } from "react-router-dom";
import EditBooking from "../../components/AgroTourism/editBooking";
import BookingNavBar from "../../components/AgroTourism/BookingNavBar";

export default function EditBookingPg() {
    const location = useLocation();
    const formData = location.state?.formData;

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
            <div className="flex flex-grow">
                {/* BookingNavBar */}
                <div className="fixed left-0 top-0 w-64 h-full overflow-y-auto bg-gray-100 text-black z-10">
                    <BookingNavBar />
                </div>
                {/* EditBooking */}
                <div className="flex flex-col flex-grow ml-64">
                    <EditBooking />
                </div>
            </div>
            </div>
        </div>
    );
}
