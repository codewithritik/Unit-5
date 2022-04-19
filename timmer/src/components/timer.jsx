import { useEffect, useState } from "react"

function Timer(){
    const [milisecond , setmilisecond] = useState(0)
    const [second , setsecond] = useState(0)
    const [minutes , setminutes] = useState(0)
    const [show, setshow] = useState(false)
    
    let interval;
    useEffect(() => {
        if(show){
        interval= setInterval(() => {
           
            setmilisecond(milisecond + 1);
            if (milisecond == 59) {
                setsecond(second + 1);
                setmilisecond(0);
            }
            if (minutes == 59) {
                setminutes(minutes + 1);
                setsecond(0);
            }
            
          
         }, 30);
        }

          return () => clearInterval(interval);
        
       });
    return <div>
        <h1>Ritik Stopwatch</h1>
        {/* <h1>{milisecond},{second},{minutes}</h1> */}
      <h2>
      {minutes < 10 ? "0" + minutes : minutes}:
    {second < 10 ? "0" + second : second}:
    { milisecond< 10 ? "0" + milisecond :milisecond }
      </h2>
        <button onClick={()=>{
        setshow(true)

        }}>show</button>
       <button
            onClick={() => {
              clearInterval(interval);
              setshow(false);
            }}
          >
            Stop
          </button>
          <button onClick={()=>{
              setminutes(0);
              setsecond(0);
             setmilisecond(0);
             clearInterval(interval);
             setshow(false);
          }}>
              Reset
          </button>
    </div>
}

export {Timer}