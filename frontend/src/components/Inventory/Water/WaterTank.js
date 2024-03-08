import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaEdit, FaTrash} from "react-icons/fa";

function WaterTank() {
    const [waterLevel, setWaterLevel] = useState(0);
    const [waterRecord, setWaterRecord] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchWaterRecords();
    }, []);

    const fetchWaterRecords = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/water-records');
            setWaterRecord(response.data);
        } catch (error) {
            console.error('Error fetching water records:', error);
        }
        setIsLoading(false);
    };

    const handleWaterLevelChange = (event) => {
        const level = parseInt(event.target.value, 10);
        if (level >= 0 && level <= 100) {
            setWaterLevel(level);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/water-records', {
                level: waterLevel
            });
            fetchWaterRecords();
        } catch (error) {
            console.error('Error adding water record:', error);
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-16 mt-8">
                <div className="WaterTank" style={{ width: '400px', height: '600px' }}>
                    <h1 className="text-blue-500 text-3xl font-bold mb-4">Water Tank Visualization</h1>
                    <div className="border border-gray-400 rounded-md h-full relative overflow-hidden">
                        {waterLevel > 0 && (
                            <div className="bg-blue-500 absolute bottom-0 left-0 right-0"
                                 style={{ height: `${waterLevel}%` }}></div>
                        )}
                        {waterLevel === 0 && (
                            <div className="text-center pt-32">
                                <p>No water level to display</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1 p-4 ml-52 mt-16">
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
            </div>
                {/* Added margin top and increased font size for the h2 tag */}
                <h2 className="mt-56 text-lg font-bold -ml-72">Water Level Record</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="border-collapse border border-gray-400 mt-72 ml-20">
                        <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Water Level (%)</th>
                            <th className="border border-gray-400 px-4 py-2">Time</th>
                            <th className="border border-gray-400 px-4 py-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {waterRecord.map((record, index) => (
                            <tr key={index} className="border border-gray-400">
                                <td className="border border-gray-400 px-4 py-2">{record.level}</td>
                                <td className="border border-gray-400 px-4 py-2">{record.time}</td>
                                <th className="border border-gray-400 px-4 py-2">
                                    <div className="flex">
                                        <button
                                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer border-none flex items-center">
                                            <FaEdit className="mr-1"/>
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer ml-6 border-none flex items-center">
                                            <FaTrash className="mr-1"/>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

    );
}

export default WaterTank;
