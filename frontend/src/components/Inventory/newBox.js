import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wave from 'react-wavify';
function PercentageRuler() {
    return (
        <div className="percentage-ruler absolute h-full top-0 left-0 flex flex-col justify-between items-center">
            <div className="text-xs">100%</div>
            <div className="text-xs">80%</div>
            <div className="text-xs">60%</div>
            <div className="text-xs">40%</div>
            <div className="text-xs">20%</div>
            <div className="text-xs">0%</div>
        </div>
    );
}

function NewBox() {
    const [waterRecords, setWaterRecord] = useState([]);
    const [loading, setLoading] = useState(false);

    const tank1Capacity = 50000;
    const tank2Capacity = 50000;


    useEffect(() => {
        // Display the result when waterRecords state changes
        if (waterRecords.length > 0) {
            const latestRecord = waterRecords[waterRecords.length - 1];
            const totalPercentage = ((latestRecord.water_level1 + latestRecord.water_level2) / (tank1Capacity + tank2Capacity)) * 100;

        }
    }, [waterRecords]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/waterRecords`)
            .then((response) => {
                setWaterRecord(response.data.data);
                setLoading(false);
                if (response.data.data.length > 0) {
                    const latestRecord = response.data.data[response.data.data.length - 1];
                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Calculate total percentage of water based on the latest record
    const latestRecord = waterRecords.length > 0 ? waterRecords[waterRecords.length - 1] : null;
    const totalPercentage = latestRecord ? ((latestRecord.water_level1 + latestRecord.water_level2) / (tank1Capacity + tank2Capacity)) * 100 : 0;

    return (
        <div className="py-32 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-200 max-w-xs w-full mb-4 hover:bg-gray-100 mt-2 mr-52 ml-4 relative">
            <div className="tank absolute bottom-0 bg-blue-500" style={{height: `${totalPercentage}%`, width: '100%', borderRadius: 'inherit'}}/>
            <PercentageRuler/>
        </div>
    );
}

export default NewBox;