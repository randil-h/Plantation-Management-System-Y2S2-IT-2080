import React, { useState } from 'react';

import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation.js";
import TransactionsList from "../../../components/finances/finance_transactions/TransactionsList";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";
import FinanceTransactionsStatBar from "../../../components/finances/finance_transactions/FinanceTransactionsStatBar";
import {useNavigate, useParams} from "react-router-dom";
import {SnackbarProvider, useSnackbar} from "notistack";

export default function ViewAllTransactions() {

    const [loading, setLoading] = useState(false);


    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Transactions', href: '/finances/transactions' },
    ];

    return (
        <SnackbarProvider>
        <div className="">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row ">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>
                        <div>
                            <FinanceTransactionsStatBar/>
                        </div>


                        {loading ? (
                                <LoadingAnimation/>
                            ) :
                            <TransactionsList />
                        }


                    </div>
                </div>
            </div>
        </div>
        </SnackbarProvider>
    );
}
