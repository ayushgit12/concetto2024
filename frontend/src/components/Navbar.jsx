import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar(){
    return (
        <nav>

        <div className='bg-peach flex flex-wrap items-center text-maroon font-semibold'>
  <Link className="flex-auto">
    <a className="btn btn-ghost text-xl">
        <img src="Concetto1.png" className='h-[64px]' alt="" />
    </a>
  </Link >
  <Link className='flex-auto  hover:text-orangee'>
        ABOUT US
  </Link>
  <Link className='flex-auto  hover:text-orangee'>
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
  <div tabIndex={0} role="button" className="btn m-1 bg-peach border-transparent hover:bg-peach hover:border-transparent">
  <img src="personn.png" className='h-[32px] bg-peach' alt="" />    
  {/* <PersonOutlineIcon color='#411530'/> */}
  
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-orangee">
    <li><a>Register</a></li>
    <li><a>Sign-up</a></li>
  </ul>
</div>
</div>
        </nav>
    );
}
