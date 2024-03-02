import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingAnimation from "./components/utility/LoadingAnimation";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";


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
import MachineHours from "./pages/finance_pages/machine_hours/MachineHours";

import CropManagement from "./pages/crop_pages/CropManagement";
import SeedsPlanting from "./pages/crop_pages/SeedsPlanting";
import RotationManagement from "./pages/crop_pages/RotationManagement";
import Chemicals from "./pages/crop_pages/Chemicals";

import Equipment from "./pages/inventory_pages/Eq and Machines/Equipments";
import EqList from "./pages/inventory_pages/Eq and Machines/EqListPage";
import MaintenanceLog from "./pages/inventory_pages/Eq and Machines/MaintenanceLog"
import AddEquipments from "./pages/inventory_pages/Eq and Machines/AddEquipments";
import EquipmentFinances from "./pages/inventory_pages/Eq and Machines/EquipmentFinances";
import AddEqFinances from "./pages/inventory_pages/Eq and Machines/AddEqFinances";
import AddEqMainPage from "./pages/inventory_pages/Eq and Machines/AddEqMainPage";
import Inventory from "./pages/inventory_pages/Inventory"
import Water from "./pages/inventory_pages/Water/Water";
import Seeds_page from "./pages/inventory_pages/Seeds/Seeds_page";
import Fertilize_page from "./pages/inventory_pages/Fertilizers/Fertilize_page"

import PlaceOrder from "./pages/WholeSaleMangement/PlaceOrder";

import DiseaseTracking from "./pages/diseaseTracking_pages/DiseaseTracking";
import DiseaseVisualization from "./pages/diseaseTracking_pages/visualization/diseaseVisualization";
import Insights from "./pages/insights/Insights";
import MarketPrice from "./pages/insights/marketPriceAnalysis/MarketPrice";

import WholeSaleTransaction from "./pages/WholeSaleMangement/WholeSaleTransaction";
import MyOrders from "./pages/WholeSaleMangement/MyOrders";



import Employee from "./pages/employee_pages/Employee.js";
import AddEmployee from "./pages/employee_pages/emp_registation/AddEmployee";
import AddTask from "./pages/employee_pages/task_assigning/AddTask";

import harvest from "./pages/harvest_pages/harvests";


export default function App() {
    const [loading, setLoading] = useState(true);

    // Simulate loading delay with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate 2 seconds loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <KindeProvider
            clientId="398e8a2c8e8744c492bc437b4890c8c7"
            domain="https://elemahana.kinde.com"
            redirectUri="http://localhost:3000"
            logoutUri="http://localhost:3000"
        >
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

                    <Route path="/finances/salaryPayment" element={<SalaryPayments />} />

                    <Route path="/finances/valuation" element={<Valuation />} />

                    <Route path="/finances/machineHours" element={<MachineHours />} />

                    <Route path = "/crop/home" element={CropManagement()}/>
                    <Route path = "/crop/planting" element={SeedsPlanting()}/>
                    <Route path = "/crop/rotation" element={RotationManagement()}/>
                    <Route path = "/crop/chemicals" element={Chemicals()}/>

                    <Route path= "/placeOrder" element={PlaceOrder()}/>
                    <Route path="/WholeSale/transactions" element={WholeSaleTransaction()}/>
                    <Route path="/WholeSale/orders" element={MyOrders()}/>

                    <Route path = "dtracking/home" element={DiseaseTracking()}/>
                    <Route path = "dtracking/visualization" element={DiseaseVisualization()}/>

                    <Route path= "insights/home" element={Insights()}/>
                    <Route path= "insights/marketprice" element={MarketPrice()}/>

                    <Route path = "/crop/home" element={CropManagement()}/>
                    <Route path = "/crop/planting" element={SeedsPlanting()}/>
                    <Route path = "/crop/rotation" element={RotationManagement()}/>
                    <Route path = "/crop/chemicals" element={Chemicals()}/>

                    <Route path= "/inventory/home" element={Inventory()}/>
                    <Route path = "/inventory/equipment" element={Equipment()}/>
                    <Route path = "/eqlist" element={EqList()}/>
                    <Route path= "/maintenancelog" element={MaintenanceLog()}/>
                    <Route path = "/addequipments" element={AddEquipments()}/>
                    <Route path= "/equipmentfinances" element={EquipmentFinances()}/>
                    <Route path= "/addeqfinances" element={AddEqFinances()}/>
                    <Route path="/addeqmainpage" element={(AddEqMainPage())}/>
                    <Route path= "/inventory/water" element={Water()}/>
                    <Route path= "/inventory/seeds" element={Seeds_page()}/>
                    <Route path= "/inventory/fertillizers" element={Fertilize_page()}/>

                    <Route path= "/placeOrder" element={PlaceOrder()}/>

                    <Route path= "/employees/home" element= {Employee()}/>
                    <Route path="/employees/registration" element={AddEmployee()}/>
                    <Route path="/employees/tasks" element={AddTask()}/>

                    <Route path="/harvest/home"  element={harvest()}/>
        </Routes>
            )}
        </div>
        </KindeProvider>
    );
}


