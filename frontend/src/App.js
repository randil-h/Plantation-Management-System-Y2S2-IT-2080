import React from 'react';
import { Route, Routes} from "react-router-dom";

import LandingPage from "./pages/landingPage.js";
import SigninPage from "./pages/signinPage.js";
import Dashboard from "./pages/Dashboard.js";
import Employees from "./pages/Employees.js";

import Finances from "./pages/finance_pages/Finances.js";
import FinanceIncome from "./pages/finance_pages/income_records/FinanceIncome";
import AddNewIncomeRecord from "./pages/finance_pages/income_records/AddNewIncomeRecord";

import AddNewTransaction from "./pages/finance_pages/transactions/AddNewTransaction";
import ViewAllTransactions from "./pages/finance_pages/transactions/ViewAllTransactions";
import ViewTransactionDetails from "./pages/finance_pages/transactions/ViewTransactionDetails";
import EditTransaction from "./pages/finance_pages/transactions/EditTransaction";
import DeleteTransaction from "./pages/finance_pages/transactions/DeleteTransaction";

import Valuation from "./pages/finance_pages/valuation/Valuation";
import SalaryPayments from "./pages/finance_pages/salary_payments/SalaryPayments";

import CropManagement from "./pages/CropManagement";
import seedsPlanting from "./pages/seedsPlanting";
import RotationManagement from "./pages/RotationManagement";
import Fertiliser from "./pages/Fertiliser"


export default function App() {
    return (
        <Routes>
            <Route path="/" element={LandingPage()}/>
            <Route path="/login" element={SigninPage()}/>
            <Route path="/dashboard" element={Dashboard()}/>
            <Route path="/employees" element={Employees()}/>

            <Route path="/finances/home" element={Finances()}/>
            <Route path="/finances/financeincome" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/addnewrecord" element={AddNewIncomeRecord()}/>
            <Route path="/finances/financeincome/viewrecord" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/updaterecord" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/deleterecord" element={FinanceIncome()}/>

                <Route path="/finances/transactions" element={ViewAllTransactions()}/>
                <Route path="/finances/transactions/addTransaction" element={AddNewTransaction()}/>
                <Route path="/finances/transactions/viewTransactionDetails" element={ViewTransactionDetails()}/>
                <Route path="/finances/transactions/editTransaction" element={EditTransaction()}/>
                <Route path="/finances/transactions/deleteTransaction" element={DeleteTransaction()}/>

            <Route path="/finances/salaryPayment" element={Valuation()}/>

            <Route path="/finances/valuation" element={SalaryPayments()}/>

            <Route path = "/crops" element={CropManagement()}/>
            <Route path= "/seedsPlanting" element={seedsPlanting()}/>
            <Route path= "/rotation" element={RotationManagement()}/>
            <Route path= "fertiliser" element={Fertiliser()}/>
        </Routes>
    )
}


