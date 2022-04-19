import React, { useState } from 'react';

function Component(){
    const [count, setCount] = useState(0);
return(
    <div>
    <h1 style={{ color:count%2 === 0?"green":"red"} }>Count:{count}</h1>
    <button onClick={()=>{
        setCount(count+1)
    }}>Add</button>
    <button onClick={()=>{
        setCount(count-1)
    }}>Subtract</button>
    <button onClick={()=>{
        setCount(count*2)
    }}>Multiply</button>

    <button onClick={()=>{
        setCount(0)
    }}>Zero</button>
    </div>
)
}

export default Component