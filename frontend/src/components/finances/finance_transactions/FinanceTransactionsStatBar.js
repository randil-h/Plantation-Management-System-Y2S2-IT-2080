import {
    ArrowUpCircleIcon,
    ArrowDownCircleIcon,
    ExclamationCircleIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import axios from "axios";

const getWeekStartEnd = (date, startOfWeek) => {
    let weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + startOfWeek);
    weekStart.setHours(0, 0, 0, 0);

    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    return { start: weekStart, end: weekEnd };
};

export default function FinanceTransactionsStatBar() {
    const [currentWeekData, setCurrentWeekData] = useState({
        transactions: 0,
        income: 0,
        expense: 0,
        profitLoss: 0,
    });
    const [previousWeekData, setPreviousWeekData] = useState({
        transactions: 0,
        income: 0,
        expense: 0,
        profitLoss: 0,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const today = new Date();
        const currentWeek = getWeekStartEnd(today, 1); // Assuming week starts on Monday
        const lastWeek = getWeekStartEnd(new Date(today.setDate(today.getDate() - 7)), 1);

        setLoading(true);
        axios.get('http://localhost:5555/transactions')
            .then((response) => {
                const records = response.data.data;

                const filterAndSummarize = (start, end) => {
                    const filtered = records.filter(record => {
                        const recordDate = new Date(record.date);
                        return recordDate >= start && recordDate <= end;
                    });
                    const income = filtered.filter(record => record.type === 'income').reduce((acc, record) => acc + record.amount, 0);
                    const expense = filtered.filter(record => record.type === 'expense').reduce((acc, record) => acc + record.amount, 0);
                    return {
                        transactions: filtered.length,
                        income,
                        expense,
                        profitLoss: income - expense,
                    };
                };

                setCurrentWeekData(filterAndSummarize(currentWeek.start, currentWeek.end));
                setPreviousWeekData(filterAndSummarize(lastWeek.start, lastWeek.end));

                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const renderIcon = (current, previous) => {
        if (current >= previous)  {
            return <ArrowUpCircleIcon className="w-8 h-8 text-lime-500" />;
        } else {
            return <ArrowDownCircleIcon className="w-8 h-8 text-red-600" />;
        }
    };

    const renderExpenseIcon = (current, previous) => {
        if (current >= previous)  {
            return <ArrowUpCircleIcon className="w-8 h-8 text-red-600" />;
        } else {
            return <ArrowDownCircleIcon className="w-8 h-8 text-lime-500" />;
        }
    };

    const renderProfitLossIcon = (profitLoss) => {
        if (profitLoss >= 0)  {
            return <CheckCircleIcon className="w-8 h-8 text-lime-500" />;
        } else {
            return <ExclamationCircleIcon className="w-8 h-8 text-red-600" />;
        }
    };

    const renderProfitLoss = (profitLoss) => {
        const colorClass = profitLoss >= 0 ? 'text-lime-500' : 'text-red-600';
        return <span className={`${colorClass} text-xl font-semibold tracking-tight sm:text-3xl`}>{profitLoss}</span>;
    };

    return (
        <div className="relative py-8 sm:py-8 overflow-hidden ">
            {/* Additional divs and elements for styling omitted for brevity */}
            <div
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/4 transform-gpu blur-2xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#f43f5e] to-[#84cc16] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                />
            </div>
            <div
                className="absolute left-[max(45rem,calc(50%+8rem))] top-1/4 -z-10 -translate-y-1/2 -translate-x-1/4 transform-gpu blur-2xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#f43f5e] to-[#84cc16]
         opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-row ">
                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    {/* Transactions this week */}
                    <div className="flex flex-row items-center gap-4">
                        <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                            {currentWeekData.transactions}
                        </dd>
                        {renderIcon(currentWeekData.transactions, previousWeekData.transactions)}
                    </div>
                    <dt className="text-base leading-7 text-gray-900">Transactions this week</dt>
                </div>

                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    {/* Income this week */}
                    <div className="flex flex-row items-center gap-4">
                        <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                            Rs.{currentWeekData.income}
                        </dd>
                        {renderIcon(currentWeekData.income, previousWeekData.income)}
                    </div>
                    <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                </div>

                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    {/* Expense this week */}
                    <div className="flex flex-row items-center gap-4">
                        <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                            Rs.{currentWeekData.expense}
                        </dd>
                        {renderExpenseIcon(currentWeekData.expense, previousWeekData.expense)}
                    </div>
                    <dt className="text-base leading-7 text-gray-900">Expense this week</dt>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    {/* Expense this week */}
                    <div className="flex flex-row items-center gap-4">
                        <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                            {renderProfitLoss(currentWeekData.profitLoss)}

                        </dd>
                        {renderProfitLossIcon(currentWeekData.profitLoss)}
                    </div>
                    <dt className="text-base leading-7 text-gray-900">Profit/Loss this week</dt>
                </div>
            </div>
        </div>
    )
}
