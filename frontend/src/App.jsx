import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './managers/Dashboard.jsx'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <>

<BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
