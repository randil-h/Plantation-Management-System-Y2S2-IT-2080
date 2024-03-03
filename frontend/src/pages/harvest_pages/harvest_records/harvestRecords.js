import React from "react";
import {Link} from 'react-router-dom'

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";

export default function harvestRec() {
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

            </div>

        </div>
    );
}