import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const [loader, setLoader] = useState(false);
  const [] = useState("");
  const handleregister = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 3000);
      console.log("Here we dwlaing with se***");
    } catch (error) {
      setLoader(false);
    }
  };
  return (
    <>
      <div className="bg-[#F5E8E4] min-h-screen p-20 ">
        <div clas="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Welcome </h1>
            <p class="mt-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            class="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleregister}
          >
            <div class="relative">
              <div class="relative">
                <input
                  placeholder="Enter your email"
                  class="w-full rounded-lg border-gray-300 p-4 pe-12 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400"
                  id="email"
                  type="email"
                />
              </div>

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>

            <div class="relative">
              <input
                placeholder="Enter your password"
                class="w-full rounded-lg border-gray-300 text-white p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400"
                id="password"
                type="password"
              />
              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-6 w-6 placeholder-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>

            <div class="relative">
              <input
                placeholder="Enter your username"
                class="w-full rounded-lg text-white border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400"
                id="email"
                type="email"
              />
              <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48l-59.9 0C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4l-59.9 0c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208l-12.4 0c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2L168 224c-22.1 0-40-17.9-40-40l0-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4l0 14.4c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z" />
                </svg>
              </span>
            </div>

            <div class="relative">
              <input
                placeholder="Enter your mobile number "
                class="w-full rounded-lg border-gray-300 p-4 pe-12 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 focus:border-transparent"
                id="email"
                type="tel"
              />
              <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-phone-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                </svg>
              </span>
            </div>

            <div
              className="relative"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <strong> Are you from IIT ISM ?</strong>
              <label class="flex flex-col gap-2 w-7 h-6 cursor-pointer ml-7">
                <input class="peer hidden" type="checkbox" />
                <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
                <div class="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
                <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-1xl text-gray-600">
                <strong>Already have a account? </strong>
                <Link class="underline" to="/login">
                  <strong className="text-black ml-4"> Login</strong>
                </Link>
              </p>
              <Link
                class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                onClick={handleregister}
              >
                Register
              </Link>
            </div>
            {loader ? (
              <>
                <div class="text-center">
                  <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                  <h2 class="text-zinc-900 dark:text-black mt-4">Loading...</h2>
                  <p class="text-zinc-600 dark:text-black-400">
                    Your will be registered in few minutes
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
