import { useEffect, useState } from "react"

function Practics(){
    const [count , setCount] = useState(10)

    useEffect(()=>{
        let id  = setInterval(()=>{
            setCount((p)=>{
                return p -1
            })
        },1000)
    },[])

    return <div>
        <h1>{count}</h1>

        <h1>ritik</h1>
    </div>
}

export {Practics}