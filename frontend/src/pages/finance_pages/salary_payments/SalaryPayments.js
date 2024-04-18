import React from "react";

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import SalaryProcessingSection from "../../../components/finances/finance_salary/SalaryProcessingSection";


export default function SalaryPayments() {

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Salary Payments', href: '/finances/salaryPayment' },
    ];

    return (
        <div className="">
            {/* Navbar */}
            <div className=" sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="z-10  col-span-1 sticky left-0 top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div>
                            <div className="flex flex-row justify-between items-center px-8 py-4">
                                <div>
                                    <h1 className=" text-lg font-semibold text-left">Salary Payments</h1>
                                    <p className="mt-1 text-sm font-normal text-gray-500 0">Manage your employee salary payment operations</p>
                                </div>

                                <div>
                                    <a href="/finances/valuation/addValuation"
                                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                                        View Past Payments <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <SalaryProcessingSection/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
