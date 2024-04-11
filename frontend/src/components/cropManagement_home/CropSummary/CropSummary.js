import React, {useState} from "react";
import RotationTile from "./CropSummaryTiles/RotationTile";
import AgrochemicalTile from "./CropSummaryTiles/AgrochemicalTile";
import UpcomingHarvestTile from "./CropSummaryTiles/UpcomingHarvestTile";
import CropOneTile from "./CropSummaryTiles/CropOneTile";
import CropTwoTile from "./CropSummaryTiles/CropTwoTile";
import CropThreeTile from "./CropSummaryTiles/CropThreeTile";

export default function CropSummary(){
    const [harvestTileBg, setHarvestTileBg] = useState('bg-lime-100');

    return (
        <div className="bg-white px-2 py-10">
            <div id="features" className="mx-auto max-w-6xl">
                <p className="text-center text-base font-semibold leading-7 text-primary-500">Crop Management</p>
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Summary
                </h2>
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
                    <div className="bg-lime-100 shadow-lg rounded-lg overflow-hidden">
                        <RotationTile/>
                    </div>
                    <div className="bg-lime-100 shadow-lg rounded-lg overflow-hidden">
                        <AgrochemicalTile/>
                    </div>
                    <div className={`${harvestTileBg} shadow-lg rounded-lg overflow-hidden`}>
                        <UpcomingHarvestTile setHarvestTileBg={setHarvestTileBg} />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <CropOneTile/>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <CropTwoTile/>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <CropThreeTile/>
                    </div>
                </div>
            </div>
        </div>
    );
}

