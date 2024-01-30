import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';

import LandingPage from "./pages/landingPage.jsx";
import SigninPage from "./pages/signinPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Employees from "./pages/Employees.jsx";
import Finances from "./pages/Finances.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={LandingPage()}/>
            <Route path="/login" element={SigninPage()}/>
            <Route path="/dashboard" element={Dashboard()}/>
            <Route path="/employees" element={Employees()}/>
            <Route path="/finances" element={Finances()}/>
        </Routes>
    </BrowserRouter>
);

