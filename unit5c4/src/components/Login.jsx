import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {LoginList} from "../Redux/actions";



export const Login = () => {
  const [check, setcheck] = useState();
  const [fectchdata, setfectch ] = useState();
  const Dispatch = useDispatch();

  const Logindata = useSelector((store) => store.Login)

 const handlechange  = (e)=>{
  setcheck({...check, [e.target.name]:e.target.value})
}
 const navigoter = useNavigate()

useEffect(()=>{
    fetch(`http://localhost:8080/users`).then(res => res.json())
    .then(data=>setfectch(data))
},[])



const submitdata = ()=>{
  {fectchdata.map((e)=>{
    if(e.username == check.username  && e.pass == check.password ){
      if(e.role == "admin"){

        navigoter("orders", {replace:true})
      }
      else{
        Dispatch(LoginList(e.username
        ))
              
        navigoter("/neworder", {replace:true})
      }
      
    }
   
  
  })}
console.log(Logindata)

  
  

}
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handlechange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handlechange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={submitdata} >Login</button>
    </div>
  );
};
