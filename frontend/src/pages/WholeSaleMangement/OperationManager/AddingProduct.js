import React from "react";

import ProductAddingForm from "../../../components/WholeSale_Management/ProductAddingForm";
import Navbar from "../../../components/utility/Navbar";

export default function AddingProduct() {
    return(
        <div className="border-b sticky top-0 z-10">
            <Navbar/>
            <div>
                <ProductAddingForm/>
            </div>
        </div>
    );
}