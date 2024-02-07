import React from "react";
import { Link } from 'react-router-dom';

import SideBar from "../components/SideBar";
import Navbar from "../components/utility/Navbar";
import HomeContent from "../components/cropManagement_home/homeContent";
import FinanceNavigation from "../components/finances/FinanceNavigation";


export default function CropManagement() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>
                    <div>
                        <HomeContent />
                    </div>

                </div>
            </div>
        </div>

    );
};

