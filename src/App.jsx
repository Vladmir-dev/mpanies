import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-sans'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter>
   
        
    </div>
  )
}

export default App
