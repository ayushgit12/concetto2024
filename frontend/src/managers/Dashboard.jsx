import React from "react";
import profile from "../assets/profile.png";

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

  const user = {
    username: "Saksh123",
    fullName: "Sakshi Gupta",
    email: "sakshi@gmail.com",
    verified: true,
    contact: 1234567890,
    isISM: true,
    isAmbassador: false,
    college: "IIT DHANBAD",
  };

  return (
    <div>
      {/* navbar */}

      <div className="min-h-screen bg-[#F5E8E4]">
        <h1 className="text-6xl text-right p-8 px-32 font-bold text-[#DAA520]">
          Dashboard
        </h1>
        <div className="flex items-center md:mx-64 py-3 bg-[#F5E8E4]">
          <div className="flex gap-32 border border-[#D1512D] w-screen p-10 rounded-2xl">
            <div>
              <img src={profile} alt="img" className="w-60 rounded-full" />
              <p className="text-2xl text-center text-[#DAA520] font-bold">
                @{user.username}
              </p>
            </div>
            <div className="mt-12">
              <div className="grid gap-x-56 gap-y-9 grid-cols-2">
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
                  <p className="text-xl" style={{ fontWeight: "430" }}>
                    +91 {user.contact}
                  </p>
                </div>
              </div>


              <div className="grid gap-x-56 mt-8 gap-y-9 grid-cols-2">
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

              {!user.isAmbassador? 
              <div className="mt-16 p-4 rounded-xl text-white text-lg bg-[#dd6341]">
               
               <p >Click below to become an Ambassador</p>
               
              </div>
               : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
