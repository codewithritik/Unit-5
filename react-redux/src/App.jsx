
import './App.css';
import { Todofunction } from './todo/Todolist';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Todofunction/>} />
      </Routes>
      
    </div>
  );
}

export default App;
