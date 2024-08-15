// import React, { useState } from 'react';

// const ApplyForCampusAmbassador = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isAmbassador, setIsAmbassador] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [referralCode, setReferralCode] = useState('CONCETTO 2024');
//   const [referralCount, setReferralCount] = useState(2);

//   const handleBecomeAmbassador = (e) => {
//     e.preventDefault();
//     setIsAmbassador(true);
    
//   };

//   const toggleLoginStatus = () => {
//     setIsLoggedIn(!isLoggedIn);
//     if (!isLoggedIn) {
//       setIsAmbassador(false);
//     }
//   };

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen  flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
//           <h1 className="text-3xl font-bold mb-6 text-gray-800">Campus Ambassador Program</h1>
//           <p className="text-lg text-gray-700 mb-4">Please log in to access the ambassador page.</p>
//           <button
//             // onClick={toggleLoginStatus}
//             className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen  flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Campus Ambassador Program</h1>
        
//         {isAmbassador ? (
//           <div className="space-y-4">
//             <p className="text-lg text-gray-700">Welcome, Campus Ambassador!</p>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <p className="text-sm text-gray-600">Your Referral Code</p>
//               <p className="text-xl font-semibold text-indigo-600">{referralCode}</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <p className="text-sm text-gray-600">Referral Count</p>
//               <p className="text-xl font-semibold text-green-600">{referralCount}</p>
//             </div>
//             <p className="text-sm text-gray-500 mt-4">
//               Share your referral code with friends and earn exciting rewards!
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <p className="text-lg text-gray-700">Become a Campus Ambassador</p>
//             <form onSubmit={handleBecomeAmbassador} className="space-y-4">
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="mt-1 block   w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//               >
//                 Become an Ambassador
//               </button>
//             </form>
//             <p className="text-sm text-gray-500 mt-4">
//               Join our ambassador program and get exclusive perks!
//             </p>
//           </div>
//         )}
        
//         <div className="mt-8 pt-4 border-t border-gray-200">
//           <button
//             onClick={toggleLoginStatus}
//             className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyForCampusAmbassador;

import React, { useState } from 'react';

const ApplyForCampusAmbassador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAmbassador, setIsAmbassador] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('CONCETTO 2024');
  const [referralCount, setReferralCount] = useState(2);

  const handleBecomeAmbassador = (e) => {
    e.preventDefault();
    setIsAmbassador(true);
    
  };

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      setIsAmbassador(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Campus Ambassador Program</h1>
          <p className="text-lg text-gray-700 mb-6">Please log in to access the ambassador page.</p>
          <a href="/login" className="bg-blue-600 text-white px-6 py-3 mt-2 rounded-lg shadow-md hover:bg-blue-700">
          Login
        </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Campus Ambassador Program</h1>
        
        {isAmbassador ? (
          <div className="space-y-4">
            <p className="text-lg text-gray-700">Welcome, Campus Ambassador!</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-gray-600">Your Referral Code</p>
              <p className="text-xl font-semibold text-indigo-600">{referralCode}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-gray-600">Referral Count</p>
              <p className="text-xl font-semibold text-green-600">{referralCount}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Share your referral code with friends and earn exciting rewards!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg text-gray-700">Become a Campus Ambassador</p>
            <form onSubmit={handleBecomeAmbassador} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block bg-gray-200 text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Become an Ambassador
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Join our ambassador program and get exclusive perks!
            </p>
          </div>
        )}
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={toggleLoginStatus}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyForCampusAmbassador;