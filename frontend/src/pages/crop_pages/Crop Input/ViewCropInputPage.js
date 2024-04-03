import React from "react";
import { Link } from 'react-router-dom';

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import CropNavigation from "../../../components/cropManagement_home/CropNavigation";
import PlantingList from "../../../components/cropManagement_home/CropInputComponents/PlantingList";
import ChemicalList from "../../../components/cropManagement_home/CropInputComponents/ChemicalList";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

const breadcrumbItems = [
    { name: 'Crop', href: '/crop/home' },
    { name: 'Crop Input', href: '/crop/input/view' },
];

export default function CropManagement() {
    const showPlantingList = () => {
        document.getElementById('plantingList').style.display = 'block';
        document.getElementById('chemicalList').style.display = 'none';
        document.getElementById('plantingButton').className = "bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600 h-12";
        document.getElementById('chemicalButton').className = "bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-400 h-12";
    };

    const showChemicalList = () => {
        document.getElementById('plantingList').style.display = 'none';
        document.getElementById('chemicalList').style.display = 'block';
        document.getElementById('plantingButton').className = "bg-gray-300 text-gray-700 px-4 py-2 rounded-l-lg hover:bg-gray-400 h-12";
        document.getElementById('chemicalButton').className = "bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 h-12";
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="grid sm:grid-cols-6 w-full">
                    <div className="col-span-1 sticky left-0 top-0 z-50">
                        <SideBar/>
                    </div>
                    <div className="col-span-5">
                        <CropNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div className="flex justify-center mt-4 left-16">
                            <button
                                id="plantingButton"
                                onClick={showPlantingList}
                                className="bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600 h-12 "> Planting
                            </button>
                            <button
                                id="chemicalButton"
                                onClick={showChemicalList}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-400 h-12">Agrochemical
                            </button>
                            <div id="plantingList">
                                <PlantingList/>
                            </div>
                            <div id="chemicalList" style={{display: 'none'}}>
                                <ChemicalList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
