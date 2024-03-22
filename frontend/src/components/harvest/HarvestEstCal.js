import React, { useState } from "react";
import axios from "axios";


function HarvestCalculator() {
    const [numberOfTrees, setNumberOfTrees] = useState('');
    const [expectedHarvest, setExpectedHarvest] = useState(0);

    const handleChange = (event) => {
        const { value } = event.target;
        setNumberOfTrees(value);
    };

    const calculateHarvest = () => {
        // Assuming an average yield per tree is 10 kg
        const yieldPerTree = 10; // in kg
        const trees = parseInt(numberOfTrees);
        if (!isNaN(trees) && trees > 0) {
            const harvest = trees * yieldPerTree;
            setExpectedHarvest(harvest);
        } else {
            // Handle invalid input
            setExpectedHarvest(0);
        }
    };

    return (
        <div>
            <h2>Harvest Calculator</h2>
            <div>
                <label htmlFor="numberOfTrees">Enter Number of Trees:</label>
                <input
                    type="number"
                    id="numberOfTrees"
                    value={numberOfTrees}
                    onChange={handleChange}
                    placeholder="Enter number of trees"
                />
            </div>
            <button onClick={calculateHarvest}>Calculate Expected Harvest</button>
            <div>
                <p>Expected Harvest: {expectedHarvest} kg</p>
            </div>
        </div>
    );
}

export default HarvestCalculator;
