import React, { useState, useEffect } from "react";
import axios from "axios";

function LastMonthHarvestRecords() {
    const [plantSummaries, setPlantSummaries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/record')
            .then((response) => {
                const currentDate = new Date();
                const lastMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1; // Adjusting for January
                const lastMonthRecords = response.data.data.filter(record => {
                    const recordDate = new Date(record.date); // Assuming there's a date property in your harvest records
                    return recordDate.getMonth() === lastMonth && recordDate.getFullYear() === currentDate.getFullYear();
                });

                // Calculate the sum of harvests for each plant type
                const summaries = {};
                lastMonthRecords.forEach(record => {
                    if (summaries[record.cropType]) {
                        summaries[record.cropType] += record.quantity;
                    } else {
                        summaries[record.cropType] = record.quantity;
                    }
                });

                // Convert summaries object to an array of objects for easier mapping
                const summaryArray = Object.entries(summaries).map(([cropType, sum]) => ({ cropType, sum }));

                setPlantSummaries(summaryArray);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching last month\'s harvest records:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading last month's harvest records...</p>
            ) : (
                <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plantSummaries.map((summary, index) => (
                        <div key={index} className="px-6 py-5 card bg-green-300 rounded-lg p-6 hover:bg-green-400"
                             style={{margin: '0.5rem'}}>
                            <h3>{summary.cropType}</h3>
                            <p>Sum of harvests: {summary.sum} kg</p>
                        </div>
                    ))}
                </div>


            )}
        </div>
    );
}

export default LastMonthHarvestRecords;
