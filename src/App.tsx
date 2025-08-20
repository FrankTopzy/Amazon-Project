import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
