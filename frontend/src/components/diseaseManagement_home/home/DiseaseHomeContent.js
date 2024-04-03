import React, {useEffect, useRef, useState} from "react";
import {FaCrop, FaDisease, FaTractor} from "react-icons/fa";
import {ArrowDownCircleIcon, ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import {
    GiField, GiFruitTree,
    GiHealing,
    GiHealingShield,
    GiHealthCapsule,
    GiHealthIncrease, GiHealthNormal, GiHealthPotion,
    GiMedicalDrip,
    GiMedicines
} from "react-icons/gi";
import {FaPlantWilt, FaSunPlantWilt} from "react-icons/fa6";

export default function DiseaseHomeContent(){

    const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/diseases")
            .then((response) => {
                setDiseaseRecords(response.data.data);
                console.log("DiseaseRecords:", response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const getUntreatedPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Not Treated"
    ).length;

    const getRecoveredPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Recovered"
    ).length

    const getUnderTreatmentPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Under Treatment"
    ).length

    const getFieldCounts = {};
    DiseaseRecords.forEach((record) => {
        getFieldCounts[record.location] = (getFieldCounts[record.location] || 0) + 1;
    });

    let mostVulnerableField = [];
    let maxCount = 0;
    for(const location in getFieldCounts) {
        if(getFieldCounts[location] > maxCount) {
            mostVulnerableField = [location];
            maxCount = getFieldCounts[location];
        }else if (getFieldCounts[location] === maxCount) {
            mostVulnerableField.push(location);
        }
    }

    const getDiseaseCounts = {};
    DiseaseRecords.forEach((record) => {
        getDiseaseCounts[record.disease_name] = (getDiseaseCounts[record.disease_name] || 0) + 1;
    });

    let trendingDisease = [];
    let maxDiseaseCount = 0;
    for(const disease_name in getDiseaseCounts) {
        if(getDiseaseCounts[disease_name] > maxDiseaseCount) {
            trendingDisease = [disease_name];
            maxDiseaseCount = getDiseaseCounts[disease_name];
        } else if (getDiseaseCounts[disease_name] === maxDiseaseCount) {
            trendingDisease.push(disease_name);
        }
    }

    const getCropCount = {};
    DiseaseRecords.forEach((record) => {
        getCropCount[record.crop] = (getCropCount[record.crop] || 0) + 1;
    });

    let mostVulnerableCrop = [];
    let maxCropCount = 0;
    for(const crop in getCropCount)
    {
        if(getCropCount[crop] > maxCropCount)
        {
            mostVulnerableCrop = [crop];
            maxCropCount = getCropCount[crop];
        } else if (getCropCount[crop] === maxCropCount)
        {
            mostVulnerableCrop.push(crop);
        }
    }

    return(
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div className="w-full">
                    <h1 className=" text-lg font-semibold text-left">
                        DISEASE MANAGEMENT
                    </h1>
                    <p className=" mt-1 text-sm font-normal text-gray-500">
                        Welcome to disease management....
                    </p>
                    <div className=" justify-between grid-cols-1 ml-6 w-full mt-8 flex flex-wrap items-center md:grid-cols-3">
                        <div
                            className=" py-4 items-center justify-center rounded-lg flex-col flex-1 flex shadow-lg bg-green-300 max-w-2xl w-full mb-4 mr-4 hover:bg-green-400">
                            <div className= "mt-2 mb-3">
                                <FaSunPlantWilt className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className= " text-center text-lg font-bold">
                                Number of Untreated Plants
                            </div>
                            <div className= " text-center text-lg font-medium">
                                {getUntreatedPlantsCount}
                            </div>
                        </div>
                        <div
                            className=" py-4 flex-col items-center justify-center rounded-lg flex-1 flex shadow-lg bg-green-300 w-full mb-4 mr-4 hover:bg-green-400">
                            <div className=" mt-2 mb-3">
                                <GiHealingShield className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold">
                                Number of Recovered Plants
                            </div>
                            <div className=" text-center text-lg font-medium">
                                {getRecoveredPlantsCount}
                            </div>
                        </div>
                        <div
                            className=" py-4 flex-col items-center justify-center  rounded-lg flex-1 flex shadow-lg bg-green-300 w-full mb-4 mr-4 hover:bg-green-400">
                            <div className= " mt-2 mb-3">
                                <GiMedicines className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className= "text-center text-lg font-bold">
                                Number of Plants Under Treatment
                            </div>
                            <div className= "text-center text-lg font-medium">
                                {getUnderTreatmentPlantsCount}
                            </div>
                        </div>
                    </div>
                    <div className=" justify-between ml-6 w-full mt-3 flex flex-wrap items-center">
                        <div
                            className=" py-4 items-center justify-center  rounded-lg flex-1 flex-col  flex shadow-lg bg-green-300 max-w-2xl w-full mb-4 mr-4 hover:bg-green-400">
                            <div className="mt-2 mb-3">
                                <GiField className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold">
                                Most Vulnerable Field/s
                            </div>
                            <div className=" text-center text-base font-medium mt-2">
                                {mostVulnerableField.map((location, index) => (
                                    <span key={index}>
                                   {location}
                                        {index < mostVulnerableField.length - 1 && ", "}
                               </span>
                                ))}
                            </div>
                           {/* <div>
                                <img src="/agri4.jpg" alt="Field" className="w-fit h-fit mr-2 mt-4"/>
                            </div>*/}
                        </div>
                        <div
                            className=" py-4 items-center justify-center rounded-lg flex-1 flex flex-col shadow-lg bg-green-300 max-w-2xl w-full mb-4 mr-4 hover:bg-green-400">
                            <div className="mt-2 mb-3">
                                <FaDisease className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold ">
                                Most Trending Disease
                            </div>
                            <div className=" text-center text-base font-medium mt-2">
                                {trendingDisease.map((disease_name, index) => (
                                    <span key={index}>
                                    {disease_name}
                                        {index < trendingDisease.length - 1 && ", "}
                                </span>
                                ))}
                            </div>
                            {/*<div>
                                <img src="/dis1.jpg" alt="Disease Image" className="w-auto h-auto mr-2 mt-4"/>
                            </div>*/}
                        </div>
                        <div
                            className=" py-4 items-center justify-center rounded-lg flex-1 flex flex-col shadow-lg bg-green-300 max-w-2xl w-full mb-4 mr-4 hover:bg-green-400">
                            <div className=" mt-2 mb-3">
                                <GiFruitTree className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold ">
                                Most Vulnerable Crop
                            </div>
                            <div className=" text-center text-base font-medium mt-2">
                                {mostVulnerableCrop.map((crop, index) => (
                                    <span key={index}>
                                    {crop}
                                        {index < mostVulnerableCrop.length - 1 && ", "}
                                </span>
                                ))}
                            </div>
                            {/*<div>
                                 <img src="/agri7.jpg" alt="Apple Guava" className="w-auto mr-2 mt-4"/>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}