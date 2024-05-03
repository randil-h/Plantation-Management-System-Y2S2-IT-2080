import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import ProductHistory from "../../../components/WholeSale_Management/ProductHistory";
import SideBar from "../../../components/SideBar";
import {SnackbarProvider} from "notistack";

export default function wholeSaleDashBoard(){
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
                    {/*<div className="space-y-12">*/}
                    {/*    <h2 className="py-1 px-10 text-xl font-semibold leading-7 right-3 text-gray-900 mt-4">Product*/}
                    {/*        Management</h2>*/}
                    {/*</div>*/}

                    <div className="w-full col-span-5 flex flex-col ">
                        <ProductHistory/>
                    </div>
                </div>
            </div>

        </SnackbarProvider>

    );
}