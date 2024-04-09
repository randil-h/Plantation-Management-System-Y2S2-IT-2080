import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRotate } from 'react-icons/fa6';

export default function RotationTile() {
    const [loading, setLoading] = useState(true);
    const [cropFrequency, setCropFrequency] = useState({});
    const [suitableCrops, setSuitableCrops] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://elemahana-mern-8d9r.vercel.app/cropinput`)
            .then((response) => {
                const formattedRecords = response.data.data
                    .filter(record => record.type === "Planting")
                    .map(record => record.cropType);

                const plantedCrops = new Set(formattedRecords); // Remove duplicates

                axios
                    .get('http://elemahana-mern-8d9r.vercel.app/rotation')
                    .then((response) => {
                        const rotationRecords = response.data.data;
                        const cropFrequencyMap = calculateCropFrequency(rotationRecords, plantedCrops);
                        setCropFrequency(cropFrequencyMap);
                        const crops = calculateSuitableCrops(cropFrequencyMap);
                        setSuitableCrops(crops);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        setLoading(false);
                    });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const calculateCropFrequency = (rotationRecords, plantedCrops) => {
        const cropFrequencyMap = {};

        rotationRecords.forEach(record => {
            const { fieldName, cropType } = record;

            if (!plantedCrops.has(cropType)) { // Exclude currently planted crops
                if (!cropFrequencyMap[fieldName]) {
                    cropFrequencyMap[fieldName] = {};
                }

                if (!cropFrequencyMap[fieldName][cropType]) {
                    cropFrequencyMap[fieldName][cropType] = 1;
                } else {
                    if (cropType === 'Apple Guava') {
                        cropFrequencyMap[fieldName][cropType] = 'Cannot be planted again';
                    } else if (cropType === 'Papaya' && cropFrequencyMap[fieldName][cropType] < 2) {
                        cropFrequencyMap[fieldName][cropType]++;
                    }
                }
            }
        });

        return cropFrequencyMap;
    };

    const calculateSuitableCrops = (cropFrequencyMap) => {
        const suitableCropsList = [];

        for (const field in cropFrequencyMap) {
            const crops = cropFrequencyMap[field];
            for (const crop in crops) {
                if (crops[crop] !== 'Cannot be planted again' && crops[crop] < 2) {
                    suitableCropsList.push(`${crop} - ${field}`);
                }
            }
        }

        return suitableCropsList;
    };

    return (
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                <a href="/pricing" className="group">
                    <FaRotate className="mx-auto h-10 w-10"/>
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Rotation</h3>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Possible crops for upcoming season</p>
                            <ul>
                                {suitableCrops.map((crop, index) => (
                                    <li key={index}>{crop}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </a>
            </li>
        </div>
    );
}
