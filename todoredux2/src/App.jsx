import { useState } from 'react'
import './App.css'
import { Todolist } from './Todo/todoslist'
import { Route, Routes } from 'react-router-dom'
import { TodoDetails } from './Todo/maplist'
import { Navbar } from './Todo/nav'
import { Login } from './Todo/login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Private } from './Todo/PrivateRouter'
import {Todo} from "./Todo/Todo"
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/todolist"  element={<Private><Todolist /> </Private> }/>
    
        <Route path='/tododetail/:id' element={<TodoDetails/>}></Route>
      </Routes>
        
    </div>
  )
}

export default App
