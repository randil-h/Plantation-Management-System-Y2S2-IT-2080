import React from "react";
import { Link } from 'react-router-dom';

import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import InSettings from "../../../components/Inventory/settings/InSettings";
import SettingsNavigation from "../../../components/settings/SettingsNavigation";

export default function Inventory() {

    const breadcrumbItems = [
        { name: 'Inventory', href: '/settings/inventory' },
    ];


    return (
        <div>
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col">
                        <SettingsNavigation/>
                        <div className="flex flex-row z-10">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <InSettings/>
                    </div>
                </div>
            </div>
        </div>
    );
};