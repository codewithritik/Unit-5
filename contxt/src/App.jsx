import { useState } from 'react'
import { Navbar } from './Components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>

      <h1>ritik</h1>
    </div>
  )
}

export default App
