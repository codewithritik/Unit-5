import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const TodoDetails = ()=>{
    const [tododetail, setTododetails] = useState([]);
   console.log(tododetail.status)
    const {id} = useParams();
    
    useEffect(()=>{
        fetch(`http://localhost:9090/todo/${id}`)
        .then(res => res.json())
        .then(data=>setTododetails(data));
    },[])

    return (
        <div>
            <div>ID:-{tododetail.id}</div>
            <div>Title:-{tododetail.title}</div>
            <div>Status:-{tododetail.status}</div>
        </div>
    )
}