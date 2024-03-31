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
    const [activeCard, setActiveCard] = useState(null);

    const transitionStyles = {
        transition: "transform 0.4s ease-in-out",
    };

    const [clicked, setClicked] = useState(false);

    const toggleWidth = () => {
        setClicked(prevClicked => !prevClicked);
    };
    return (
        <div className="flex flex-row py-8 h-[60%] w-full text-gray-700 gap-4 px-4 relative">
            <div className="flex flex-row w-full gap-4 px-4">
                <button className="h-full w-full" onClick={() => setActiveCard('transactions')}>
                    <TransactionsCard/>
                </button>
                <button className="h-full w-full" onClick={() => setActiveCard('valuations')}>
                    <ValuationCard/>
                </button>
                <button className="h-full w-full" onClick={() => setActiveCard('salaryPayments')}>
                    <SalaryPaymentsCard/>
                </button>
                <button className="h-full w-full" onClick={() => setActiveCard('machineHours')}>
                    <MachineHoursCard/>
                </button>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-max-width duration-500 ${
                        clicked ? 'max-w-full' : 'max-w-auto'
                    }`}
                    onClick={toggleWidth}
                >
                    {clicked ? 'Shrink' : 'Expand'}
                </button>
            </div>
            {activeCard && (
                <div className="w-full h-full p-8 ">
                    {activeCard === 'transactions' && <DetailTransactionCard onBack={() => setActiveCard(null)}/>}
                    {activeCard === 'valuations' && <DetailValuationCard onBack={() => setActiveCard(null)}/>}
                    {activeCard === 'salaryPayments' && <DetailSalaryPaymentsCard onBack={() => setActiveCard(null)} />}
                        {activeCard === 'machineHours' && <DetailMachineHoursCard onBack={() => setActiveCard(null)} />}
                    </div>
                )}
        </div>
    )
}
