import React, { useState } from "react";
import { GiChemicalDrop } from "react-icons/gi";

export default function AgrochemicalTile({ cropType }) {
    const Fertilizers = {
        Coconut: ["Fertilizers", "Urea", "YPM", "Dolomite", "Muriate of Potash"],
        Papaya: ["NPK"],
        Guava: ["NPK"]
    };

    const Chemicals = {

    }


    return (
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                <GiChemicalDrop className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium">Agrochemicals</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Upcoming round in 3 days <br/> Field B - Mango
                </p>
            </li>
        </div>
    );
}
