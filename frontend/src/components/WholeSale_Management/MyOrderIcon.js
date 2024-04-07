import React from "react";
import {TbShoppingCartCopy} from "react-icons/tb";

export default function MyOrderIcon(){
    return (
        <div>
            <a
                href="/WholeSale/orders"
                className="absolute right-5 mt-8 mr-2 font-medium text-blue-600 hover:underline"
            >
                <TbShoppingCartCopy
                    className="h-10 w-10 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                    aria-hidden="true"/>
            </a>
        </div>
    );
}