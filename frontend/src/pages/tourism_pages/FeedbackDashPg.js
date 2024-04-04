import React from 'react';
import Navbar from '../../components/utility/Navbar';
import FeedbackDashboard from "../../components/AgroTourism/FeedbackDash";

console.log('Rendering FeedbackDashPg');

export default function FeedbackDashPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <FeedbackDashboard/>


        </div>
    );
}
