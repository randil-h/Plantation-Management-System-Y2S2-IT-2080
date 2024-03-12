import {useLocation} from "react-router-dom";
import Navbar from "../../components/utility/Navbar";

import SubscribeNewsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import React from "react";

export default function FarmChore() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>

            <SubscribeNewsletter />
            <Footer />
        </div>
    );
}