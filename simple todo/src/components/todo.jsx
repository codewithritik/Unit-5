import { useState } from "react"
import "./Todo.css"

function Todoinput({Getdata}){
    const [text, setText] = useState("")
  
 return(
     <div className="tododiv">
       <div className="logo">
           <i class="bi bi-check2-circle" style={{fontSize: 80}}>Todo List</i>  
       </div>
     <div className="todoinput">
         <input type="text" placeholder="✍️ Add item..." onChange={(a)=>{
             setText(a.target.value)
             console.log({text})
         }}/>
         <button onClick={()=>{
             Getdata(text)
         }}><i class="bi bi-plus-lg"></i></button>

     </div>
     
     </div>
 )

}
export {Todoinput}