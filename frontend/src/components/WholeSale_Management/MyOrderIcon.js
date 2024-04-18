import React from "react";
import {TbShoppingCartCopy} from "react-icons/tb";

export default function MyOrderIcon(){
    return (
        <div>
            <a
                href="/WholeSale/orders"
                className="absolute right-24 mt-8 mr-2 font-medium text-blue-600 hover:underline"
            >
                <TbShoppingCartCopy
                    className="h-10 w-10 flex-none bg-green-100 p-1 rounded-full text-green-700 hover:bg-green-250"
                    aria-hidden="true"/>
            </a>
        </div>
    );
}