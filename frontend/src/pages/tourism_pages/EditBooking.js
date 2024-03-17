import React from 'react';
import Navbar from '../../components/utility/Navbar';
import SubscribeNewsletter from '../../components/landingPage/subscribe_newsletter';
import Footer from '../../components/utility/Footer';
import {useLocation} from "react-router-dom";
import EditBooking from "../../components/AgroTourism/editBooking";

export default function EditBookingPg() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <EditBooking/>
            <SubscribeNewsletter />
            <Footer />
        </div>
    );
}
