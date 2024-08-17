import React from 'react'
import Hero from '../landing page/hero'
import Video from '../landing page/video'
import { MarqueeDemo } from '../landing page/carousel.jsx'
import { Footer } from '../landing page/footer'

const Home = () => {
  return (
    <div className=' bg-black'>
      <Hero />
      <Video />
      <MarqueeDemo/>
      <Footer/>
    </div>
  )
}

export default Home