import React from "react";
import profile from "../assets/profile.png";
import { MdCopyAll } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  //       username : {
  //         type : String,
  //         required : true
  //     },
  //     password : {
  //         type : String ,
  //         required : true
  //     },
  //     email : {
  //       type : String ,
  //       required : true
  //     },
  //     verified : {
  //       type : Boolean,
  //       default : false,
  //     },
  //     contact : {
  //       type : Number ,
  //       unique : true
  //     },
  //     isISM : {
  //       type : Boolean ,
  //       default : false
  //     },
  //     isAmbassador : {
  //       type : Boolean ,
  //       default: false
  //     }

  const navigate = useNavigate();

  const user = {
    username: "Saksh123",
    fullName: "Sakshi Gupta",
    email: "sakshi@gmail.com",
    verified: true,
    contact: 1234567890,
    isISM: true,
    isAmbassador: false,
    college: "IIT DHANBAD",
    code: 72487198319849,
  };

  const [ambassador, setAmbassador] = React.useState(user.isAmbassador);

  return (
    <div>
      {/* navbar */}

      <div className="min-h-screen bg-[#232323] flex flex-col items-center ">
        <h1
          onClick={() => navigate("/dashboard")}
          className="font-star-eagle cursor-pointer w-fit select-none text-5xl md:text-6xl text-center md:text-right p-8 md:px-32 font-bold text-[#CAF438]"
        >
          profile
        </h1>
        <div className="flex flex-wrap w-[70vw] items-center md:mx-64 py-3 bg-[#232323] ">
          <div className="flex flex-wrap justify-center gap-32 lg:border-[#D1512D] border-2 w-screen p-10 rounded-2xl ">
            <div>
              <img
                src={profile}
                alt="img"
                className="md:w-60 w-48 rounded-full"
              />
              <p className="text-2xl text-center text-[#DAA520] font-bold">
                @{user.username}
              </p>
            </div>
            <div className="md:mt-12 mt-0">
              <div className="flex gap-4 flex-col md:grid text-white lg:gap-x-56 lg:gap-y-9 lg:grid-cols-2">
                <div>
                  <h1 className="font-light">Full Name:</h1>
                  <p
                    className="text-xl overflow-hidden"
                    style={{ fontWeight: "430" }}
                  >
                    {user ? user.fullName : "Abhijit"}
                  </p>
                </div>
                <div>
                  <h1 className="font-light">Phone Number:</h1>
                  <p className="text-xl mb-4" style={{ fontWeight: "430" }}>
                    +91 {user.contact}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 flex-col md:grid text-white lg:gap-x-56 lg:gap-y-9 lg:grid-cols-2">
                <div>
                  <h1 className="font-light">Email ID:</h1>
                  <p
                    className="text-xl overflow-hidden"
                    style={{ fontWeight: "430" }}
                  >
                    {user ? user.email : "Abhijit"}
                  </p>
                </div>
                <div>
                  <h1 className="font-light">College Name</h1>
                  <p className="text-xl" style={{ fontWeight: "430" }}>
                    {user.college}
                  </p>
                </div>
              </div>

              {!ambassador ? (
                <div className="md:mt-16 mt-4 p-4 rounded-xl text-black text-lg  bg-[#dd6341]">
                  <p>Click below to become an Ambassador</p>
                  <button
                    onClick={() => {
                      setAmbassador(true);
                    }}
                    className="text-sm bg-[#F5E8E4] text-black p-1 rounded-lg mt-4"
                  >
                    Become an Ambassador
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-1 md:mt-16 mt-4 p-4 rounded-xl text-black text-sm bg-[#dd6341]">
                  <p className="flex flex-col">
                    Ambassador Referral Code:{" "}
                    <span className="flex">
                      <span className="bg-gray-200 text-black px-1 mx-1 w-fit">
                        {user.code}
                      </span>
                      <MdCopyAll
                        className="cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(user.code);
                        }}
                        fontWeight={50}
                        size={22}
                      />
                    </span>
                  </p>
                  <p>No of Registrations through your code</p>
                  <p>No of Payments complete</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
