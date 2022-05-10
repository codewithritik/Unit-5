import { useSelector } from "react-redux"
import {  Navigate } from "react-router-dom"

export const PrivateRoute =({ch}) =>{
    const login = useSelector((store)=>store.login)
   
  
    // if(!login.length==6){
    //      return <Navigate to={"/login"} /> 
      
    // }
    return ch
}