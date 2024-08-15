
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import robot from '../assets/robot.jpeg';
import dj from '../assets/dj.jpeg';
import workshop from '../assets/workshop.jpeg';

export default function Events() {
  const [subPage, setSubPage] = useState(1);
  return (
    <>
      <div className='h-screen w-screen bg-[#232323] flex flex-col items-center p-4 md:p-8'>
        
        <h1 className='font-star-eagle text-[#CAF438] text-[8vw] md:text-[4vw] my-4 md:my-10 text-center'>EVENTS</h1>
        
        <div className='border-white border-2 rounded-3xl border-collapse w-full md:w-2/5'>
          <ul className='flex flex-wrap p-2 w-full'>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 1 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/3 transition-colors duration-300`}>
              <NavLink onClick={() => setSubPage(1)}>Competitions</NavLink>
            </li>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 2 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/3 transition-colors duration-300`}>
              <NavLink onClick={() => setSubPage(2)}>Workshops</NavLink>
            </li>
            <li className={`px-4 py-1 font-bold text-lg md:text-xl text-white text-center ${subPage === 3 ? 'bg-[#F9538B]' : ''} rounded-3xl w-full md:w-1/3 transition-colors duration-300`}>
              <NavLink onClick={() => setSubPage(3)}>Fun</NavLink>
            </li>
          </ul>
        </div>

        {subPage === 1 && (
          <div className='my-10'>
            <div className='grid grid-rows-3 grid-cols-5 gap-4 w-full md:w-[60vw] text-white border-2 border-white rounded-3xl p-3'>
              <div className='row-span-2 col-span-5 md:col-span-2'>
                <img src={robot} alt="Competition" className='rounded-xl w-full h-auto' />
              </div>
              <div className='row-start-3 row-span-1 col-span-5 md:col-span-2 flex items-center justify-center'>
                <button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform duration-500 hover:scale-105'>
                  Register
                </button>
              </div>
              <div className='row-span-1 col-span-5 md:col-span-3 text-2xl font-semibold font-star-eagle'>
                <h2>Competition</h2>
              </div>
              <div className='row-span-2 col-span-5 md:col-span-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!</p>
              </div>
            </div>
          </div>
        )}

        {subPage === 2 && (
          <div className='my-10'>
            <div className='grid grid-rows-3 grid-cols-5 gap-4 w-full md:w-[60vw] text-white border-2 border-white rounded-3xl p-3'>
              <div className='row-span-2 col-span-5 md:col-span-2'>
                <img src={workshop} alt="Workshop" className='rounded-xl w-full h-auto' />
              </div>
              <div className='row-start-3 row-span-1 col-span-5 md:col-span-2 flex items-center justify-center'>
                <button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform duration-500 hover:scale-105'>
                  Register
                </button>
              </div>
              <div className='row-span-1 col-span-5 md:col-span-3 text-2xl font-semibold font-star-eagle'>
                <h2>Workshop</h2>
              </div>
              <div className='row-span-2 col-span-5 md:col-span-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!.</p>
              </div>
            </div>
          </div>
        )}

        {subPage === 3 && (
          <div className='my-10'>
            <div className='grid grid-rows-3 grid-cols-5 gap-4 w-full md:w-[60vw] text-white border-2 border-white rounded-3xl p-3'>
              <div className='row-span-2 col-span-5 md:col-span-2'>
                <img src={dj} alt="Fun" className='rounded-xl w-full h-auto' />
              </div>
              <div className='row-start-3 row-span-1 col-span-5 md:col-span-2 flex items-center justify-center'>
                <button className='bg-[#F9538B] font-star-eagle py-2 px-3 rounded-2xl transition-transform transform duration-500 hover:scale-105'>
                  Register
                </button>
              </div>
              <div className='row-span-1 col-span-5 md:col-span-3 text-2xl font-semibold font-star-eagle'>
                <h2>Fun</h2>
              </div>
              <div className='row-span-2 col-span-5 md:col-span-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat neque aliquid, fugit repudiandae sit, quidem adipisci veritatis nemo autem animi voluptatem dolorum mollitia temporibus impedit commodi vel laborum. Dolorem!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
