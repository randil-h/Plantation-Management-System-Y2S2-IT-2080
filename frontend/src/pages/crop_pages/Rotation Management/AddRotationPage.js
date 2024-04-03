import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import Rotation from "../../../components/cropManagement_home/RotationComponents/recordRotation"
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

const breadcrumbItems = [
    { name: 'Crop', href: '/crop/home' },
    { name: 'Rotation Records', href: '/crop/rotation/view' },
    { name: 'Add Rotation', href: '/crop/rotation/add'}
];

export default function AddRotationPage() {
    return (
        <div className="Equipment">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                <div className="fixed h-full w-1/6">
                    <SideBar/>
                </div>
                <div className="flex flex-row ml-64">
                    <BackButton/>
                    <Breadcrumb items={breadcrumbItems}/>
                </div>
            </div>
            <Rotation/>
        </div>
    );
}