import React, { useState } from "react";
import "./btn.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isload,setIsload]=useState(false);
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    setIsload(true);
    e.preventDefault();
    try {
      const response = await axios.post('/api/Login',{
        email,password
      })
      console.log(response)
      setIsload(false);
      console.log(response.data.user)
      if(response.data.user){
        navigate('/');
        console.log("hello")
      }
      if(response.data.error){
        alert(response.data.error)
      }
    } catch (error) {
      setIsload(false);
      
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#050C13]">
        <div className="bg-white/10 bg-opacity-20 p-8 rounded-lg shadow-xl w-full max-w-sm text-[#CAF438]">
          <h2 className="text-2xl font-bold text-center mb-4">
            It's time for Concetto 2K24
          </h2>
          <h2 className="text-2xl font-bold text-center mb-12">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[white] mb-5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                className="w-full px-3 py-2 border bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div
              style={{
                fontSize: "13px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Forgot password?
            </div>
            <div className="flex items-center justify-center">
              <button class="btn-53" onClick={handlelogin}>
                <div class="original">Sign In</div>
                <div class="letters">
                  <span>S</span>
                  <span>I</span>
                  <span>G</span>
                  <span>N</span>
                  <span> </span>
                  <span>I</span>
                  <span>N</span>
                </div>
              </button>
            </div>
            <div>
              {
                isload ? <> 
                <div className="flex justify-center mt-9 mb-10">
                <Loader/>
                </div>
                <b className="text-center ml-36 mt-14"> Wait.....</b>
                 </>:<></>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
