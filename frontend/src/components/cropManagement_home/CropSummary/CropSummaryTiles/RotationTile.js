import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRotate } from 'react-icons/fa6';

export default function RotationTile() {
    const [loading, setLoading] = useState(true);
    const [cropFrequency, setCropFrequency] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:5555/rotation')
            .then((response) => {
                const rotationRecords = response.data.data;
                const cropFrequencyMap = calculateCropFrequency(rotationRecords);
                setCropFrequency(cropFrequencyMap);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const calculateCropFrequency = (rotationRecords) => {
        const cropFrequencyMap = {};

        rotationRecords.forEach(record => {
            const { fieldName, cropType } = record;

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
        });

        return cropFrequencyMap;
    };

    return (
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                <a href="/pricing" className="group">
                    <FaRotate className="mx-auto h-10 w-10"/>
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Rotation</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">Possible crops for upcoming
                        season
                        <br/> Mango - TJC </p>
                </a>
            </li>
        </div>
    );
}
