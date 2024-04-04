import React from 'react';
import Navbar from '../../components/utility/Navbar';
import SubscribeNewsletter from '../../components/landingPage/subscribe_newsletter';
import Footer from '../../components/utility/Footer';
import {useLocation} from "react-router-dom";

import EditFeedback from "../../components/AgroTourism/editFeedback";
export default function EditFeedbackPg() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <EditFeedback/>
            <SubscribeNewsletter />
            <Footer />
        </div>
    );
}
