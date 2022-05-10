import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Dashboard } from './componets/Dashboard'
import { Login } from './componets/Login'
import { Navbar } from './componets/navbar'
import { Resgration } from './componets/Resigtraion'
import { PrivateRoute } from './private/private'
// import { Counter } from './counter'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

    

      <Route  path="/res" element={<Resgration/>}  />
      <Route path='/login'  element={<Login/>}/>
      <Route path='/dashboard'  element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    
      
      </Routes>
    </div>
  )
}

export default App
