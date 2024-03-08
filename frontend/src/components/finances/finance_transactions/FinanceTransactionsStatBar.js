import {
    ArrowUpCircleIcon,
    ArrowDownCircleIcon
} from '@heroicons/react/24/solid'

export default function FinanceTransactionsStatBar() {
    return (
        <div className="relative py-8 sm:py-8  overflow-hidden ">
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
                    <div className="flex flex-row items-center gap-4">
                        <dd className=" text-xl font-semibold text-gray-900 tracking-tight  sm:text-3xl">
                            214
                        </dd>
                        <div className="w-8 h-8">
                            <ArrowUpCircleIcon/>
                        </div>
                    </div>


                    <dt className="text-base leading-7 text-gray-900">Transactions this week</dt>
                </div>

                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-4">
                        <dd className=" text-xl font-semibold  tracking-tight text-gray-900 sm:text-3xl">
                            Rs.110,000
                        </dd>
                        <div className="w-8 h-8">
                            <ArrowDownCircleIcon/>
                        </div>
                    </div>


                    <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                </div>

                <div className="mx-auto flex max-w-xs flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-4">
                        <dd className=" text-xl font-semibold text-gray-900 tracking-tight  sm:text-3xl">
                            Rs.110,000
                        </dd>
                        <div className="w-8 h-8">
                            <ArrowUpCircleIcon/>
                        </div>
                    </div>


                    <dt className="text-base leading-7 text-gray-900">Income this week</dt>
                </div>


            </div>
        </div>
    )
}

