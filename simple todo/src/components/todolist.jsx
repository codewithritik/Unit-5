import {Todoinput} from "./todo"
import { useState } from "react"
import "./Todo.css"
function Todolist(){
    const [Tododata, setTododata] = useState([])

    const Getdata = (data)=>{
        console.log("data"+data)
         setTododata([...Tododata, data])
    }
    return(
        <div className="Tododata">
           <Todoinput Getdata={Getdata}/>

             {Tododata.map((e,i)=>{
                 return(
                    <div className="mapdata">
                        <span>{i+1}{" "}{e}</span>
                        </div>
                 )

             })}
         
         

        </div>
   
    )
    
}
export {Todolist}