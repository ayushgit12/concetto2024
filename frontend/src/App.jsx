import { useState } from 'react'
<<<<<<< HEAD
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
=======
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './managers/Dashboard.jsx'

>>>>>>> f56ff1349a509e347bec0bdfce73761422a4ed9c
function App() {

  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
=======
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
>>>>>>> f56ff1349a509e347bec0bdfce73761422a4ed9c
    </>
  )
}

export default App
