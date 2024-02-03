import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/Navbar";
import TestForm from "../../../components/finances/TestForm";
import FinanceNavigation from "../../../components/finances/FinanceNavigation.js";
import IncomeRecordsList from "../../../components/finances/finance_income/IncomeRecordsList";

export default function AddNewIncomeRecord() {
    return (
        <div className="">
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <TestForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
