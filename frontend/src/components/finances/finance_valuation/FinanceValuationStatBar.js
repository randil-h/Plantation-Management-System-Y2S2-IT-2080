import {
    ArrowUpCircleIcon,
    ArrowDownCircleIcon,
    ExclamationCircleIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid';
import {
    InformationCircleIcon
} from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import axios from "axios";
import {Popover} from "antd";

export default function FinanceValuationStatBar() {

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [totalLiabilities, setTotalLiabilities] = useState(0);
    const [netValue, setNetValue] = useState(0);

    useEffect(() => {
        // Fetch total records from your API or set it from somewhere
        axios.get('https://elemahana-mern-8d9r.vercel.app/valuation')
            .then(response => {
                setTotalRecords(response.data.data);

                // Calculate total income and total expenses
                let assets = 0;
                let liabilities = 0;
                response.data.data.forEach(valuation => {
                    if (valuation.type === "asset") {
                        assets += (valuation.price * valuation.quantity);
                    } else if (valuation.type === "liability") {
                        liabilities += (valuation.price * valuation.quantity);
                    }
                });
                setTotalAssets(assets);
                setTotalLiabilities(liabilities);

                // Calculate profit or loss
                setNetValue(assets - liabilities);
            })
            .catch(error => {
                console.error('Error fetching total records: ', error);
            });
    }, []);

    const renderProfitLoss = (profitOrLoss) => {
        const colorClass = profitOrLoss >= 0 ? 'text-lime-500' : 'text-red-600';
        return <span className={`${colorClass} text-xl font-semibold tracking-tight sm:text-3xl`}>Rs.{profitOrLoss}</span>;
    };
    return (
        <div className="relative py-8 sm:py-8 overflow-hidden ">
            {/* Additional divs and elements for styling omitted for brevity */}
            <div
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/4 transform-gpu blur-2xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-rose-600 to-lime-400 opacity-30"
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
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-yellow-600 to-lime-300
         opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                />
            </div>

            <div className="flex flex-row">
                <div className="mx-auto w-full px-6 lg:px-8 relative flex flex-row ">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                        {/* Transactions this week */}
                        <div className="flex flex-row items-center gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                {totalRecords.length}
                            </dd>

                        </div>
                        <dt className="text-base leading-7 text-gray-900">Total Records</dt>
                    </div>

                    <div className="mx-auto flex  flex-col gap-y-1">
                        {/* Income this week */}
                        <div className="flex flex-row items-center gap-8">
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                Rs.{totalAssets}
                            </dd>

                        </div>
                        <div className="flex flex-row items-center gap-12 justify-between">
                            <dt className="text-base leading-7 text-lime-600">Total Assets</dt>

                        </div>

                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                        {/* Expense this week */}
                        <div className="flex flex-row items-center gap-8">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                Rs.{totalLiabilities}
                            </dd>

                        </div>
                        <div className="flex flex-row items-center gap-12">
                            <dt className="text-base leading-7 text-red-600">Total Liabilities</dt>

                        </div>

                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                        {/* Expense this week */}
                        <div className="flex flex-row items-center gap-4">
                            <dd className="text-xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                {renderProfitLoss(netValue)}
                            </dd>
                            {/*{renderProfitLossIcon(profitLoss)}*/}
                        </div>
                        <dt className="text-base leading-7 text-gray-900">Net Worth</dt>
                    </div>
                </div>
                <div className="pr-8 text-gray-600">
                    <Popover content={
                        <div>
                            <p className="text-sm text-gray-500 font-semibold">Transactions this week</p>
                            <p className="text-gray-500">Displays the number of transactions that<br/>happened in the
                                current week started<br/> from Monday and
                                ending in Sunday.</p>
                            <br/>
                            <p className="text-sm text-gray-500 font-semibold">Income this week</p>
                            <p className="text-gray-500">Displays the sum of income records that<br/>
                                happened within this week.</p>
                            <br/>
                            <p className="text-sm text-gray-500 font-semibold">Expenses this week</p>
                            <p className="text-gray-500">Displays the sum of expense records that<br/>
                                happened within
                                this week.</p>
                            <br/>
                            <p className="text-sm text-gray-500 font-semibold">Profit/Loss this week</p>
                            <p className="text-gray-500">Displays the profit/loss that happened<br/>
                                within this week. Calculated by<br/> subtracting expense from income.</p>
                            <br/>
                            <p className="text-sm text-gray-500 font-semibold">Percentages</p>
                            <p className="text-gray-500">Calculated by comparing the current week's<br/> data to
                                previous week's data.</p>

                            <br/>
                            <p className="text-sm text-gray-500 font-semibold">Arrow Icons</p>
                            <p className="text-gray-500">Arrow points up if the current weeks<br/>
                                value is increased compared to the previous<br/>
                                week's value.</p>
                        </div>
                    } title={
                        <div className="text-base text-gray-500 flex flex-row gap-2"><InformationCircleIcon className="w-6 h-6 stroke-gray-500"/>Statistics Bar
                        </div>}>
                        <div className="pr-8">
                            <InformationCircleIcon className="w-6 h-6 stroke-gray-500"/>
                        </div>
                    </Popover>
                </div>
            </div>

        </div>
    )
}
