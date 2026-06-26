import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import Budget from './pages/Budget'
import Report from './pages/Report'
import Setting from './pages/Setting'
import Notification from './pages/Notification'


const App = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Auth/>}>
          <Route index element = {<Login/>}/>
          <Route path='/regiSter' element={<Register/>} />
        </Route>

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/settings" element={<Setting/>}/>

      </Routes>
      
    </div>
  )
}

export default App
