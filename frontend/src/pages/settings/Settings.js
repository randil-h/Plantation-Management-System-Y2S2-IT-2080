import React, { useState } from 'react';

import SideBar from "../../components/SideBar";
import Navbar from "../../components/utility/Navbar";
import Breadcrumb from "../../components/utility/Breadcrumbs";
import BackButton from "../../components/utility/BackButton";
import {Link} from "react-router-dom";

import SettingsNavigation from "../../components/settings/SettingsNavigation";

export default function Settings() {
    const breadcrumbItems = [
        { name: 'Settings', href: '/finances' },
        { name: 'Crops', href: '/finances/transactions' },
    ];

    return (
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky top-0 z-10">
                        <SideBar />
                    </div>
                    <div className="w-full col-span-5 flex flex-col relative"> {/* Added relative positioning */}
                        <SettingsNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div className="flex-grow"> {/* Added flex-grow to take up remaining space */}
                            <div className="pl-8 py-4">
                                <div className="text-xl font-semibold">
                                    System Settings
                                </div>
                                <div className="text-base font-light text-gray-700 ">
                                    Adjust and save the global settings for the system
                                </div>
                            </div>

                        </div>
                        <div className="flex relative ">
                            <div
                                className="h-14  fixed border-b z-0 bottom-0 w-full right-0 bg-gray-100 bg-opacity-50 backdrop-blur border-t"
                                id="savebar">
                                <div
                                    className="flex justify-end gap-2 align-middle items-center text-sm font-semibold h-full pr-8 z-30">
                                    <Link className="bg-gray-300 rounded-full py-1 px-4 hover:bg-gray-400"
                                          to="/dashboard">
                                        Cancel
                                    </Link>
                                    <Link className="bg-lime-200 rounded-full py-1 px-4 hover:bg-lime-400"
                                          to="/dashboard">
                                        Save Settings
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
