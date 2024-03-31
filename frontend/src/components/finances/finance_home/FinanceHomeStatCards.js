import TransactionsCard from "./cards/TransactionsCard";
import ValuationCard from "./cards/ValuationCard";
import MachineHoursCard from "./cards/MachineHoursCard";
import SalaryPaymentsCard from "./cards/SalaryPaymentsCard";

import React, { useState} from "react";
import { Transition } from "@headlessui/react";

import DetailTransactionCard from "./detail_cards/DetailTransactionCard";
import DetailValuationCard from "./detail_cards/DetailValuationCard";
import DetailSalaryPaymentsCard from "./detail_cards/DetailSalaryPaymentsCard";
import DetailMachineHoursCard from "./detail_cards/DetailMachineHoursCard";

export default function FinanceHomeStatCards() {
    return (
        <div className="flex flex-col py-8 h-[60%] w-full text-gray-700 gap-4 px-4 relative">
            <div className="flex flex-row w-full gap-4 px-4">
                <button className="h-full w-full">
                    <TransactionsCard/>
                </button>
                <button className="h-full w-full">
                    <ValuationCard/>
                </button>
                <button className="h-full w-full">
                    <SalaryPaymentsCard/>
                </button>
                <button className="h-full w-full">
                    <MachineHoursCard/>
                </button>
            </div>
            <div className="gap-4 flex flex-col">
                <DetailTransactionCard/>
                <DetailValuationCard/>
                <DetailSalaryPaymentsCard/>
                <DetailMachineHoursCard/>
            </div>
        </div>
    )
}
