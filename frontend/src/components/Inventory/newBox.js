import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Wave from 'react-wavify';

function NewBox() {
    const [waterRecords, setWaterRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    const tank1Capacity = 50000;
    const tank2Capacity = 50000;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/waterRecords`)
            .then((response) => {
                setWaterRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Calculate total percentage of water based on the latest record
    const latestRecord = waterRecords.length > 0 ? waterRecords[waterRecords.length - 1] : null;
    const totalPercentage = latestRecord ? ((latestRecord.water_level1 + latestRecord.water_level2) / (tank1Capacity + tank2Capacity)) * 100 : 0;
    const totalWaterQuantity = latestRecord ? latestRecord.water_level1 + latestRecord.water_level2 : 0;

    return (
        <div className="relative">
            {/* Box content */}
            <div className="py-20 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-300 max-w-xs w-full mb-4 hover:bg-gray-100 mt-2 mr-60 ml-4">
                <div className="text-lg font-bold">{totalPercentage.toFixed(2)}%</div>
                <div className="text-sm">Total Water Quantity: {totalWaterQuantity} liters</div>
            </div>
        </div>
    );
}

export default NewBox;
