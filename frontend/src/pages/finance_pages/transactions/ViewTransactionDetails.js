import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import IncomeRecordsList from "../../../components/finances/finance_income/IncomeRecordsList";
import React from "react";

export default function ViewTransactionDetails() {

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Income', href: '/finances/financeincome' },
    ];


    return (
        <div className="">
            <div className="border-b sticky top-0 z-10">
                <Navbar/>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <Breadcrumb items={breadcrumbItems}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
