import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import {Resaction} from "../Redux/action"


export const Resgration = () =>{

    const [ User, Setuser ] = useState();

    const dispatch = useDispatch();

    const res = useSelector((store)=>store.registration);

    const HandleSubmit = (e) =>{
        Setuser({...User,[e.target.name]: e.target.value})
    };

    const HandleChange = (e)=>{
         
        e.preventDefault();
       
            fetch("https://reqres.in/api/register",{
                    method : "POST",
                    body : JSON.stringify(User),
                    headers : {
                     "content-type" : "application/json"
                    },
                   })
        .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS")
                  response.json()
            }else{
              
               return alert("check your email and passowrd")
            }
        })
        .then((data) => {
            dispatch(Resaction(data))
         
        })
        .catch((error) => {
          return <h1>{error}</h1>
        })

            // .then(x => dispatch(Resaction(x.Response)));
         
        
    };


    return <>
        <form action="" onSubmit={HandleChange}>
        {/* <input type="text" name="name" onChange={HandleSubmit}  /> */}
        <input type="email" name="email" onChange={HandleSubmit}  required />
        <input type="text"   name="password"onChange={HandleSubmit}  required />
        {/* <input type="text" name="username" id="" onChange={HandleSubmit} />
        <input type="text" name="mobile" id="" onChange={HandleSubmit} />
        <input type="text" name="description" id="" onChange={HandleSubmit} /> */}
        <input type="submit"   onSubmit={HandleChange} />
        </form>



    </>

}