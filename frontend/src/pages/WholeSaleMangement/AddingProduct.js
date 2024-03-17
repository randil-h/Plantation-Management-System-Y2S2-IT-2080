import React from "react";

import ProductAddingForm from "../../components/WholeSale_Management/ProductAddingForm";
import Navbar from "../../components/utility/Navbar";

export default function AddingProduct() {
    return(
        <div>
            <Navbar/>
            <div>
                <ProductAddingForm/>
            </div>
        </div>
    );
}