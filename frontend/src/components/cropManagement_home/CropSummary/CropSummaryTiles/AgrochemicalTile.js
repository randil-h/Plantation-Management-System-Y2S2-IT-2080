import React, { useState, useEffect } from "react";
import { GiChemicalDrop } from "react-icons/gi";
import axios from "axios";

export default function AgrochemicalTile({ cropType }) {
    const [upcomingAgrochemicalDate, setUpcomingAgrochemicalDate] = useState(null);

    const Fertilizers = {
        Coconut: ["Fertilizers", "Urea", "YPM", "Dolomite", "Muriate of Potash"],
        Papaya: ["NPK", "Rootone", "Booster K", "Albert Solution", "Crop Master Solution"],
        Guava: ["NPK", "Rootone", "Booster K", "Albert Solution", "Crop Master Solution"]
    };

    const Chemicals = {
        Coconut: ["Marshal Carbosulfan"],
        Common: ["Mitsu Abamectin", "Daconil Chlorothalonil", "Oasis Thiram", "Glyphosate"]
    }

    const Frequency = {
        Coconut: 180,
        Papaya: 15,
        AppleGuava: 15
    }

    useEffect(() => {
        const calculateUpcomingAgrochemicalDate = () => {
            const currentDate = new Date();
            const daysToAdd = Frequency[cropType];
            const upcomingAgrochemical = new Date(currentDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
            setUpcomingAgrochemicalDate(upcomingAgrochemical);
        };

        calculateUpcomingAgrochemicalDate();
    }, [cropType]);

    return (
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                <GiChemicalDrop className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium">Agrochemicals</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    {upcomingAgrochemicalDate && !isNaN(upcomingAgrochemicalDate.getTime()) ?
                        `Upcoming agrochemical application on ${upcomingAgrochemicalDate.toLocaleDateString()}`
                        : "No upcoming agrochemical application dates"}
                    <br />
                </p>
            </li>
        </div>
    );
}
