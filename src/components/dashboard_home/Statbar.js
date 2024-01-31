const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Statbar() {
    return (
        <div className="relative py-8 sm:py-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-green-300 to-blue-500"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-white">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

