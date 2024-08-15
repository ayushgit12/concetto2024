import React, { useState } from "react";
import "./btn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");

  const handleResendOTP = async ()=> {
    try {
        if(email){
            alert('OTP sent successfully')
            const response = await axios.post('/api/resendotp',{
                email
            })
            console.log(response)
        }   
    } catch (error) {
        console.log(error);
    }
  }
  const handleOTP = async () => {
    const response = await axios.post("/api/verifyotp", {
      otp,
      email,
    });
    if (response.data.success) {
      alert("OTP verified successfully");
      navigate("/otp-verified");
    }
    if (response.data.message) {
      alert(response.data.message);
    }
    if (response.data.error) {
      alert(response.data.error);
    }
    console.log("otp gyaa hai");
    console.log(response);
  };
  return (
    <div className="min-h-screen bg-[#050C13] flex items-center justify-center">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Enter Email
        </h2>
        <div className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full text-center text-xl text-white bg-transparent border border-white/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#10a37f]"
            placeholder="Email for verification"
          />
        </div>
        <h2 className="text-center text-white text-2xl font-semibold mb-6 mt-10">
          Enter OTP
        </h2>
        <div className="flex justify-center">
          <input
            type="text"
            value={otp}
            onChange={(e) => {
              setOTP(e.target.value);
            }}
            maxLength="6"
            className="w-full text-center text-xl text-white bg-transparent border border-white/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#10a37f]"
            placeholder="------"
          />
        </div>

        <div className="text-center text-white mt-2 flex justify-end">
            <button onClick={handleResendOTP}>
            Resend otp ?
            </button>
            </div>
        <div className="p-4 flex justify-center mt-2">
          <button class="btn-53" onClick={handleOTP}>
            <div class="original">Verify OTP</div>
            <div class="letters">
              <span>V</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>F</span>
              <span>Y</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
