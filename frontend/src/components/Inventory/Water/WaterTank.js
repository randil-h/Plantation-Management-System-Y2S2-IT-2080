import React, { useState } from 'react';

function WaterTank() {
    const [waterLevel, setWaterLevel] = useState(0);
    const [waterRecord, setWaterRecord] = useState([]);

    const handleWaterLevelChange = (event) => {
        setWaterLevel(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = {
            level: waterLevel,
            time: new Date().toLocaleString()
        };
        setWaterRecord([...waterRecord, newRecord]);
    };

    return (
        <div className="WaterTank">
            <h1>Water Tank Visualization</h1>
            <div className="border border-gray-400 rounded-md h-72 relative overflow-hidden">
                <div className="bg-blue-500 absolute bottom-0 left-0 right-0" style={{ height: `${waterLevel}%` }}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Water Level:
                    <input
                        type="number"
                        value={waterLevel}
                        onChange={handleWaterLevelChange}
                        className="border border-gray-400 rounded-md p-2 ml-2"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Submit</button>
            </form>
            <h2>Water Level Record</h2>
            <table className="border-collapse border border-gray-400 mt-2">
                <thead>
                <tr>
                    <th className="border border-gray-400 px-4 py-2">Water Level (%)</th>
                    <th className="border border-gray-400 px-4 py-2">Time</th>
                </tr>
                </thead>
                <tbody>
                {waterRecord.map((record, index) => (
                    <tr key={index} className="border border-gray-400">
                        <td className="border border-gray-400 px-4 py-2">{record.level}</td>
                        <td className="border border-gray-400 px-4 py-2">{record.time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default WaterTank;
