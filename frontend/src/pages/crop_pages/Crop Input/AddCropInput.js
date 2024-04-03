import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import AddCropInputForm from "../../../components/cropManagement_home/CropInputComponents/AddCropInputForm";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

const breadcrumbItems = [
    { name: 'Crop', href: '/crop/home' },
    { name: 'Crop Input', href: '/crop/input/view' },
    { name: 'Add Crop Input', href: '/crop/input/add'}
];

export default function AddCropInput() {
    return (
        <div>
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex">
                {/* Fixed Sidebar */}
                <div className="fixed h-full w-1/6">
                    <SideBar/>
                </div>
                <div className="flex flex-row ml-64">
                    <BackButton/>
                    <Breadcrumb items={breadcrumbItems}/>
                </div>
            </div>
            <AddCropInputForm/>
        </div>
    );
}