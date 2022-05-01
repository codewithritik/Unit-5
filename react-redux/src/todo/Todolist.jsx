import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Tododaction } from "./action"


export const Todofunction = ()=>{
    const axios = require('axios').default;

    const dispacth = useDispatch()
    const show =  useSelector(store => store.todo)


    const [text, settext ] = useState("");
 


    const handlechange=()=>{
        dispacth(Tododaction( {title:text,
        status:false}
        ));
       
        
    };


 

    

    return (
        <div>
            <input type="text" onChange={(e)=>{
                settext(e.target.value)
            }} />
            <button onClick={handlechange} >submit</button>
            {show.map((e)=>{
                return <div key={e.title}>{e.title} </div>
            })}


        </div>
    )
}