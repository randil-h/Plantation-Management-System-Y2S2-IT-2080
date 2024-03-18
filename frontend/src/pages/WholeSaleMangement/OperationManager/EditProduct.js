import React from "react";
import Navbar from "../../../components/utility/Navbar";
import ProductEdtingForm from "../../../components/WholeSale_Management/ProductEditingForm";

export default function EditProduct(){
    return(
        <div>
            <Navbar/>
            <div>
                <ProductEdtingForm/>
            </div>
        </div>
    );
}