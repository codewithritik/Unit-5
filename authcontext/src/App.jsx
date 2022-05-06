import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './compontes/navbar'
import { Login } from './compontes/Login'
// import { Check } from './compontes/Check'

function App() {

  return (
    <div className="App">
     <Navbar/>

      <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>


      </Routes>
    </div>
  )
}

export default App
