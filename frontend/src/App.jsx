<<<<<<< HEAD
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./managers/Dashboard.jsx";
import Register from "./components/User/Register.jsx";
import Login from "./components/User/Login.jsx";
import OTP from "./components/User/OTP.jsx";
import OTPVerifed from "./components/User/OTPVerifed.jsx";
=======
import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './managers/Dashboard.jsx'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Leaderboard from './managers/Leaderboard.jsx'


>>>>>>> e4da23c6746749745df9b36c7674507689781833

function App() {
  return (
    <>

      <Navbar/>
      <Routes>
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/otp-verified" element={<OTPVerifed />} />
      </Routes>
=======
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    
      
>>>>>>> e4da23c6746749745df9b36c7674507689781833
    </>
  );
}

export default App;
