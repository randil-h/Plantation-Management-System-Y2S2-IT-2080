import React from "react";
import RotationTile from "./CropSummaryTiles/RotationTile";
import AgrochemicalTile from "./CropSummaryTiles/AgrochemicalTile";
import UpcomingHarvestTile from "./CropSummaryTiles/UpcomingHarvestTile";
import CropOneTile from "./CropSummaryTiles/CropOneTile";
import CropTwoTile from "./CropSummaryTiles/CropTwoTile";
import CropThreeTile from "./CropSummaryTiles/CropThreeTile";

export default function CropSummary(){
    return (
        <div className="bg-white px-2 py-10">
            <div id="features" className="mx-auto max-w-6xl">
                <p className="text-center text-base font-semibold leading-7 text-primary-500">Crop Management</p>
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Summary
                </h2>
                <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                    <RotationTile/>
                    <AgrochemicalTile/>
                    <UpcomingHarvestTile/>
                    <CropOneTile/>
                    <CropTwoTile/>
                    <CropThreeTile/>
                </ul>
            </div>
        </div>
    );
}

