import React from 'react';
import Navbar from "../../components/utility/Navbar";
import ProductHistory from "../../components/WholeSale_Management/ProductHistory";

export default function wholeSaleDashBoard(){
    return(
        <div className="border-b sticky top-0 z-10">
            <Navbar/>
            <div>
                <ProductHistory/>
            </div>
        </div>
    );
}