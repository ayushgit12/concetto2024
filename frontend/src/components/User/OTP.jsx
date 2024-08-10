import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OTP() {
    const [loader, setLoader] = useState(false);
    const [] = useState("");
    const navigate =  useNavigate();
    const handleOTP = async (event) => {
      event.preventDefault();
      try {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          navigate('/otp-verified')
        }, 
        3000);
        console.log("Here we dwlaing with se***");
      } catch (error) {
        setLoader(false);
      }
    };
  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-[#F5C7A9]">
        <form class="flex flex-col items-center justify-around w-72 bg-white rounded-lg p-5 shadow-md">
          <div class="text-lg font-bold text-black">OTP</div>
          <div class="text-lg font-bold text-black mt-2">Verification Code</div>
          <p class="text-sm text-gray-500 mt-1 text-center">
            We have sent a verification code to your mobile number
          </p>
          <div class="flex mt-3 space-x-3">
            <input
              id="input1"
              type="text"
              maxlength="1"
              class="w-8 h-8 text-center border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <input
              id="input2"
              type="text"
              maxlength="1"
              class="w-8 h-8 text-center border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <input
              id="input3"
              type="text"
              maxlength="1"
              class="w-8 h-8 text-center border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <input
              id="input4"
              type="text"
              maxlength="1"
              class="w-8 h-8 text-center border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button onClick={handleOTP} className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none mt-5">
            <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
            <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
              Verify OTP
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
              </svg>
            </span>
          </button>
          {
            loader ? <>
            <div class="text-center m-5">
              <div
                class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
              ></div>
              <h2 class="text-zinc-900 dark:text-black mt-4">Loading...</h2>
              <p class="text-zinc-600 dark:text-black-400">
                Your will be Having OTP in few sec
              </p>
            </div>
            </>: <></>
            }
        </form>
        
      </div>
    </>
  );
}

export default OTP;
