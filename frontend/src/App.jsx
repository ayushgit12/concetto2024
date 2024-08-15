import { Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./managers/Dashboard.jsx";
import Register from "./components/User/Register.jsx";
import Login from "./components/User/Login.jsx";
import OTP from "./components/User/OTP.jsx";
import OTPVerifed from "./components/User/OTPVerifed.jsx";
import "./index.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Leaderboard from "./managers/Leaderboard.jsx";
import Events from "./components/Events.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/otp-verified" element={<OTPVerifed />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/events" element={<Events/>}/>
        
        

      </Routes>
    </>
  );
}

export default App;
