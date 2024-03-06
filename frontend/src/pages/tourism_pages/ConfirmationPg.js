import React from 'react';
import Navbar from '../../components/utility/Navbar';
import SubscribeNewsletter from '../../components/landingPage/subscribe_newsletter';
import Footer from '../../components/utility/Footer';
import StepIndicator from '../../components/AgroTourism/StepIndicator';
import Confirmation from '../../components/AgroTourism/confirmation';
import { useLocation } from 'react-router-dom';
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
            {/* Pass the location prop to Confirmation */}
            {formData ? <Confirmation location={location} /> : <div>No booking data available</div>}
            <SubscribeNewsletter />
            <Footer />
        </div>
    );
}
