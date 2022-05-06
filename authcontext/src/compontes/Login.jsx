import { useState,useContext } from "react"
import {CartContext} from "../context/authcontext"
export const Login = ()=>{
    const [Login, setLogin] = useState();
    const [Check, setcheck] = useState("x");

    const {token,Change}  = useContext(CartContext);

    const Handlechange = (e)=>{
     
      setLogin({...Login,[e.target.name]: e.target.value})
    }
  
  

    const Submitadta = (e)=>{
  
      e.preventDefault();
  
      fetch("https://reqres.in/api/login",{
       method : "POST",
       body : JSON.stringify(Login),
       headers : {
        "content-type" : "application/json"
       },
      })
       .then(res => res.json())
       .then(x=> setcheck(x))
       
       console.log(Check)
       {Check.token == "QpwL5tke4Pnpja7X4" ? Change(true):null}
       
  
    }
  





    return( <form className="addstudent" onSubmit={Submitadta}>
      <div>
 
        <input
          type="text"
          name="email"
          className="name"
          placeholder="enter first name"
          required
          onChange={Handlechange}
        />
      </div>
      <div>
    
        <input
          type="password"
          name="password"
          className="name"
          placeholder="enter first age"
          required
          onChange={Handlechange}
        />
        <input type="submit"  onChange={Submitadta}/>
      </div>
      </form>
    )
}