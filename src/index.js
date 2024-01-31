import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';

import LandingPage from "./pages/landingPage.js";
import SigninPage from "./pages/signinPage.js";
import Dashboard from "./pages/Dashboard.js";
import Employees from "./pages/Employees.js";
import Finances from "./pages/Finances.js";
import FinanceIncome from "./pages/finance_pages/FinanceIncome";
import FinanceExpenses from "./pages/finance_pages/FinanceExpenses";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={LandingPage()}/>
            <Route path="/login" element={SigninPage()}/>
            <Route path="/dashboard" element={Dashboard()}/>
            <Route path="/employees" element={Employees()}/>
            <Route path="/finances" element={Finances()}/>
            <Route path="/financeincome" element={FinanceIncome()}/>
            <Route path="/financeexpense" element={FinanceExpenses()}/>
        </Routes>
    </BrowserRouter>
);

