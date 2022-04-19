import { TodoInput } from "./Todoinput"
import { useState } from "react"
import "./Todolist.css"
function TodoList(){

    const [Data, SetData] = useState([])
    

    const Getdeltdata = (i)=>{
        const delet = Data.filter((ele, lm )=>{
            return lm !== i
        })
        SetData(delet)
    }
    const Getdata=(Text)=>{
        console.log("data"+Text)
        SetData([...Data, Text])
    }

    return <div className="todolist">
        <TodoInput Getdata={Getdata}/>
        <div className="removeallbtn"> <button onClick={()=>{
            SetData([])
        }}>Remove All</button></div>
        <div className="Tododatadiv">
        {Data.map((e,i)=>{
            return <div className="TodoData">

                <div className="textdiv" key={i}>{e}</div>
               
                
                <div className="deltetdiv">
                    <button className="deltetbtn" onClick={()=>{
                                        Getdeltdata(i)
                }}><i class="bi bi-x"></i></button>
                </div>
                </div>
        })}
       
        </div>
        
    </div>
}

export {TodoList}