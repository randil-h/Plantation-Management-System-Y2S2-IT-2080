import React, { useState, useEffect } from "react";
import axios from "axios";

function HarvestCalculator() {
    const [treesPicked, setTreesPicked] = useState('');
    const [cropType, setCropType] = useState('');
    const [averageYield, setAverageYield] = useState(null);
    const [expectedHarvest, setExpectedHarvest] = useState(0);
    const [harvestRecords, setHarvestRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recentHarvestResults, setRecentHarvestResults] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://elemahana-backend.vercel.app/record')
            .then((response) => {
                setHarvestRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching harvest records:', error);
                setLoading(false);
            });
    }, []);

    const updateRecentHarvestResults = () => {
        if (expectedHarvest && cropType && treesPicked) {
            const recentResult = {
                cropType: cropType,
                treesPicked: treesPicked,
                result: expectedHarvest
            };
            setRecentHarvestResults(prevResults => [recentResult, ...prevResults.slice(0, 9)]);
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'treesPicked') {
            setTreesPicked(value);
            if (!isNaN(value) && parseFloat(value) >= 0) {
                setTreesPicked(value);
            } else {

                event.preventDefault();
                alert("Enter positive number");
            }
        } else if (name === 'cropType') {
            setCropType(value);
        }
    };

    const handleClick = () => {
        if (cropType && treesPicked) {
            const averageYieldFromDB = calculateAverageYieldFromRecords(cropType);
            setAverageYield(averageYieldFromDB);
            calculateHarvest(averageYieldFromDB);
            /*setRecentHarvestResults([]); // Reset recentHarvestResults array
            setButtonClicked(true); // Set buttonClicked to true
            updateRecentHarvestResults(); // Call function to update recent harvest results*/
        }
    };



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
            const harvest = Math.round((trees * averageYieldFromDB) * 100) / 100;
            setExpectedHarvest(harvest);
        } else {
            // Handle invalid input
            setExpectedHarvest(0);
        }
    };

    return (

        <div style={{fontFamily: "Arial, sans-serif", padding: "20px"}} >
            <div className="flex justify-center py-6">
            <h1 className="text-3xl font-semibold text-left ">Harvest Calculator</h1>
            </div>
            {loading ? (
                <p>Loading harvest records...</p>
            ) : (
                <div className="flex justify-center py-6">
                    <div className="inline-block p-4 bg-green-200 rounded border border-green-700">
                        <div className="flex flex-col items-center">
                            <div className="flex">
                                <div className="mb-4 mr-4">
                                    <label htmlFor="treesPicked" className="mr-4">
                                        Enter Number of Trees:
                                    </label>
                                    <input
                                        type="number"
                                        id="treesPicked"
                                        name="treesPicked"
                                        value={treesPicked}
                                        onChange={handleChange}
                                        placeholder="Enter number of trees"
                                        className="p-2 rounded border border-gray-300"
                                        min="0"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cropType" className="mr-4">
                                        Select Crop Type:
                                    </label>
                                    <select
                                        id="cropType"
                                        name="cropType"
                                        value={cropType}
                                        onChange={handleChange}
                                        className="p-1 rounded border border-gray-300 w-32"
                                    >
                                        <option value="">Select Crop</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="papaya">Papaya</option>
                                        <option value="guava">Guava</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleClick}
                                className="py-2 px-4 bg-blue-500 text-white rounded border border-blue-500 hover:bg-blue-700 cursor-pointer"
                            >
                                Calculate Expected Harvest
                            </button>
                        </div>

                        <div className="py-2 px-4 mt-4 bg-amber-50 rounded border border-green-700">
                            <div className="flex">
                            {averageYield !== null ? (
                                <p className="px-16">Average Yield: {averageYield} kg/tree</p>
                            ) : (
                                <p className="px-16">Select a crop type</p>
                            )}
                            <p className="font-semibold px-16">Expected Harvest: {expectedHarvest} kg</p>
                                </div>
                        </div>
                    </div>
                </div>


            )}
            {/* Division for Recent Harvest Results */}

            {/* <div style={{ marginTop: "20px" }}>
                    <h2 className="text-lg font-semibold">Recent Harvest Results</h2>
                    {buttonClicked && (
                    <ul>
                        {recentHarvestResults.map((result, index) => (
                            <li key={index}>
                                <strong>Crop Type:</strong> {result.cropType}, <strong>Trees Picked:</strong> {result.treesPicked}, <strong>Result:</strong> {result.result} kg
                            </li>
                        ))}
                    </ul>
                    )}
                </div> */}

        </div>
    );
}

export default HarvestCalculator;



