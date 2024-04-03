import React from "react";
import { Link } from 'react-router-dom';
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";
import RotationList from "../../../components/cropManagement_home/RotationComponents/RotationList";

const breadcrumbItems = [
    { name: 'Crop', href: '/crop/home' },
    { name: 'Rotation Records', href: '/crop/rotation/view' },
];

export default function ViewRotation() {
    return (
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6">
                    <div className="col-span-1 sticky left-0 top-0 z-50">
                        <SideBar/>
                    </div>
                    <div className="w-full col-span-5 flex flex-col">
                        <CropNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <RotationList/>
                    </div>
                </div>
            </div>
        </div>
    );
};