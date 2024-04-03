import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiSandsOfTime } from 'react-icons/gi';

const BASE_URL = 'http://localhost:5555';

export default function UpcomingHarvestTile() {
    const [closestHarvest, setClosestHarvest] = useState(null);

    useEffect(() => {
        const fetchDataAndCalculateHarvestDates = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/cropinput`);
                if (response.status === 200 && response.data && response.data.data) {
                    const plantingRecords = response.data.data.filter(record => record.type === 'Planting');
                    const harvestDates = calculateHarvestDates(plantingRecords);
                    const closestHarvest = getClosestUpcomingHarvest(harvestDates);
                    setClosestHarvest(closestHarvest);
                } else {
                    console.log('Error fetching field data:', response.data.message || 'Unknown error');
                }
            } catch (error) {
                console.error('Error fetching field data:', error.message);
            }
        };

        fetchDataAndCalculateHarvestDates();
    }, []);

    const calculateHarvestDates = (fieldData) => {
        const harvestDates = {};

        fieldData.forEach(({ field, date, cropType }) => {
            let duration = 0;

            // Calculate duration based on crop type
            switch (cropType) {
                case 'Papaya':
                    duration = 8; // 8 months
                    break;
                case 'Coconut':
                    duration = 5 * 12; // 5 years converted to months
                    break;
                case 'Apple Guava':
                    duration = 6; // 6 months
                    break;
                default:
                    console.log(`Invalid crop type for field ${field}`);
                    break;
            }

            // Calculate harvest date by adding duration to planting date
            const plantingDateObj = new Date(date);
            const harvestDateObj = new Date(plantingDateObj.setMonth(plantingDateObj.getMonth() + duration));
            const harvestDate = harvestDateObj.toISOString().split('T')[0]; // Format as YYYY-MM-DD

            // Store harvest date and crop type for the field
            if (!harvestDates[field]) {
                harvestDates[field] = { cropType, harvestDate };
            }
        });

        return harvestDates;
    };

    const getClosestUpcomingHarvest = (harvestDates) => {
        let closestHarvest = null;
        let closestDate = Infinity;

        Object.entries(harvestDates).forEach(([field, { cropType, harvestDate }]) => {
            const currentDate = new Date();
            const harvestDateObj = new Date(harvestDate);
            const timeDifference = harvestDateObj.getTime() - currentDate.getTime();

            if (timeDifference > 0 && timeDifference < closestDate) {
                closestDate = timeDifference;
                closestHarvest = { field, cropType, harvestDate, daysLeft: Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) };
            }
        });

        return closestHarvest;
    };

    return (
        <div>
            {closestHarvest && (
                <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                    <GiSandsOfTime className="mx-auto h-10 w-10" />
                    <h3 className="my-3 font-display font-medium">Next Harvest in</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        {closestHarvest.daysLeft} days <br /> {closestHarvest.field} - {closestHarvest.cropType}
                    </p>
                </li>
            )}
        </div>
    );
}
