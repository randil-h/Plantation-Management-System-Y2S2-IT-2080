import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import OrderEditingForm from "../../../components/WholeSale_Management/OrderEditingForm";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";

export default function EditOrder(){
    return(
        <div>
            <Navbar/>
            <OrderEditingForm/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
    );
}