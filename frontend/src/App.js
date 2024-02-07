import React from 'react';
import { Route, Routes} from "react-router-dom";

import LandingPage from "./pages/landingPage.js";
import SigninPage from "./pages/signinPage.js";
import Dashboard from "./pages/Dashboard.js";
import Employees from "./pages/Employees.js";
import Finances from "./pages/finance_pages/Finances.js";
import FinanceIncome from "./pages/finance_pages/income_records/FinanceIncome";
import AddNewIncomeRecord from "./pages/finance_pages/income_records/AddNewIncomeRecord";

import CropManagement from "./pages/CropManagement";
import seedsPlanting from "./pages/seedsPlanting";
import RotationManagement from "./pages/RotationManagement";
import Fertiliser from "./pages/Harvests"
import Harvests from "./pages/Harvests";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={LandingPage()}/>
            <Route path="/login" element={SigninPage()}/>
            <Route path="/dashboard" element={Dashboard()}/>
            <Route path="/employees" element={Employees()}/>

            <Route path="/finances" element={Finances()}/>
            <Route path="/finances/financeincome" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/addnewrecord" element={AddNewIncomeRecord()}/>
            <Route path="/finances/financeincome/viewrecord" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/updaterecord" element={FinanceIncome()}/>
            <Route path="/finances/financeincome/deleterecord" element={FinanceIncome()}/>

            <Route path = "/crops" element={CropManagement()}/>
            <Route path= "/seedsPlanting" element={seedsPlanting()}/>
            <Route path= "/rotation" element={RotationManagement()}/>
            <Route path= "/harvests" element={Harvests()}/>
        </Routes>
    )
}


