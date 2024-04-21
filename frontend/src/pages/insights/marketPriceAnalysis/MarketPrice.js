import React from "react";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import InsightsNavigation from "../../../components/insights_home/InsightsNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import MarketPriceList from "../../../components/insights_home/MarketPriceList";





export default function MarketPrice() {

    const breadcrumbItems = [
        {name : 'Market Price', href : '/insights/marketprice'},
    ];

    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <InsightsNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div>
                            <MarketPriceList/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
