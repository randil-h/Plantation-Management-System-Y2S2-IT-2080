import React, {useState} from "react";
import { Carousel, Radio } from "antd";
import FinanceHomeStatBar from "./FinanceHomeStatBar";
import FinanceTransactionsStatBar from "../finance_transactions/FinanceTransactionsStatBar";
import TransactionsInfoCard from "./home_transactions/TransactionsInfoCard";
import ProfitGraph from "./home_transactions/ProfitInfoCard";
import ValuationProjection from "../finance_valuation/ValuationProjection";

export default function FinanceHomeStatCards() {
    const [dotPosition, setDotPosition] = useState('top');

    return (
        <div className="pt-8">
            <div className="pt-8 h-96 align-middle justify-center content-center">
                    <div>
                        <TransactionsInfoCard/>
                    </div>
            </div>
        </div>
    );
}

