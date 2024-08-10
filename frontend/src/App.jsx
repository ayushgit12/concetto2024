import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './managers/Dashboard.jsx'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Leaderboard from './managers/Leaderboard.jsx'



function App() {

  return (
    <>

      <Navbar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    
      
    </>
  )
}

export default App
