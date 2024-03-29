import React from "react";
import { GiCoconuts, GiChemicalDrop, GiSandsOfTime } from "react-icons/gi";
import { FaRotate} from 'react-icons/fa6';

export default function CropSummary() {
    return (
        <div className="bg-white px-2 py-10">
            <div id="features" className="mx-auto max-w-6xl">
                <p className="text-center text-base font-semibold leading-7 text-primary-500">Crop Management</p>
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Summary
                </h2>
                <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                        <a href="/pricing" className="group">
                            <FaRotate className="mx-auto h-10 w-10"/>
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Rotation</h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Possible crops for upcoming season
                            <br/> Mango - TJC </p>
                        </a>
                    </li>

                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                        <GiChemicalDrop className="mx-auto h-10 w-10"/>
                        <h3 className="my-3 font-display font-medium">Agrochemicals</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Upcoming round in 3 days
                        </p>
                    </li>
                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                        <GiSandsOfTime className="mx-auto h-10 w-10"/>
                        <h3 className="my-3 font-display font-medium">Next Harvest in</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            7 weeks <br/> Apple Guava
                        </p>
                    </li>
                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm items-center hover:transform hover:scale-110 transition-transform duration-300">
                        <GiCoconuts className="mx-auto h-10 w-10"/>
                        <h3 className="my-3 font-display font-medium">Coconut</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Harvest Area - 25 acres <br/> Crop Age - 1 year
                        </p>
                    </li>
                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                        <a href="/templates" className="group">
                            <img src="https://cdn-icons-png.flaticon.com/512/681/681028.png" alt=""
                                 className="mx-auto h-10 w-10"/>
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                                Papaya
                            </h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500"> 3 Acres <br/> Upcoming harvest in 5 days </p>
                        </a>
                    </li>
                    <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                        <a href="/download" className="group">
                            <img src="https://cdn-icons-png.flaticon.com/512/5928/5928547.png" alt=""
                                 className="mx-auto h-10 w-10"/>
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Apple Guava</h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500"> 4.5 Acres <br/> Upcoming harvest in 7 weeks</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
