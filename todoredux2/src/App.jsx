import { useState } from 'react'
import './App.css'
import { Todolist } from './Todo/Todolist'
import { Route, Routes } from 'react-router-dom'
import { TodoDetails } from './Todo/maplist'
import { Navbar } from './Todo/nav'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Todolist/>}></Route>
        <Route path='/tododetail/:id' element={<TodoDetails/>}></Route>
      </Routes>
        
    </div>
  )
}

export default App
