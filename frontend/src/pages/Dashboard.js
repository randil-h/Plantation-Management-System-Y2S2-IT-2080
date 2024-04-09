import React, {useState} from "react";

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


export default function Dashboard() {
    const [loading, setLoading] = useState(false);


    const breadcrumbItems = [
        { name: 'Home', href: '/dashboard' }
    ];
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

                        </div>
                    </div>
                </div>
            </div>
        </SnackbarProvider>
    );
}
