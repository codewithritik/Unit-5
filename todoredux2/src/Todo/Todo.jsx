import { useState, useEffect } from "react"
import { addTodo } from "./action";
import {useDispatch , useSelector} from "react-redux"
import { Link } from "react-router-dom";


export const Todo =()=>{
    const [text , setText] = useState("");
    const dispatch = useDispatch();


    useEffect(()=>{
        getData()
      
    },[]);
    

    const getData = async()=>{
        let res =  await fetch("http://localhost:9090/todo")
         let data = await res.json();
         dispatch(addTodo(data))
      }

    const handleAdd = ()=>{
        const payload = {
            title : text,
            status : false,
        };

        fetch("http://localhost:9090/todo",{
            body: JSON.stringify(payload),
            headers:{
                "content-type": "application/json",
            },
            method : "POST",
        });
        return getData()
        
    };

    

    return (
        <div>
            <input type="text" name="todo" placeholder="Enter todo" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={handleAdd}>+</button><br />
            
        </div>
    )
}