import { useState , useEffect, useRef } from 'react'



function Stopwatch() {
  const [count, setCount] = useState(0)
  const [sec, setsec] = useState(0)
  const [show, setshow] = useState(true)
  const ref = useRef(null)

  useEffect(()=>{
    startinterval()
},[])

const startinterval = () => {

  ref.current = setInterval(()=>{
    setCount((p) => p + 1 )

},100)
}


  return (
    <div className="App">
           {count<60 ? null :  setsec(sec+1)}
           {count<60 ? <p>{count}</p> : setCount(0)   }

        <h1>{sec}<span>s</span>   <span>{count}</span></h1>
        
      <button onClick={()=>{
        clearInterval( ref.current)
      }}>hide</button>
      <button onClick={()=>{
         startinterval()
      }}> start</button>
      <button onClick={()=>{
        //    setCount(0);
          clearInterval(ref.current);
        // setsec(0);
         setCount(0);
         setsec(0);
        // reset
        
       
      }}> reset</button>
   
    </div>
  )
}

export default Stopwatch
