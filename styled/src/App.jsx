import { useState } from 'react'

import './App.css'
import { Button } from './components/button'

function App() {

  
  const [border, setborder] = useState("true")

  return (
    <div className="App">
     <Button bg={border}>Primary Button</Button> 
    <Button>Default button</Button>
    <Button dot={border}>Dashed button</Button>
    <Button b={border}>Text button</Button>
    <Button color={border} b={border}>Link button</Button>
    </div>
  )
}

export default App
