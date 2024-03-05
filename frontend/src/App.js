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
import SeedsPlanting from "./pages/crop_pages/Planting Management/SeedsPlanting";
import CropRotation from "./pages/crop_pages/Rotation Management/CropRotation";
import Chemicals from "./pages/crop_pages/Chemical Management/Chemicals";
import AddPlantingPage from "./pages/crop_pages/Planting Management/AddPlantingPage";
import AddRotationPage from "./pages/crop_pages/Rotation Management/AddRotationPage";
import ViewRotation from "./pages/crop_pages/Rotation Management/ViewRotation";
import ViewChemicals from "./pages/crop_pages/Chemical Management/ViewChemicals";
import ViewPlantingList from "./pages/crop_pages/Planting Management/ViewPlantingList";

import Equipment from "./pages/inventory_pages/Eq and Machines/Equipments";
import EqList from "./pages/inventory_pages/Eq and Machines/EqListPage";
import MaintenanceLog from "./pages/inventory_pages/Eq and Machines/MaintenanceLog"
import AddEquipments from "./pages/inventory_pages/Eq and Machines/AddEquipments";
import EqFinances from "./pages/inventory_pages/Eq and Machines/EqFinancesPage";
import AddEqFinances from "./pages/inventory_pages/Eq and Machines/AddEqFinancesPage";
import EditEqFinancesPage from "./pages/inventory_pages/Eq and Machines/EditEqFinancesPage";
import AddEqMainPage from "./pages/inventory_pages/Eq and Machines/AddEqMainPage";
import EditEqMainPage from "./pages/inventory_pages/Eq and Machines/EditEqMainPage";
import Inventory from "./pages/inventory_pages/Inventory";
import Water from "./pages/inventory_pages/Water/Water";
import Seeds_page from "./pages/inventory_pages/Seeds/Seeds_page";
import SeedList from "./pages/inventory_pages/Seeds/SeedListPage";
import AddSeedsPage from "./pages/inventory_pages/Seeds/AddSeedsPage"
import EditSeedListPage from "./pages/inventory_pages/Seeds/EditSeedListPage";
import SeedFinances from "./pages/inventory_pages/Seeds/SeedFinancesPage";
import AddSeedFinances from "./pages/inventory_pages/Seeds/AddSeedFinancesPage"
import EditSeedFinancesPage from "./pages/inventory_pages/Seeds/EditSeedFinancesPage";
import Chemical_page from "./pages/inventory_pages/Chemical/Chemical_page"
import ChemicalList from "./pages/inventory_pages/Chemical/ChemicalListPage";
import AddChemicalsPage from "./pages/inventory_pages/Chemical/AddChemicalsPage";
import EditChemicalListPage from "./pages/inventory_pages/Chemical/EditChemicalListPage";
import ChemicalFinances from "./pages/inventory_pages/Chemical/ChemicalFinancesPage";
import AddChemicalFinances from "./pages/inventory_pages/Chemical/AddChemicalFinancesPage"
import EditChemicalFinancesPage from "./pages/inventory_pages/Chemical/EditChemicalFinacesPage";

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
import Addsalary from "./pages/employee_pages/emp_salary/Addsalary";

import harvest from "./pages/harvest_pages/harvests";
import harvestCal from "./pages/harvest_pages/harvest_Cal/harvestCal";
import harvestRec from "./pages/harvest_pages/harvest_records/harvestRecords";
import yieldLifeCal from "./pages/harvest_pages/Yield_lifespan/yieldLifsp";



import AgroTourism from "./pages/tourism_pages/AgroTourismIntro";
import Feedback from "./pages/tourism_pages/FeedbackPage";
import BookingPg from "./pages/tourism_pages/BookingPg";
import PaymentPg from "./pages/tourism_pages/PaymentPg";


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


                    <Route path="/finances/salaryPayment" element={<Valuation />} />

                    <Route path="/finances/valuation" element={<SalaryPayments />} />

                    <Route path="/tourism" element={AgroTourism()}/>
                    <Route path="/feedback-form" element={Feedback()}/>
                    <Route path="/booking" element={BookingPg()}/>
                    <Route path="/payment" element={PaymentPg()}/>

                    <Route path="/finances/salaryPayment" element={<SalaryPayments />} />

                    <Route path="/finances/valuation" element={<Valuation />} />

                    <Route path="/finances/machineHours" element={<MachineHours />} />

                    <Route path = "/crop/home" element={CropManagement()}/>

                    <Route path = "/crop/planting" element={SeedsPlanting()}/>
                    <Route path = "/crop/planting/view-add" element={AddPlantingPage()}/>
                    <Route path = "/crop/planting/view" element={ViewPlantingList()}/>
                    <Route path = "/crop/rotation" element={CropRotation()}/>
                    <Route path = "/crop/rotation/view-add" element={AddRotationPage()}/>
                    <Route path = "/crop/rotation/view" element={ViewRotation()}/>
                    <Route path = "/crop/chemicals" element={Chemicals()}/>
                    <Route path = "/crop/chemicals/view-add" element={AddChemicalsPage()}/>
                    <Route path = "/crop/chemicals/view" element={ViewChemicals()}/>

                    <Route path= "/placeOrder" element={PlaceOrder()}/>
                    <Route path="/WholeSale/transactions" element={WholeSaleTransaction()}/>
                    <Route path="/WholeSale/orders" element={MyOrders()}/>

                    <Route path = "dtracking/home" element={DiseaseTracking()}/>
                    <Route path = "dtracking/visualization" element={DiseaseVisualization()}/>

                    <Route path= "insights/home" element={Insights()}/>
                    <Route path= "insights/marketprice" element={MarketPrice()}/>


                    <Route path= "/inventory/home" element={Inventory()}/>
                    <Route path = "/inventory/equipment" element={Equipment()}/>
                    <Route path = "/eqlist" element={EqList()}/>
                    <Route path= "/maintenancelog" element={MaintenanceLog()}/>
                    <Route path = "/addequipments" element={AddEquipments()}/>
                    <Route path= "/eqfinances" element={EqFinances()}/>
                    <Route path= "/addeqfinances" element={AddEqFinances()}/>
                    <Route path= "/editeqfinancespage/:id" element={<EditEqFinancesPage />} />
                    <Route path="/addeqmainpage" element={(AddEqMainPage())}/>
                    <Route path="/editeqmainpage/:id" element={<EditEqMainPage />} />
                    <Route path= "/inventory/water" element={Water()}/>
                    <Route path= "/inventory/seeds" element={Seeds_page()}/>
                    <Route path= "/seedlist" element={SeedList()}/>
                    <Route path= "/addseedspage" element={AddSeedsPage()}/>
                    <Route path= "/editseedlistpage/:id" element={<EditSeedListPage />} />
                    <Route path= "/seedfinances" element={SeedFinances()}/>
                    <Route path= "/addseedfinances" element={AddSeedFinances()}/>
                    <Route path= "/editseedfinancespage/:id" element={<EditSeedFinancesPage />} />
                    <Route path= "/inventory/chemicals" element={Chemical_page()}/>
                    <Route path= "/chemicallist" element={ChemicalList()}/>
                    <Route path= "/addchemicalspage" element={AddChemicalsPage()}/>
                    <Route path= "/editchemicallistpage/:id" element={<EditChemicalListPage />} />
                    <Route path= "/chemicalfinances" element={ChemicalFinances()}/>
                    <Route path= "/addchemicalfinances" element={AddChemicalFinances()}/>
                    <Route path= "/editchemicalfinancespage/:id" element={<EditChemicalFinancesPage />} />

                    <Route path= "/placeOrder" element={PlaceOrder()}/>

                    <Route path= "/employees/home" element= {Employee()}/>
                    <Route path="/employees/registration" element={AddEmployee()}/>
                    <Route path="/employees/tasks" element={AddTask()}/>

                    <Route path="/employees/salaryreports" element={Addsalary()}/>
        </Routes>
                    <Route path="/harvest/home"  element={harvest()}/>
                    <Route path="/harvest/calculateHarvest"  element={harvestCal()}/>
                    <Route path="/harvest/harvestRecords"  element={harvestRec()}/>
                    <Route path="/harvest/yieldLifespan"  element={yieldLifeCal()}/>
        </Routes>
            )}
        </div>
        </KindeProvider>
    );
}


