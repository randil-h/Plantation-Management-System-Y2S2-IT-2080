import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Chart from "chart.js";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function GenerateGraphs() {

    const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    const lineChartContainer = useRef(null);
    const lineChartInstance = useRef(null);
    const cropBarChartContainer = useRef(null);
    const cropBarChartInstance = useRef(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/diseases')
            .then((response) => {
                setDiseaseRecords(response.data.data);
                console.log('DiseaseRecords:', response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        renderBarChart();
        renderLineChart();
        renderCropBarChart();
    }, [DiseaseRecords]);

    const renderBarChart = () => {
        const typesOfDiseases = new Map();

        DiseaseRecords.forEach(record => {
            typesOfDiseases.set(record.disease_name, (typesOfDiseases.get(record.disease_name) || 0) + 1);
        });

        const labels = [...typesOfDiseases.keys()];
        const data = [...typesOfDiseases.values()];

        if(chartInstance.current !== null) {
            chartInstance.current.destroy();
        }

        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Diseased Plants',
                    data: data,
                    backgroundColor: 'rgba(0, 226, 29, 0.28)',
                    borderColor: 'rgb(212, 225, 87)',
                    borderWidth: 1
                }]
            },

            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max:1
                    }
                },
                elements: {
                    bar: {
                        barThickness: 10 // Adjust the value as needed
                    }
                }
            }
        });
    };

    const renderCropBarChart = () => {
        const typesOfCrops = new Map();

        DiseaseRecords.forEach(record => {
            typesOfCrops.set(record.crop, (typesOfCrops.get(record.crop) || 0) + 1);
        });

        const labels1 = [...typesOfCrops.keys()];
        const data1 = [...typesOfCrops.values()];

        if(cropBarChartInstance.current !== null) {
            cropBarChartInstance.current.destroy();
        }

        const ctx = cropBarChartContainer.current.getContext('2d');
        cropBarChartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels1,
                datasets: [{
                    label: 'Number of Diseased Plants',
                    data: data1,
                    backgroundColor: 'rgba(0, 226, 29, 0.28)',
                    borderColor: 'rgb(212, 225, 87)',
                    borderWidth: 1
                }]
            },

            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max:1
                    }
                },
                elements: {
                    bar: {
                        barThickness: 10 // Adjust the value as needed
                    }
                }
            }
        });
    };

    const renderLineChart = () => {
        if (DiseaseRecords.length === 0) {
            return;
        }

        const accumulatedCounts = new Map();

        DiseaseRecords.forEach(record => {
            const date = record.date;
            if (!accumulatedCounts.has(date)) {
                accumulatedCounts.set(date, 0);
            }
            accumulatedCounts.set(date, accumulatedCounts.get(date) + 1);
        });

        const sortedDates = Array.from(accumulatedCounts.keys()).sort((a, b) => new Date(a) - new Date(b));
        const counts = sortedDates.map(date => accumulatedCounts.get(date));

        if (lineChartInstance.current !== null) {
            lineChartInstance.current.destroy();
        }

        const ctx = lineChartContainer.current.getContext("2d");
        lineChartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: sortedDates,
                datasets: [
                    {
                        label: "Number of Records",
                        data: counts,
                        fill: false,
                        borderColor: "rgba(0, 226, 29, 0.28)",
                        borderWidth: 1,
                        pointBackgroundColor: "rgb(212, 225, 87)"
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "day"
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Records'
                        }
                    }
                }
            }
        });
    };



    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">GRAPH VISUALIZATION</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Visualize trends of diseases that escalate
                        throughout the farm...</p>
                </div>
            </div>
            <div className="px-8 ">
                <h1 className=" w-2/3 text-md font-bold text-left flex justify-center items-center">Disease V Records</h1>
                <div className=" w-2/3 h-1/3  py-4 ">
                    <canvas ref={chartContainer}></canvas>
                </div>
            </div>
            <div className="px-8 py-4">
                <h1 className=" w-2/3 text-md font-bold text-left flex justify-center items-center">Number of Diseased
                    Plants V Time</h1>
                <div className=" w-2/3 h-1/4  py-4">
                    <canvas ref={lineChartContainer}></canvas>
                </div>
            </div>
            <div className="px-8 py-4">
                <h1 className=" w-1/2 text-md font-bold text-left flex justify-center items-center">Amount of Diseased Plants V Crop Type</h1>
                <div className=" w-1/2 h-1/5 py-4">
                    <canvas ref={cropBarChartContainer}></canvas>
                </div>
            </div>
        </div>

)

}