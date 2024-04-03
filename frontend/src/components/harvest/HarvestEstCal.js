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

        const totalTrees = filteredRecords.reduce((accumulator, record) => accumulator + record.treesPicked, 0);

        // Calculate total yield for the selected crop type
        const totalYield = filteredRecords.reduce((accumulator, record) => accumulator + record.quantity, 0);

        // Calculate average yield
        return Math.round((totalYield / totalTrees) * 100) /100;
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
        <div style={{fontFamily: "Arial, sans-serif", padding: "20px"}}>
            <h1 className="text-lg font-semibold text-left px-2 py-2">Harvest Calculator</h1>
            {loading ? (
                <p>Loading harvest records...</p>
            ) : (
                <div >
                    <div style={{marginBottom: "15px"}}>
                        <label htmlFor="treesPicked" style={{marginRight: "10px"}}>
                            Enter Number of Trees:
                        </label>
                        <input
                            type="number"
                            id="treesPicked"
                            name="treesPicked"
                            value={treesPicked}
                            onChange={handleChange}
                            placeholder="Enter number of trees"
                            style={{
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                    <div style={{marginBottom: "15px"}}>
                        <label htmlFor="cropType" style={{marginRight: "10px"}}>
                            Select Crop Type:
                        </label>
                        <select
                            id="cropType"
                            name="cropType"
                            value={cropType}
                            onChange={handleChange}
                            style={{
                                padding: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                         >
                            <option value="">Select Crop</option>
                            <option value="coconut">Coconut</option>
                            <option value="papaya">Papaya</option>
                            <option value="guava">Guava</option>
                        </select>
                    </div>
                    <button
                        /*onClick=>{calculateHarvest}*/
                        style={{
                            padding: "8px 20px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Calculate Expected Harvest
                    </button>
                    <div style={{marginTop: "20px"}}>
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
