import React from 'react';
import Navbar from '../../components/utility/Navbar';
import FeedbackDashboard from "../../components/AgroTourism/FeedbackDash";
import FeedbackSideNav from "../../components/AgroTourism/FeedbackSideNav";
console.log('Rendering FeedbackDashPg');

export default function FeedbackDashPg() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="flex">
                <FeedbackSideNav/>
                <div className="mx-28"></div>
                <FeedbackDashboard/>
            </div>

        </div>
    );
}
