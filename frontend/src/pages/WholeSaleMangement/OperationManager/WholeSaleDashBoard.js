import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import ProductHistory from "../../../components/WholeSale_Management/ProductHistory";
import SideBar from "../../../components/SideBar";
import {SnackbarProvider} from "notistack";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

export default function wholeSaleDashBoard(){

    const breadcrumbItems = [
        { name: 'Orders', href: '/orders/confirm' },
        { name: 'Products', href: '/wholesaleDashboard' },
    ];

    return(
        <SnackbarProvider>
            <div>
                <div className="sticky top-0 z-10">
                    <Navbar/>
                </div>

                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>
                    <div className="w-full col-span-5 flex flex-col ">
                        <div className="flex flex-row  ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>

                        </div>
                        <ProductHistory/>
                    </div>
                </div>
            </div>

        </SnackbarProvider>

    );
}