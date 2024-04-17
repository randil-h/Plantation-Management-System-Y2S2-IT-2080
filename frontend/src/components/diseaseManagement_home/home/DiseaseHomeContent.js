import React, {useEffect, useRef, useState} from "react";
import {FaCrop, FaDisease, FaTractor} from "react-icons/fa";
import axios from "axios";
import {
    GiField, GiFruitTree,
    GiHealingShield,
    GiMedicines
} from "react-icons/gi";
import { FaSunPlantWilt} from "react-icons/fa6";
import moment from "moment";

export default function DiseaseHomeContent(){

    const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [untreatedPlantsCount, setUntreatedPlantsCount] = useState(0);
    const [recoveredPlantsCount, setRecoveredPlantsCount] = useState(0);
    const [underTreatmentPlantsCount, setUnderTreatmentPlantsCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/count/untreatedPlants")
            .then((response) => {
                setUntreatedPlantsCount(response.data.totalTreesAffected);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        axios
            .get("http://localhost:5555/count/recoveredPlants")
            .then((response) => {
                setRecoveredPlantsCount(response.data.totalTreesAffected);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        axios
            .get("http://localhost:5555/count/underTreatmentPlants")
            .then((response) => {
                setUnderTreatmentPlantsCount(response.data.totalTreesAffected);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

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

    /*const getUntreatedPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Not Treated"
    ).length;

    const getRecoveredPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Recovered"
    ).length

    const getUnderTreatmentPlantsCount = DiseaseRecords.filter(
        (record) => record.status === "Under Treatment"
    ).length*/

    const monthAgo = moment().subtract(31, 'days').format('YYYY-MM-DD');

    const getFieldCounts = {};
    DiseaseRecords.forEach((record) => {
        /*getFieldCounts[record.location] = (getFieldCounts[record.location] || 0) + 1;*/
        if(moment(record.date, 'YYYY-MM-DD').isSameOrAfter(monthAgo)) {
            if(getFieldCounts[record.location]) {
                getFieldCounts[record.location] += record.plant_count;
            }
            else {
                getFieldCounts[record.location] = record.plant_count;
            }
        }
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
        /*getDiseaseCounts[record.disease_name] = (getDiseaseCounts[record.disease_name] || 0) + 1;*/
        if(moment(record.date, 'YYYY-MM-DD').isSameOrAfter(monthAgo)) {
            if(getDiseaseCounts[record.disease_name]) {
                getDiseaseCounts[record.disease_name] += record.plant_count;
            }
            else {
                getDiseaseCounts[record.disease_name] = record.plant_count;
            }
        }
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
        /*getCropCount[record.crop] = (getCropCount[record.crop] || 0) + 1;*/
        if(moment(record.date, 'YYYY-MM-DD').isSameOrAfter(monthAgo)) {
            if(getCropCount[record.crop]) {
                getCropCount[record.crop] += record.plant_count;
            }
            else {
                getCropCount[record.crop] = record.plant_count;
            }
        }
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
            <div className="flex flex-row justify-between items-center px-8 py-4 text-center">
                <div className="w-full">
                    <h1 className=" text-2xl font-bold">
                        DISEASE MANAGEMENT
                    </h1>
                    <p className=" mt-1 text-base font-normal text-gray-500">
                        Hop on Board with the Disease Management Center!!<br/>
                        Prioritize the health of your plants by monitoring them effectively.<br/>
                        Explore insights, track disease trends and make your decision making more precise....
                    </p>
                    <div className=" justify-between grid-cols-1 ml-6 w-full mt-8 flex flex-wrap items-center md:grid-cols-3">
                        <div
                            className=" py-4 items-center justify-center rounded-lg flex-col flex-1 flex shadow-lg bg-lime-300 max-w-2xl w-full mb-4 mr-4 hover:bg-lime-400">
                            <div className= "mt-2 mb-3">
                                <FaSunPlantWilt className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className= " text-center text-lg font-bold">
                                Number of Untreated Plants
                            </div>
                            <div className= " text-center text-lg font-medium">
                                {untreatedPlantsCount}
                            </div>
                        </div>
                        <div
                            className=" py-4 flex-col items-center justify-center rounded-lg flex-1 flex shadow-lg bg-lime-300 w-full mb-4 mr-4 hover:bg-lime-400">
                            <div className=" mt-2 mb-3">
                                <GiHealingShield className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold">
                                Number of Recovered Plants
                            </div>
                            <div className=" text-center text-lg font-medium">
                                {recoveredPlantsCount}
                            </div>
                        </div>
                        <div
                            className=" py-4 flex-col items-center justify-center  rounded-lg flex-1 flex shadow-lg bg-lime-300 w-full mb-4 mr-4 hover:bg-lime-400">
                            <div className= " mt-2 mb-3">
                                <GiMedicines className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className= "text-center text-lg font-bold">
                                Number of Plants Under Treatment
                            </div>
                            <div className= "text-center text-lg font-medium">
                                {underTreatmentPlantsCount}
                            </div>
                        </div>
                    </div>
                    <div className=" justify-between ml-6 w-full mt-3 flex flex-wrap items-center">
                        <div
                            className=" py-4 items-center justify-center  rounded-lg flex-1 flex-col  flex shadow-lg bg-lime-300 max-w-2xl w-full mb-4 mr-4 hover:bg-lime-400">
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
                            className=" py-4 items-center justify-center rounded-lg flex-1 flex flex-col shadow-lg bg-lime-300 max-w-2xl w-full mb-4 mr-4 hover:bg-lime-400">
                            <div className="mt-2 mb-3">
                                <FaDisease className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold ">
                                Most Trending Disease/s
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
                            className=" py-4 items-center justify-center rounded-lg flex-1 flex flex-col shadow-lg bg-lime-300 max-w-2xl w-full mb-4 mr-4 hover:bg-lime-400">
                            <div className=" mt-2 mb-3">
                                <GiFruitTree className="h-10 w-10 mx-auto"/>
                            </div>
                            <div className=" text-center text-lg font-bold ">
                                Most Vulnerable Crop/s
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