import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../assets/Concetto1.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import robot from '../assets/robot.jpeg'
import dj from '../assets/dj.jpeg'
import workshop from '../assets/workshop.jpeg'
// import spaceImage from 'C:\COLLEGE\CyberLabs\concetto\concetto2024dev\concetto2024-devraj\frontend\src\assets\space.png'


export default function Events(){
    
    const [subPage,setSubPage]=useState(1);
    return (
        <>
        <div className='h-screen w-screen bg-[#232323] flex flex-col items-center '    >
            
        
        <h1 className='font-star-eagle text-[#CAF438] text-[4vw] my-10'>EVENTS</h1>
        <div className='border-white border-2 rounded-3xl border-collapse w-2/5' >

        <ul className='flex p-2 w-full'>
        <li className={`px-8 py-1 font-bold text-xl text-white text-center ${subPage === 1 ? 'bg-[#F9538B]' : ''} rounded-3xl w-1/3 transition-colors duration-300`}>
  
<NavLink onClick={()=>setSubPage(1)}>Competitions</NavLink></li>
            <li className={`px-8 py-1 font-bold text-white text-xl text-center rounded-3xl w-1/3 ${subPage === 2 ? 'bg-[#F9538B]' : ''} transition-colors duration-300`}><NavLink onClick={()=>setSubPage(2)}>Workshops</NavLink></li>
            <li className={`px-8 py-1 font-bold text-white text-xl text-center rounded-3xl w-1/3 ${subPage === 3 ? 'bg-[#F9538B]' : ''} transition-colors duration-300`}><NavLink onClick={()=>setSubPage(3)}>Fun</NavLink ></li>
        </ul>






        </div>

        {subPage==1 && <ul className='my-10'>
            
                <div className='grid grid-rows-3 grid-cols-5 w-[60vw] h-fit text-white border-2 border-white rounded-3xl p-3 '>
                    <div className='row-span-2 col-start-1 col-span-2 m-2'><img src={robot} alt="" /></div>
                    <div className='row-start-3 row-span-1 col-start-1 col-span-2 m-2 flex items-center justify-center'><button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform  duartion-500 hover:scale-105 hover:shadow-lg'>register</button></div>
                    <div className='row-span-1 col-start-3 col-span-3 m-2 text-2xl font-semibold font-star-eagle'><h2>Competition </h2></div>
                    <div className='row-start-2 row-span-2 col-start-3 col-span-3 m-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!</p></div>
                </div>
            

        </ul>}
        {subPage==2 && <ul className='my-10'>
            <div className='grid grid-rows-3 grid-cols-5 w-[60vw] h-fit text-white border-2 border-white rounded-3xl p-3 '>
                    <div className='row-span-2 col-start-1 col-span-2 m-2'><img src={workshop} alt="" /></div>
                    <div className='row-start-3 row-span-1 col-start-1 col-span-2 m-2 flex items-center justify-center'><button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform  duartion-500 hover:scale-105 hover:shadow-lg'>register</button></div>
                    <div className='row-span-1 col-start-3 col-span-3 m-2 text-2xl font-semibold font-star-eagle'><h2>Workshop </h2></div>
                    <div className='row-start-2 row-span-2 col-start-3 col-span-3 m-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!</p></div>
                </div>
</ul>}
{subPage==3 && <ul className='my-10'>
    <div className='grid grid-rows-3 grid-cols-5 w-[60vw] h-fit text-white border-2 border-white rounded-3xl p-3 '>
                    <div className='row-span-2 col-start-1 col-span-2 m-2'><img src={dj} alt="" /></div>
                    <div className='row-start-3 row-span-1 col-start-1 col-span-2 m-2 flex items-center justify-center'><button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform  duartion-500 hover:scale-105 hover:shadow-lg'>register</button></div>
                    <div className='row-span-1 col-start-3 col-span-3 m-2 text-2xl font-semibold font-star-eagle'><h2>Fun </h2></div>
                    <div className='row-start-2 row-span-2 col-start-3 col-span-3 m-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!</p></div>
                </div>
</ul>}

        
        </div>
        </>
    );
}


