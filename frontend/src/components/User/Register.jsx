import React, { useState } from "react";
import "./btn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, Setconfirmpass] = useState("");
  const [isload, setIsload] = useState(false);
  const navigate = useNavigate();

  const handleregister = async (e) => {
    e.preventDefault();
    setIsload(true);
    if (password !== confirmpass) {
      alert("Both password are wrong");
    } else {
      try {
        console.log(email, password, username);
        const response = await axios.post("/api/register", {
          email,
          password,
          username,
        });
        if (response.data.error) {
          setIsload(false);
          alert(response.data.error);
        }
        if (response.data.user) {
          alert("OTP sent to your email account");
          navigate("/otp-verification");
          console.log("hello");
        }
      } catch (error) {
        setIsload(false);

        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#050C13]">
        <div
          className="bg-white/10 bg-opacity-20 p-10 rounded-lg m-8 shadow-xl text-[#ededed]"
          style={{ width: "500px" }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white mt-5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border mt-5 bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white mt-5">
                Password
              </label>
              <input
                type="password"
                value={confirmpass}
                onChange={(e) => {
                  Setconfirmpass(e.target.value);
                }}
                placeholder="password"
                className="w-full px-3 py-2 border mt-4 bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white mt-5">
                Confirm password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="confirm password"
                className="w-full px-3 py-2 border mt-4 bg-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <button class="btn-53" onClick={handleregister}>
                <div class="original">Sign Up</div>
                <div class="letters">
                  <span>S</span>
                  <span>I</span>
                  <span>G</span>
                  <span>N</span>
                  <span> </span>
                  <span>U</span>
                  <span>P</span>
                </div>
              </button>
            </div>
            <div>
              Already have an account ?
              <Link to="/login" className="ml-44">
                Log in
              </Link>
            </div>
            <>
              {isload ? (
                <>
                  <div className="flex justify-center mt-15  mb-10">
                    <Loader />
                  </div>
                  <div className="text-center">
                  <strong> Wait.....</strong>
                  </div>
                  
                </>
              ) : (
                <> </>
              )}
            </>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
