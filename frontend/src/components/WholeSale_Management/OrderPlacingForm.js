import React from 'react';
import tomato from '../WholeSale_Management/pictuers/tomato.jpeg'
import Tomato from "./pictuers/tomato.jpeg";

export default function OrderPlacingForm(){
    return(
        <div>
            <div>
                <form onSubmit={'#'}>
                    <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center">
                        <div className="space-y-12">
                            <h2 className="text-3xl font-semibold leading-7 text-gray-900 mt-4">Tomato</h2>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center">
                        <div className="space-y-12">
                            <img class="h-auto max-w-lg rounded-lg mt-8" src={tomato} alt="tomato"/>
                        </div>

                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="space-y-40">
                            <div className="mt-8">
                                <p>
                                    Experience the vibrant flavor and succulent juiciness of our farm-grown tomatoes,
                                    nurtured under the sun
                                    for unrivaled freshness. From plump cherry tomatoes to robust heirloom varieties,
                                    each fruit embodies the rich taste of our dedication to quality
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-10 lg:px-8  justify-center">
                        <ul role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Availabe Kilos(Kg) - 1000
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Price for Kilo(Rs) - 250.00
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Include Delivery Charges
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Tracking
                            </li>
                        </ul>
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="space-y-12">
                            <div>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            Enter the Quantity
                                            1Kg</label>
                                        <div className="mt-4">
                                            <input type="text"
                                                   name="productPrice"
                                                   id="productPrice"
                                                // onChange={(e) => setproductPrice(e.target.value)}
                                                // value={productPrice}
                                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Order Now
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}