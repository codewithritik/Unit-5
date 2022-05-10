import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {Loginactio} from "../Redux/action"


export const Login = () =>{
    const navigae  = useNavigate()

    const [ User, Setuser ] = useState();

    const dispatch = useDispatch();

    const login = useSelector((store)=>store.login);

    const HandleSubmit = (e) =>{
        Setuser({...User,[e.target.name]: e.target.value})
    };

    const HandleChange = (e)=>{
         
        e.preventDefault();

        fetch("https://reqres.in/api/login")
         .then((response) => {
        if(!response.status == 200) {
                alert("sgjljds")
        }
        else{
         return response.json();
        }
         })
        .then((data) => {
            dispatch(Loginactio(data.data));
        })
        .catch((error) => {
        console.log('error: ' + error)

        return navigae("/dashboard")
    });

    
   
    console.log(login) 
    
       

    };
    return <>
        <form action="" onSubmit={HandleChange}>
        {/* <input type="text" name="name" onChange={HandleSubmit}  /> */}
        <input type="email" name="email" onChange={HandleSubmit}  required />
        <input type="text"   name="password"onChange={HandleSubmit}  required />
        {/* <input type="text" name="username" id="" onChange={HandleSubmit} />
        <input type="text" name="mobile" id="" onChange={HandleSubmit} />
        <input type="text" name="description" id="" onChange={HandleSubmit} /> */}
        <input type="submit"   onSubmit={HandleChange } />
        </form>



    </>

}