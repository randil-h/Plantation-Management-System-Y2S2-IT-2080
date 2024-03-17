import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingAnimation from "./components/utility/LoadingAnimation";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";


import LandingPage from "./pages/landingPage.js";
import SigninPage from "./pages/signinPage.js";
import Dashboard from "./pages/Dashboard.js";


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
import UpdateRotation from "./pages/crop_pages/Rotation Management/UpdateRotation"
import ViewChemicals from "./pages/crop_pages/Chemical Management/ViewChemicals";
import ViewPlantingList from "./pages/crop_pages/Planting Management/ViewPlantingList";
import AddCropInput from "./pages/crop_pages/Crop Input/AddCropInput";
import AddChemicalsPage from "./pages/crop_pages/Chemical Management/AddChemicalsPage";


import MaintenanceLog from "./pages/inventory_pages/Eq and Machines/MaintenanceLog"
import AddEqMainPage from "./pages/inventory_pages/Eq and Machines/AddEqMainPage";
import EditEqMainPage from "./pages/inventory_pages/Eq and Machines/EditEqMainPage";
import Inventory from "./pages/inventory_pages/Inventory";
import Water from "./pages/inventory_pages/Water/Water";
import InventoryRecordList from "./pages/inventory_pages/Inventory_records/InventoryRecordListpage";
import AddInventoryRecordsPage from "./pages/inventory_pages/Inventory_records/AddInventoryRecordsPage";
import EditInventoryRecords from "./components/Inventory/Inventory_records/EditInventoryRecords";

import DiseaseTracking from "./pages/diseaseTracking_pages/DiseaseTracking";
import ViewAllDiseases from "./pages/diseaseTracking_pages/records/ViewAllDiseases";
import DiseaseVisualization from "./pages/diseaseTracking_pages/visualization/diseaseVisualization";
import AddDiseaseRecord from "./pages/diseaseTracking_pages/records/AddDiseaseRecord";
import UpdateDiseaseRecord from "./pages/diseaseTracking_pages/records/UpdateDiseaseRecord";

import ViewDiseaseRecord from "./pages/diseaseTracking_pages/records/ViewDiseaseRecord";

import Insights from "./pages/insights/Insights";
import MarketPrice from "./pages/insights/marketPriceAnalysis/MarketPrice";

import WholeSaleTransaction from "./pages/WholeSaleMangement/WholeSaleTransaction";
import MyOrders from "./pages/WholeSaleMangement/MyOrders";
import AddingProduct from"./pages/WholeSaleMangement/AddingProduct";
import PlaceOrder from "./pages/WholeSaleMangement/PlaceOrder";
import WholeSaleDashBoard from "./pages/WholeSaleMangement/WholeSaleDashBoard";


import Employee from "./pages/employee_pages/Employee.js";
import AddEmployee from "./pages/employee_pages/emp_registation/AddEmployee";
import AddTask from "./pages/employee_pages/task_assigning/AddTask";


import harvest from "./pages/harvest_pages/harvests";
import harvestCal from "./pages/harvest_pages/harvest_Cal/harvestCal";
import harvestRec from "./pages/harvest_pages/harvest_records/harvestRecords";
import yieldLifeCal from "./pages/harvest_pages/Yield_lifespan/yieldLifsp";

import AgroTourism from "./pages/tourism_pages/AgroTourismIntro";
import Feedback from "./pages/tourism_pages/FeedbackPage";
import BookingPg from "./pages/tourism_pages/BookingPg";
import PaymentPg from "./pages/tourism_pages/PaymentPg";
import ConfirmationPg from "./pages/tourism_pages/ConfirmationPg";
import FarmTourPg from "./pages/tourism_pages/FarmTours";
import FruitVegPicking from "./pages/tourism_pages/FruitVegPicking";
import FarmChore from "./pages/tourism_pages/FarmChore";
import EditBookingPg from "./pages/tourism_pages/EditBooking";
import FeedbackDisplay from "./pages/tourism_pages/ViewFeedback";

import ViewEmpDetails from "./pages/employee_pages/emp_registation/ViewEmpDetails";
import ViewTaskList from "./pages/employee_pages/task_assigning/ViewTaskList";

import EditEmployeePage from "./pages/employee_pages/emp_registation/EditEmployeePage";


export default function App() {
    const [loading, setLoading] = useState(true);

    // Simulate loading delay with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100); // Simulate 2 seconds loading time
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


                    <Route path="/finances/home" element={<Finances />} />
                    <Route path="/finances/financeincome" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/addnewrecord" element={<AddNewIncomeRecord />} />
                    <Route path="/finances/financeincome/viewrecord" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/updaterecord" element={<FinanceIncome />} />
                    <Route path="/finances/financeincome/deleterecord" element={<FinanceIncome />} />

                    <Route path="/finances/transactions" element={<ViewAllTransactions />} />
                    <Route path="/finances/transactions/addTransaction" element={<AddNewTransaction />} />
                    <Route path="/finances/transactions/viewTransactionDetails/:id" element={<ViewTransactionDetails />} />
                    <Route path="/finances/transactions/editTransaction/:id" element={<EditTransaction />} />
                    <Route path="/finances/transactions/deleteTransaction" element={<DeleteTransaction />} />

                    <Route path="/finances/salaryPayment" element={<SalaryPayments />} />

                    <Route path="/finances/valuation" element={<Valuation />} />

                    <Route path="/tourism" element={AgroTourism()}/>
                    <Route path="/feedback-form" element={Feedback()}/>
                    <Route path="/booking" element={BookingPg()}/>
                    <Route path="/payment" element={PaymentPg()}/>
                    <Route path="/confirmation" element={ConfirmationPg()}/>
                    <Route path="/farmtour" element={FarmTourPg()}/>
                    <Route path="/fruitvegpick" element={FruitVegPicking()}/>
                    <Route path="/farmchore" element={FarmChore()}/>
                    <Route path="/booking/edit/:id" element={EditBookingPg()} />
                    <Route path="/feedbacklist" element={FeedbackDisplay()}/>

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
                    <Route path = "/crop/rotation/update/:id" element={UpdateRotation()}/>
                    <Route path = "/crop/chemicals" element={Chemicals()}/>
                    <Route path = "/crop/chemicals/view-add" element={AddChemicalsPage()}/>
                    <Route path = "/crop/chemicals/view" element={ViewChemicals()}/>
                    <Route path = "/crop/input/add" element={AddCropInput()}/>

                    <Route path= "/placeOrder" element={PlaceOrder()}/>
                    <Route path="/WholeSale/transactions" element={WholeSaleTransaction()}/>
                    <Route path="/WholeSale/orders" element={MyOrders()}/>
                    <Route path= "/placeOrder" element={PlaceOrder()}/>
                    <Route path="/addingProduct" element={AddingProduct()}/>
                    <Route path="/wholesaleDashboard" element={WholeSaleDashBoard()}/>

                    <Route path = "diseases/home" element={DiseaseTracking()}/>

                    <Route path = "/diseases/records/addDisease" element={AddDiseaseRecord()}/>
                    <Route path = "/diseases/records/updateDisease/:id" element={UpdateDiseaseRecord()}/>

                    <Route path = "/diseases/records/viewDisease/:id" element={ViewDiseaseRecord()}/>
                    <Route path = "/diseases/records" element={ViewAllDiseases()}/>
                    <Route path = "/diseases/visualization" element={DiseaseVisualization()}/>

                    <Route path= "/insights/home" element={Insights()}/>
                    <Route path= "/insights/marketprice" element={MarketPrice()}/>

                    <Route path= "/inventory/home" element={Inventory()}/>
                    <Route path= "/inventory/maintenancelog" element={MaintenanceLog()}/>
                    <Route path="/inventory/maintenancelog/addeqmainpage" element={(AddEqMainPage())}/>
                    <Route path="/editeqmainpage/:id" element={<EditEqMainPage />} />
                    <Route path= "/inventory/water" element={Water()}/>
                    <Route path= "/inventory/inventoryrecords" element={InventoryRecordList()}/>
                    <Route path= "/inventory/inventoryrecords/addinventoryrecordspage" element={(AddInventoryRecordsPage())}/>
                    <Route path= "/inventory/inventoryrecords/editinventorypage/:id" element={<EditInventoryRecords/>}/>

                    <Route path= "/employees/home" element= {Employee()}/>
                    <Route path="/employees/registration/addEmployee" element={AddEmployee()}/>
                    <Route path="/employees/tasks/addTask" element={AddTask()}/>
                    <Route path="/employees/registration" element={ViewEmpDetails()}/>
                    <Route path="/employees/tasks" element={ViewTaskList()}/>
                    <Route path="/employees/registration/editEmployee/:id" element={<EditEmployeePage/>}/>

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