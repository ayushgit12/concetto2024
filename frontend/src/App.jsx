import { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
