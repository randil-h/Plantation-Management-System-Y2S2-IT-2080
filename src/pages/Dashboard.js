import React from "react";

import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/Welcome_banner"
import FunctionBar from "../components/Function_bar";
import SubscribeNewsletter from "../components/subscribe_newsletter";
import StatBar from "../components/stat_bar";
import Footer from "../components/Footer";
import NewEmployeeForm from "../components/AddNewEmployee";

export default function Dashboard() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full">
                    <SideBar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 ml-72  overflow-x-hidden overflow-y-auto">
                    {/* Content to be stacked to the right of the Sidebar */}

                    <WelcomeBanner/>
                    <FunctionBar/>
                    <SubscribeNewsletter/>
                    <Footer/>
                    {/* Add more content components as needed */}
                </div>
            </div>
        </div>
    );
}
