import { useEffect, useState } from "react"


const Fetch  = () => {
 const [Data , setdata] = useState([])

 useEffect(()=>{
    Getdata()
 },[])

const Getdata = async ()=>{
try{
let data  = await fetch("https://reqres.in/api/users?page=2")
data = await data.json()
let x = data.data
console.log(x)
}
catch(err){
 console.error(err)
}
}
return <div>

</div>

}

export {Fetch}