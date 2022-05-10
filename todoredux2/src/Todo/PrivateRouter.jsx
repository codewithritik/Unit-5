import { Navigate, useNavigate } from "react-router-dom"
import { Todolist } from "./todoslist"

export const Private = ({ children })=>{

    let x = JSON.parse((localStorage.getItem('token')))
    console.log(x)
 if(x==null){
     return <Navigate to={"/login"}/>
 }
 return children

 
}