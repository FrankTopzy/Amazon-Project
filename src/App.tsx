import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Order from './pages/Order'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='orders' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App
