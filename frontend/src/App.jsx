import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./managers/Dashboard.jsx";
import Register from "./components/User/Register.jsx";
import Login from "./components/User/Login.jsx";
import OTP from "./components/User/OTP.jsx";
import OTPVerifed from "./components/User/OTPVerifed.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/otp-verified" element={<OTPVerifed />} />
      </Routes>
    </>
  );
}

export default App;
