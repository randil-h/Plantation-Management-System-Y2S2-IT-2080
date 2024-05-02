import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import Payment from "../../../components/WholeSale_Management/Payment";
import Footer from "../../../components/utility/Footer";
import Subscribe_newsletter from "../../../components/landingPage/subscribe_newsletter";

export default function PaymentGateway(){
    return(

        <div>
            <Navbar/>

            <Payment/>

            <Subscribe_newsletter/>
            <Footer/>
        </div>
    );
}

