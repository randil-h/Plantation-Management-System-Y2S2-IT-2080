import React, {useEffect, useState} from "react";

import SideBar from "../components/SideBar";
import Navbar from "../components/utility/Navbar";
import FinanceTransactionsStatBar from "../components/finances/finance_transactions/FinanceTransactionsStatBar";
import BackButton from "../components/utility/BackButton";
import Breadcrumb from "../components/utility/Breadcrumbs";
import WeatherInfo from "../components/Weather/WeatherInfo";
import FinanceNavigation from "../components/finances/FinanceNavigation";
import LoadingAnimation from "../components/utility/LoadingAnimation";
import TransactionsList from "../components/finances/finance_transactions/TransactionsList";
import {SnackbarProvider} from "notistack";
import AgrochemicalTile from "../components/cropManagement_home/CropSummary/CropSummaryTiles/AgrochemicalTile";
import UpcomingHarvestTile from "../components/cropManagement_home/CropSummary/CropSummaryTiles/UpcomingHarvestTile";

export default function Dashboard() {
    const [loading, setLoading] = useState(false);
    const [currentTile, setCurrentTile] = useState(1);

    const breadcrumbItems = [
        { name: 'Home', href: '/dashboard' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTile((prevTile) => (prevTile === 1 ? 2 : 1));
        }, 5000); // Switch every 20 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <SnackbarProvider>
            <div className="">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="">
                    <div className="grid sm:grid-cols-6 ">
                        <div className="  col-span-1 sticky top-0">
                            <SideBar/>
                        </div>

                        <div className="w-full col-span-5 flex flex-col ">
                            <div className="flex flex-row ">
                                <BackButton/>
                                <Breadcrumb items={breadcrumbItems}/>
                            </div>
                            <div className="p-4">
                                <WeatherInfo/>
                            </div>
                            <div className="ml-4 max-h-20 relative">
                                <div className="stackable-widget absolute top-0 left-0 w-80 h-60">
                                    <div
                                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                                            currentTile === 1 ? "opacity-100" : "opacity-0"
                                        }`}
                                    >
                                        <UpcomingHarvestTile/>
                                    </div>
                                    <div
                                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                                            currentTile === 2 ? "opacity-100" : "opacity-0"
                                        }`}
                                    >
                                        <AgrochemicalTile/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SnackbarProvider>
    );
}
