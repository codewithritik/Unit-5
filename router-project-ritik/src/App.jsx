import './App.css';
import { Navbar } from './Components/Navbar';
import {Routes,Route} from "react-router-dom"
import { Banner } from './Components/Banner';
import { Tanner } from './Components/tanner';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner></Banner>
      <Routes>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/tanner" element={<Tanner/>}/>

      </Routes>
    </div>
  );
}

export default App;
