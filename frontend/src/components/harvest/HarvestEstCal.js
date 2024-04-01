import React, { useState, useEffect } from "react";
import axios from "axios";

function HarvestCalculator() {
    const [treesPicked, setTreesPicked] = useState('');
    const [cropType, setCropType] = useState('');
    const [averageYield, setAverageYield] = useState(null);
    const [expectedHarvest, setExpectedHarvest] = useState(0);
    const [harvestRecords, setHarvestRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/record')
            .then((response) => {
                setHarvestRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching harvest records:', error);
                setLoading(false);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'treesPicked') {
            setTreesPicked(value);
        } else if (name === 'cropType') {
            setCropType(value);
        }
    };

    useEffect(() => {
        if (cropType && treesPicked) {
            const averageYieldFromDB = calculateAverageYieldFromRecords(cropType);
            setAverageYield(averageYieldFromDB);
            calculateHarvest(averageYieldFromDB);
        }
    }, [cropType, treesPicked, harvestRecords]);

    const calculateAverageYieldFromRecords = (cropType) => {
        // Filter records based on selected crop type
        const filteredRecords = harvestRecords.filter(record => record.cropType === cropType);

        // Calculate total yield for the selected crop type
        const totalYield = filteredRecords.reduce((accumulator, record) => accumulator + record.quantity, 0);

        // Calculate average yield
        return totalYield / filteredRecords.length;
    };

    const calculateHarvest = (averageYieldFromDB) => {
        const trees = parseInt(treesPicked);
        if (!isNaN(trees) && trees > 0 && averageYieldFromDB) {
            // Calculate estimated harvest
            const harvest = trees * averageYieldFromDB;
            setExpectedHarvest(harvest);
        } else {
            // Handle invalid input
            setExpectedHarvest(0);
        }
    };

    return (
        <div>
            <h2>Harvest Calculator</h2>
            {loading ? (
                <p>Loading harvest records...</p>
            ) : (
                <div>
                    <div>
                        <label htmlFor="treesPicked">Enter Number of Trees:</label>
                        <input
                            type="number"
                            id="treesPicked"
                            name="treesPicked"
                            value={treesPicked}
                            onChange={handleChange}
                            placeholder="Enter number of trees"
                        />
                    </div>
                    <div>
                        <label htmlFor="cropType">Select Crop Type:</label>
                        <select
                            id="cropType"
                            name="cropType"
                            value={cropType}
                            onChange={handleChange}
                        >
                            <option value="">Select Crop</option>
                            <option value="coconut">Coconut</option>
                            <option value="papaya">Papaya</option>
                            <option value="guava">Guava</option>
                        </select>
                    </div>
                    <button onClick={calculateHarvest}>Calculate Expected Harvest</button>
                    <div>
                        {averageYield !== null ? (
                            <p>Average Yield: {averageYield} kg/tree</p>
                        ) : (
                            <p>No data available for the selected crop type.</p>
                        )}
                        <p>Expected Harvest: {expectedHarvest} kg</p>


                    </div>
                </div>
            )}
        </div>
    );
}

export default HarvestCalculator;
