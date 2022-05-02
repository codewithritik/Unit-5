import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Link } from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false)

  const loginlogout =  () =>{
      if(show){
        setshow(false)
      }
      else{
        setshow(true)
      }
  }
  
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link> 
        {show ? <Link className="nav-logout" to="/logout"  onClick={loginlogout} >
          Logout
        </Link> :
         <Link className="nav-login" to={"/login"}  onClick={loginlogout}>
         Login
         </Link> 
        }
        
       
      </div>
      
      <Routes> 
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected */}
        <Route  path="/" element={
          <Home/> }/>
          <Route  path='/login' element={
          <Login/> }/>
          <Route  path='/logout' element={
          <Logout/> }/>
          <Route  path='/orders' element={<ProtectedRoute>

            <Orders/> 
          </ProtectedRoute>}/>
          <Route  path='/neworder' element={
          <ProtectedRoute> 
          {show}
          <NewOrder/> 
        </ProtectedRoute> }/>
       
       </Routes>
    </div>
  );
}

export default App;
