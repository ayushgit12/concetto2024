import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../assets/Concetto1.png"
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
      const navigate = useNavigate();


    return (
        <nav>

        <div className='bg-peach flex flex-wrap items-center text-maroon font-semibold'>
  <Link to={"/"} className="flex-auto btn btn-ghost text-xl">
    
        <img src={logo} className='h-[64px]' alt="" />
    
  </Link >
  <Link className='flex-auto  hover:text-orangee'>
        ABOUT US
  </Link>
  <Link className='flex-auto  hover:text-orangee' to='/events'>
        EVENTS
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
        ACCOMODATION
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
        WORKSHOPS
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
        MERCHANDISE
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
        SPONSORS
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
        TEAMS
  </Link>
  

 
  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 bg-peach border-transparent hover:bg-[#c4a48e] hover:border-transparent">
  <img src="personn.png" className='h-[32px] ' alt="" />    
  
  
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-orangee bg-peach">
    <li><Link to='/register'>Register</Link></li>
    <li><Link to='/login'>Sign In</Link></li>
  </ul>
</div>
</div>
        </nav>
    );
}
