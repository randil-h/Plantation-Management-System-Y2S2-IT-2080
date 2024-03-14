import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from "react-icons/fa";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function PercentageRuler() {
    return (
        <div className="percentage-ruler absolute h-full top-0 left-0 flex flex-col justify-between items-center">
            <div className="text-xs">100%</div>
            <div className="text-xs">90%</div>
            <div className="text-xs">80%</div>
            <div className="text-xs">70%</div>
            <div className="text-xs">60%</div>
            <div className="text-xs">50%</div>
            <div className="text-xs">40%</div>
            <div className="text-xs">30%</div>
            <div className="text-xs">20%</div>
            <div className="text-xs">10%</div>
            <div className="text-xs">0%</div>
        </div>
    );
}

function WaterTank() {
    const [water_level1, setWater_level1] = useState('');
    const [water_level2, setWater_level2] = useState('');
    const [water_date, setWater_date] = useState('');
    const [water_des, setWater_des] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [waterRecords, setWaterRecord] = useState([]);
    const [loading, setLoading] = useState(false);

    const tank1Capacity = 2000;
    const tank2Capacity = 2000;

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            water_level1,
            water_level2,
            water_date,
            water_des
        };
        axios
            .post('http://localhost:5555/waterRecords', data)
            .then((response) => {
                enqueueSnackbar('Record Created successfully', { variant: 'success' });
                setWaterRecord(prevRecords => [...prevRecords, response.data]);
                setWater_level1('');
                setWater_level2('');
                setWater_date('');
                setWater_des('');
            })
            .catch((error) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/waterRecords`)
            .then((response) => {
                setWaterRecord(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/waterRecords/${recordId}`)
            .then(() => {
                setWaterRecord(prevRecords => prevRecords.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Calculate percentage of water in each tank
    const tank1Percentage = (water_level1 / tank1Capacity) * 100;
    const tank2Percentage = (water_level2 / tank2Capacity) * 100;

    // Calculate total percentage of water based on the latest record
    const latestRecord = waterRecords.length > 0 ? waterRecords[waterRecords.length - 1] : null;
    const totalPercentage = latestRecord ? ((latestRecord.water_level1 + latestRecord.water_level2) / (tank1Capacity + tank2Capacity)) * 100 : 0;

    return (
        <div className="flex">
            <div className="flex-1 ml-16 mt-8 relative">
                <div className="WaterTank relative" style={{width: '400px', height: '600px'}}>
                    <h1 className="text-blue-500 text-3xl font-bold mb-4">Water Tank Visualization</h1>
                    <div className="border border-gray-400 rounded-md h-full relative overflow-hidden">
                        <div className="WaterTank" style={{width: '400px', height: '100%', position: 'relative'}}>
                            <div className="tank absolute bottom-0 bg-blue-500"
                                 style={{height: `${totalPercentage}%`, width: '100%'}}/>
                        </div>
                        <PercentageRuler />
                    </div>
                </div>
            </div>
            <div className="flex-1 mr-16 mt-20">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="water_level1" className="block text-gray-700 text-sm font-bold mb-2">
                            Enter Water Level 1:
                        </label>
                        <input
                            type="number"
                            name="water_level1"
                            value={water_level1}
                            onChange={(e) => setWater_level1(e.target.value)}
                            min="0"
                            max={tank1Capacity}
                            className="border border-gray-400 rounded-md p-2 w-80"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="water_level2" className="block text-gray-700 text-sm font-bold mb-2">
                            Enter Water Level 2:
                        </label>
                        <input
                            type="number"
                            name="water_level2"
                            value={water_level2}
                            onChange={(e) => setWater_level2(e.target.value)}
                            min="0"
                            max={tank2Capacity}
                            className="border border-gray-400 rounded-md p-2 w-80"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="water_date" className="block text-gray-700 text-sm font-bold mb-2">
                            Date:
                        </label>
                        <input
                            type="date"
                            name="water_date"
                            value={water_date}
                            onChange={(e) => setWater_date(e.target.value)}
                            className="border border-gray-400 rounded-md p-2 w-80"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="water_des" className="block text-gray-700 text-sm font-bold mb-2">
                            Description:
                        </label>
                        <textarea
                            name="water_des"
                            value={water_des}
                            rows={3}
                            onChange={(e) => setWater_des(e.target.value)}
                            className="border border-gray-400 rounded-md p-2 w-80"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                </form>
                <table className="border-collapse border border-gray-400 mt-10 ">
                    <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">No</th>
                        <th className="border border-gray-400 px-4 py-2">Water Level 1</th>
                        <th className="border border-gray-400 px-4 py-2">Water Level 2</th>
                        <th className="border border-gray-400 px-4 py-2">Date</th>
                        <th className="border border-gray-400 px-4 py-2">Description</th>
                        <th className="border border-gray-400 px-4 py-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {waterRecords.map((record, index) => (
                        <tr key={index} className="border border-gray-400">
                            <td className="py-2 px-4 border border-gray-400">{index + 1}</td>
                            <td className="border border-gray-400 px-4 py-2">{record.water_level1}</td>
                            <td className="border border-gray-400 px-4 py-2">{record.water_level2}</td>
                            <td className="py-2 px-4 border border-gray-400">{record.water_date.split("T")[0]}</td>
                            <td className="border border-gray-400 px-4 py-2">{record.water_des}</td>
                            <th className="border border-gray-400 px-4 py-2">
                                <div className="flex">
                                    <button
                                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer border-none flex items-center"
                                        onClick={() => handleDelete(record._id)}
                                    >
                                        <FaTrash className="mr-1"/>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default WaterTank;
