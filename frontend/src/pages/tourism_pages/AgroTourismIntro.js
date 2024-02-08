import React from "react";

import Navbar from "../components/utility/Navbar";
import SubscribeNewsletter from "../components/landingPage/subscribe_newsletter";
import Footer from "../components/utility/Footer";
import AgroTourism from "../components/AgroTourism/agro_tourism_intro";
import Feedback from "../components/AgroTourism/feedbacks";

export default function AgroTourismIntro() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
           <AgroTourism/>
            <Feedback/>
            <SubscribeNewsletter/>
            <Footer/>
        </div>
    )
}