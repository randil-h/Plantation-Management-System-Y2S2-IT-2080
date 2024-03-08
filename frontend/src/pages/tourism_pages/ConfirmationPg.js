import React from 'react';
import Navbar from '../../components/utility/Navbar';
import SubscribeNewsletter from '../../components/landingPage/subscribe_newsletter';
import Footer from '../../components/utility/Footer';
import StepIndicator from '../../components/AgroTourism/StepIndicator';
import Confirmation from '../../components/AgroTourism/editBooking';
import { useLocation } from 'react-router-dom';
import BookingList from "../../components/AgroTourism/BookingList";
console.log('Rendering ConfirmationPg');

export default function BookingPg() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <StepIndicator />
        <BookingList/>

            <SubscribeNewsletter />
            <Footer />
        </div>
    );
}
