import React from "react";
import {GiCoconuts} from "react-icons/gi";

export default function CropOneTile() {
    return(
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm items-center hover:transform hover:scale-110 transition-transform duration-300">
                <GiCoconuts className="mx-auto h-10 w-10"/>
                <h3 className="my-3 font-display font-medium">Coconut</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Harvest Area - 25 acres <br/> Crop Age - 1 year
                </p>
            </li>
        </div>
    );
}