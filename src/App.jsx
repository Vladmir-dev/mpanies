import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import store from './features/store'
import { PersistGate } from "redux-persist/integration/react"
import { persistedStore } from "./features/store"
import { Provider } from "react-redux"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='font-sans'>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter>
      </PersistGate>
   </Provider>  
    </div>
  )
}

export default App
