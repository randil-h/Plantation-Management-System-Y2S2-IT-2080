import React from "react";
import { Link } from 'react-router-dom';
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";
import RotationList from "../../../components/cropManagement_home/RotationComponents/RotationList";
import PlantingList from "../../../components/cropManagement_home/CropInputComponents/PlantingList";

const breadcrumbItems = [
    { name: 'Crop', href: '/crop/home' },
    { name: 'Planting Records', href: '/crop/planting/view' },
];


export default function ViewPlantingPage() {
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
                        <div className="flex justify-center mt-4 left-16">
                            <button
                                id="plantingButton"
                                className="bg-lime-500 text-black px-4 py-2 rounded-l-lg hover:bg-lime-400 h-12 "> Planting
                            </button>
                            <a href="/crop/input/chemical/view">
                                <button
                                    id="chemicalButton"
                                    className="bg-gray-300 text-black px-4 py-2 rounded-r-lg hover:bg-gray-400 h-12">Agrochemical
                                </button>
                            </a>
                            <div id="plantingList">
                                <PlantingList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};