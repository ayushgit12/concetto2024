import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './managers/Dashboard.jsx'

function App() {

  return (
    <>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </>
  )
}

export default App
