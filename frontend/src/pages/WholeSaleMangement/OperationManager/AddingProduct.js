import React from "react";

import ProductAddingForm from "../../../components/WholeSale_Management/ProductAddingForm";
import Navbar from "../../../components/utility/Navbar";
import {SnackbarProvider} from "notistack";
import SideBar from "../../../components/SideBar";
import BackButton from "../../../components/utility/BackButton";
import Breadcrumb from "../../../components/utility/Breadcrumbs";

export default function AddingProduct() {

    const breadcrumbItems = [
        { name: 'Products', href: '/wholesaleDashboard' },
        { name: 'Add Product', href: 'OperationManager/AddingProduct' },
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
                    <ProductAddingForm/>
                </div>
            </div>
        </SnackbarProvider>

    );
}