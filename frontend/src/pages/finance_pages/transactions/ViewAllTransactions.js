import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/utility/Navbar";
import FinanceNavigation from "../../../components/finances/FinanceNavigation.js";
import TransactionsList from "../../../components/finances/finance_transactions/TransactionsList";
import Breadcrumb from "../../../components/utility/Breadcrumbs";
import BackButton from "../../../components/utility/BackButton";
import LoadingAnimation from "../../../components/utility/LoadingAnimation";

export default function ViewAllTransactions() {

    const [TransactionsRecords, setTransactionsRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/transactions')
            .then((response) => {
                setTransactionsRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const breadcrumbItems = [
        { name: 'Finance', href: '/finances' },
        { name: 'Transactions', href: '/finances/transactions' },
    ];

    return (
        <div className="">
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <div className="flex flex-row">
                            <BackButton/>
                            <Breadcrumb items={breadcrumbItems}/>
                        </div>

                        {loading ? (
                            <LoadingAnimation />
                        ) :
                            <TransactionsList TransactionsRecords={TransactionsRecords}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
