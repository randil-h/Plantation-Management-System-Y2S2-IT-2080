import React from "react";
import Navbar from "../../components/utility/Navbar";
import Footer from "../../components/utility/Footer";
import AgroTourism from "../../components/AgroTourism/agro_tourism_intro";
import Feedback from "../../components/AgroTourism/feedbacks";
import SubscribeNewsletter from "../../components/landingPage/subscribe_newsletter";

export default function AgroTourismIntro() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <div className="container">
                <AgroTourism />
                <Feedback />
                <SubscribeNewsletter />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}
