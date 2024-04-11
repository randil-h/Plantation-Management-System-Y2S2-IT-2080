import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiCoconuts } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

export default function CropOneTile() {
    const [loading, setLoading] = useState(true);
    const [plantingRecords, setPlantingRecords] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleTileClick = () => {
        setShowPopup(true);
    };

    const fieldAcreageData = [
        { Field: 'Field A', Area: 2 },
        { Field: 'Field B', Area: 2.5 },
        { Field: 'Field C', Area: 1 },
        { Field: 'Field D', Area: 2 },
        { Field: 'Field E', Area: 1 },
        { Field: 'Field F', Area: 0.5 },
        { Field: 'Field G', Area: 1 },
    ];

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/cropinput')
            .then((response) => {
                const plantingRecordsData = response.data.data;
                const filteredPlantingRecords = plantingRecordsData.filter(record => record.type === 'Planting' && record.cropType === 'Coconut');
                setPlantingRecords(filteredPlantingRecords);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const calculateCropAge = (plantingDate) => {
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - new Date(plantingDate));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (diffDays < 365) {
            return Math.floor(diffDays / 30) + " months";
        } else {
            return Math.floor(diffDays / 365) + " years";
        }
    };


    // Function to ensure fields is an array
    const toArray = (fields) => {
        if (Array.isArray(fields)) {
            return fields;
        } else if (typeof fields === 'string') {
            return [fields];
        } else {
            return [];
        }
    };

    // Function to calculate harvest area based on field acreage data
    const calculateHarvestArea = (fields) => {
        let totalArea = 0;
        const fieldsArray = toArray(fields);
        fieldsArray.forEach(field => {
            const foundField = fieldAcreageData.find(item => item.Field === field);
            if (foundField) {
                totalArea += foundField.Area;
            }
        });
        return totalArea;
    };

    return (
        <div>
            {plantingRecords.map((record) => (
                <li key={record.id}
                    className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm items-center hover:transform hover:scale-110 transition-transform duration-300"
                    onClick={handleTileClick}>
                    <GiCoconuts className="mx-auto h-10 w-10"/>
                    <h3 className="my-3 font-display font-medium">Coconut</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Harvest Area - {calculateHarvestArea(record.field)} acres <br/>
                        Crop Age - {calculateCropAge(record.date)}
                    </p>
                </li>
            ))}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-opacity-50">
                    <div className="shadow-lg bg-white rounded-lg p-8 max-w-sm relative border border-gray-300">
                        <IoCloseCircle onClick={() => setShowPopup(false)}
                                       className="absolute top-2 right-2 cursor-pointer"/>
                        <GiCoconuts className="mx-auto h-10 w-10"/>
                        <h3 className="text-lg font-semibold mb-2">Coconut</h3>
                        <p>Planted in: {plantingRecords.map((record) => (
                            <span key={record.id}>{record.field}</span>
                        ))}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
