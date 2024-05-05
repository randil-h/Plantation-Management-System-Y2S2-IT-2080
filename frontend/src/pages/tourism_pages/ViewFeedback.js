import React from "react";
import Navbar from "../../components/utility/Navbar";
import FeedbackList from "../../components/AgroTourism/FeedbackList";
import SideNav from "../../components/AgroTourism/FeedbackSideNav";

export default function FeedbackDisplay() {
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            {/* Main content area */}
            <div className="flex flex-1">
                {/* SideNav container */}
                <div className="w-64 h-full overflow-y-auto bg-gray-100"> {/* Adjust width and background color as needed */}
                    <SideNav />
                </div>
                {/* FeedbackList container */}
                <div className="flex-1">
                    <FeedbackList />
                </div>
            </div>
        </div>
    );
}
