import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';

import LandingPage from "./pages/landingPage";
import SignInPage from "./pages/signinPage";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={LandingPage()}/>
            <Route path="/login" element={SignInPage()}/>
            <Route path="/dashboard" element={Dashboard()}/>
            <Route path="/employees" element={Employees()}/>
        </Routes>
    </BrowserRouter>
);

