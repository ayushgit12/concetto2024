import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../assets/Concetto1.png"
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
      const navigate = useNavigate();


    return (
        <nav>

        <div className='bg-tranparent grid grid-cols-11 w-full grid-rows-1 items-center text-white '>
            <div className='col-start-1 col-span-2'>

  <NavLink to={"/"} className="flex-1 btn btn-ghost text-xl font-aclonica">
    
        {/* <img src={logo} className='h-[64px]' alt="" /> */}
        Concetto 2024
    
  </NavLink >
            </div>
  <div className='col-start-5 col-span-3 flex flex-wrap'>

  
  <NavLink
            to="/events"
            className={({ isActive }) => 
              `flex-auto px-4 py-2 font-poppins
               ${isActive ? 'text-[#F9538B] font-bold' : 'text-white hover:text-[#F9538B]'}`
            }
          >
            Events
          </NavLink>
  <NavLink className={({ isActive }) => 
              `flex-auto px-4 py-2 font-poppins
               ${isActive ? 'text-[#F9538B] font-bold' : 'text-white hover:text-[#F9538B]'}`
            } to='about-us'>
        About Us
  </NavLink>
  <NavLink className={({ isActive }) => 
              `flex-auto px-4 py-2 font-poppins
               ${isActive ? 'text-[#F9538B] font-bold' : 'text-white hover:text-[#F9538B]'}`
            } to='/campus-ambassador'>
        Campus Ambassador
  </NavLink>
  
  </div>
  

  <div className='col-start-10 col-span-2 flex flex-row flex-wrap'>
  <button className='flex-auto  transition-transform transform  duration-500 hover:scale-105 hover:shadow-lg font-poppins text-white bg-gradient-1 rounded-bl-lg rounded-tr-lg'
   onClick={()=>navigate('/register')}>
        Signup
  </button>
  <button 
              className='flex-auto px-4 py-2 font-poppins text-white hover:text-[#F9538B]'
              onClick={()=>navigate('/login')}>
        Login
  </button>

  </div>

 
  </div>
        </nav>
    );
}
