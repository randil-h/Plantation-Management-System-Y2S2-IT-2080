import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import ProductHistory from "../../../components/WholeSale_Management/ProductHistory";

export default function wholeSaleDashBoard(){
    return(
        <div className="border-b sticky top-0 z-10">
            <Navbar/>
            {/*<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">*/}
            {/*    <div className="mx-auto max-w-xs px-8">*/}
            {/*        <a href="/OperationManager/AddingProduct"*/}
            {/*           className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500*/}
            {/*                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Add*/}
            {/*            a Product*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <ProductHistory/>
            </div>
        </div>
    );
}