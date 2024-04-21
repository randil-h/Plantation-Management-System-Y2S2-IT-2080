import React, { useState, useEffect } from "react";
import { GiChemicalDrop } from "react-icons/gi";
import axios from "axios";
import {IoCloseCircle} from "react-icons/io5";

export default function AgrochemicalTile() {
    const [plantingRecords, setPlantingRecords] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleTileClick = () => {
        setShowPopup(true);
    };

    const Fertilizers = {
        Coconut: ["Urea", "YPM", "Dolomite", "Muriate of Potash"],
        Common: ["NPK", "Rootone", "Booster K", "Albert Solution", "Crop Master Solution", "Marshal Carbosulfan"]
    };

    const Chemicals = {
        Coconut: ["Marshal Carbosulfan"],
        Common: ["Mitsu Abamectin", "Daconil Chlorothalonil", "Oasis Thiram", "Glyphosate"]
    };

    const Frequency = {
        Coconut: 180,
        Papaya: 15,
        "Apple Guava": 15
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/cropinput`);
                if (response.status === 200 && response.data && response.data.data) {
                    const plantingRecordsData = response.data.data.filter(record => record.type === 'Planting');
                    setPlantingRecords(plantingRecordsData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Calculate agrochemical dates and filter upcoming dates within the next month
    const agrochemicalDates = plantingRecords.map(record => {
        const { date, cropType, field } = record;
        const frequency = Frequency[cropType] || 0;
        const agrochemicalDate = new Date(date);
        agrochemicalDate.setDate(agrochemicalDate.getDate() + frequency);
        const daysToNextDate = Math.ceil((agrochemicalDate - new Date()) / (1000 * 60 * 60 * 24));
        return { cropType, field, agrochemicalDate, daysToNextDate }; // Include 'field' in return object
    }).filter(({ agrochemicalDate, daysToNextDate }) => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return agrochemicalDate <= nextMonth && daysToNextDate >= 0;
    });

    const AgrochemicalTileBg = agrochemicalDates && agrochemicalDates.daysToNextDate < 3 ? 'bg-amber-300' : 'bg-lime-200';

    return (
        <div>
            <li className={`rounded-xl ${AgrochemicalTileBg} px-6 py-8 hover:transform hover:scale-110 transition-transform duration-300 text-center`} onClick={handleTileClick}>
                <GiChemicalDrop className="mx-auto h-10 w-10 "/>
                <h3 className="my-3 font-display font-medium">Agrochemicals</h3>
                {agrochemicalDates.length > 0 && (
                    <div>
                        <h4>Upcoming Agrochemical Round: </h4>
                        <p>{agrochemicalDates[agrochemicalDates.length - 1].field} - {agrochemicalDates[agrochemicalDates.length - 1].cropType} - In {agrochemicalDates[agrochemicalDates.length - 1].daysToNextDate} Days</p>
                        <br/>
                        {agrochemicalDates[0].cropType === "Coconut" ? (
                            <p>{Fertilizers.Coconut.join(', ')}</p>
                        ) : (
                            <p>{Fertilizers.Common.join(', ')}</p>
                        )}
                    </div>
                )}
            </li>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-opacity-50">
                    <div className="shadow-lg bg-white rounded-lg p-8 max-w-sm relative border border-gray-300">
                        <IoCloseCircle onClick={() => setShowPopup(false)} className="absolute top-2 right-2 cursor-pointer"/>
                        <GiChemicalDrop className="mx-auto h-10 w-10 "/>
                        <h3 className="text-lg font-semibold mb-2">Agrochemicals</h3>
                        <ul>
                            {agrochemicalDates.slice().reverse().map(({cropType, field, agrochemicalDate, daysToNextDate}, index) => (
                                <li key={index}>
                                    <h3>{field} - {cropType} - In {daysToNextDate} Days</h3>
                                    {agrochemicalDates[0].cropType === "Coconut" ? (
                                        <p>{Fertilizers.Coconut.join(', ')}</p>
                                    ) : (
                                        <p>{Fertilizers.Common.join(', ')}</p>
                                    )}
                                    <br/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
}
