import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingAnimation from "./components/utility/LoadingAnimation";

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

import CropManagement from "./pages/crop_pages/CropManagement";
import seedsPlanting from "./pages/crop_pages/seedsPlanting";
import RotationManagement from "./pages/crop_pages/RotationManagement";
import Fertiliser from "./pages/crop_pages/Fertiliser";

import Equipment from "./pages/inventory_pages/Eq and Machines/Equipments";
import EqList from "./pages/inventory_pages/Eq and Machines/EqListPage";
import MaintenanceLog from "./pages/inventory_pages/Eq and Machines/MaintenanceLog"
import AddEquipments from "./pages/inventory_pages/Eq and Machines/AddEquipments";
import EquipmentFinances from "./pages/inventory_pages/Eq and Machines/EquipmentFinances";
import AddEqFinances from "./pages/inventory_pages/Eq and Machines/AddEqFinances";
import Inventory from "./pages/inventory_pages/Inventory"
import PlaceOrder from "./pages/WholeSaleMangement/PlaceOrder";


export default function App() {
    const [loading, setLoading] = useState(true);

    // Simulate loading delay with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200); // Simulate 2 seconds loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <LoadingAnimation />
            ) : (
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<SigninPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/employees" element={<Employees />} />

                    <Route path="/finances/home" element={<Finances />} />
                    <Route path="/finances/financeincome" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/addnewrecord" element={<AddNewIncomeRecord />} />
                    <Route path="/finances/financeincome/viewrecord" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/updaterecord" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/deleterecord" element={<FinanceIncome />} />

                    <Route path="/finances/transactions" element={<ViewAllTransactions />} />
                    <Route path="/finances/transactions/addTransaction" element={<AddNewTransaction />} />
                    <Route path="/finances/transactions/viewTransactionDetails" element={<ViewTransactionDetails />} />
                    <Route path="/finances/transactions/editTransaction" element={<EditTransaction />} />
                    <Route path="/finances/transactions/deleteTransaction" element={<DeleteTransaction />} />

                    <Route path="/finances/salaryPayment" element={<Valuation />} />

                    <Route path="/finances/valuation" element={<SalaryPayments />} />

            <Route path = "/crop/home" element={CropManagement()}/>
            <Route path = "/crop/planting" element={seedsPlanting()}/>
            <Route path = "/crop/rotation" element={RotationManagement()}/>
            <Route path = "/crop/fertiliser" element={Fertiliser()}/>

            <Route path= "/inventory" element={Inventory()}/>
            <Route path = "/equipment" element={Equipment()}/>
            <Route path = "/eqlist" element={EqList()}/>
            <Route path= "/maintenancelog" element={MaintenanceLog()}/>
            <Route path = "/addequipments" element={AddEquipments()}/>
            <Route path= "/equipmentfinances" element={EquipmentFinances()}/>
            <Route path= "/addeqfinances" element={AddEqFinances()}/>
                    <Route path= "/placeOrder" element={PlaceOrder()}/>



        </Routes>


            )}
        </div>
    );
}


