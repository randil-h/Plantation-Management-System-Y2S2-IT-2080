import {Link} from "react-router-dom";
import { GiVanillaFlower } from "react-icons/gi";
import { GiKiwiFruit } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { GiHoneyJar } from "react-icons/gi";

const features = [
    { name: 'Apple Guava', description: 'Sri Lankan Apple Guava', icon:<GiKiwiFruit/> },
    { name: 'Papaya', description: 'Naturally ripened Red Lady papaya', icon:<GiFruitBowl/> },
    { name: 'Vanilla', description: 'Indulgent, aromatic vanilla essence.', icon:<GiVanillaFlower/> },
    { name: 'Bee Honey', description: 'Sourced from bee hives placed on site', icon:<GiHoneyJar/> },
]

export default function Function_bar() {
    return (
        <div className="bg-slate-100">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="gap-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
                    <p className="mt-6 text-gray-700">
                        We proudly present a range of premium products, from local fruits like papaya and apple guava to bee honey and vanilla.
                        Our commitment to eco-friendly and sustainable practices ensures their cultivation and maintenance.
                    </p>
                    <div className="pt-8">
                        <Link to="/placeOrder" className="my-8 flex-none rounded-full bg-gray-900 px-6 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                            Place an Order  <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>

                </div>
                <div>
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-300 pt-4 group">
                                <div className="flex flex-row gap-2 items-center">
                                    <div>
                                        {feature.icon}
                                    </div>
                                    <dt className="font-medium text-gray-900 group-hover:cursor-pointer">
                                        {feature.name} <span aria-hidden="true"
                                                             className="invisible group-hover:visible transition-opacity duration-300">&rarr;</span>
                                    </dt>
                                </div>

                                <dd className="mt-2 text-sm text-gray-700">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>


            </div>
        </div>
    )
}
