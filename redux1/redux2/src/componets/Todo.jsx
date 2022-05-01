import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { store } from "../store1"
import { Todolist } from "../todo/action"

export const Todo =()=>{
    const Dispatch = useDispatch()
    const todos = useSelector((store) => store.todohh )
    const [show, setshow ] = useState([])
    console.log(todos)

    const Handlechange = ()=>{
        Dispatch(Todolist({
            title:show,
            status:false
        }));
    }
    
    return <div>
       
            <input type="text"  onChange={(e)=>setshow(e.target.value)}/> 
            <button onClick={Handlechange}>
      todo
    </button>
    {todos.map((e,i)=>{
       return <div key={i}>{e.title}</div>
    })}
    </div>
}