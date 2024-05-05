import React from "react";
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";
import ConfirmTheOrders from "../../../components/WholeSale_Management/ConfirmTheOrders";
import {SnackbarProvider} from "notistack";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

export default function ConfirmOrders(){
    const breadcrumbItems = [
        { name: 'Orders', href: '/orders/confirm' },
    ];

    return(
        <SnackbarProvider>
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
                    <div className=" flex items-center justify-between pb-2">
                        <div>
                            <h1 className="text-gray-700 text-3xl font-semibold ml-32 mt-10">ORDERS</h1>
                        </div>
                    </div>
                    <ConfirmTheOrders/>
                </div>
            </div>
        </SnackbarProvider>
    )
}