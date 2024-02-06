const features = [
    { name: 'Apple Guava', description: 'Designed by Good Goods, Inc.' },
    { name: 'Papaya (Redlady)', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Coconut', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Vegetables', description: 'Hand sanded and finished with natural oil' },
]

export default function Function_bar() {
    return (
        <div className="bg-slate-100">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="gap-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
                    <p className="mt-6 text-gray-700">
                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                    </p>
                    <button className="my-8 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                        Learn More  <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
                <div>
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4 group">
                                <dt className="font-medium text-gray-900 group-hover:cursor-pointer">
                                    {feature.name} <span aria-hidden="true" className="invisible group-hover:visible transition-opacity duration-300">&rarr;</span>
                                </dt>
                                <dd className="mt-2 text-sm text-gray-700">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>


            </div>
        </div>
    )
}
