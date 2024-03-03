import React from "react";


import Navbar from "../../components/utility/Navbar";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import FeedbackForm from "../../components/AgroTourism/FeedbackForm";
export default function FeedbackPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <FeedbackForm/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
    )
}
