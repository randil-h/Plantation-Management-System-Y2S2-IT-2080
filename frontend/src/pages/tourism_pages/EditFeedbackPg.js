import React from 'react';
import Navbar from '../../components/utility/Navbar';
import {useLocation} from "react-router-dom";
import FeedbackSideNav from "../../components/AgroTourism/FeedbackSideNav";
import EditFeedback from "../../components/AgroTourism/editFeedback";

export default function EditFeedbackPg() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            {/* Content */}
            <div className="flex flex-grow">
                {/* FeedbackSideNav */}
                <div className="w-64 overflow-y-auto">
                    <FeedbackSideNav />
                </div>
                {/* EditFeedback */}
                <div className="flex flex-col flex-grow overflow-y-auto">
                    <EditFeedback />
                </div>
            </div>
        </div>
    );
}
