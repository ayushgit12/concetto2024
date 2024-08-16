

import React from 'react';
import img from '/Concetto24.png';

const Hero = () => {
  return (
    <div className='select-none' style={{height:`${window.innerHeight - 80}px`}}>
    <img
      src={img}
      alt="Header Image"
      className="w-full h-full pointer-events-none"
      style={{backgroundSize:"100% 100%"}}
    />
  </div>
      
  );
};

export default Hero;
