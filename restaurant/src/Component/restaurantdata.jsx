import { useState } from "react"
import './input.css'

function Restaurantinput(){
    const [formdata, setformdata] = useState()
        const handlechange = (e)=>{
            setformdata({...formdata, 
                [e.target.id]: e.target.value.trim()})
        }
        const submitdata = (e)=>{
            e.preventDefault();
            console.log({formdata})
            fetch("http://localhost:4000/food", {
                method:"POST",
                body: JSON.stringify({formdata}),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => setUser(json.user))
                alert("done")
        }
    return <div className="rohit" >
     <form onSubmit={submitdata}>
        <div className="ritik">
        <input  onChange={handlechange} type="text" placeholder="enter your restaurant name" id="name"/>
        </div>
        <div>
        <input onChange={handlechange}  type="text" placeholder="enter your categories " id="type"/>
        </div> <div> <input onChange={handlechange}  type="text" placeholder="enter your cost_for_one" id="imge"/></div>
       
       <div> <input onChange={handlechange}   type="text" placeholder="enter your payment_methods " id="price"/></div>
        <div><input  onChange={handlechange} type="text" placeholder="enter your image url" id="rating"/></div>
        <div><input  onChange={handlechange} type="text" placeholder="enter your image url" id="votes"/></div>
        <div><input   type="submit" /></div>
        </form>
    </div>
}

// {
//     "name": "Shiva Chinese Wok",
//     "type": "Chinese, Fast Food, Pasta",
//     "imge": "https://b.zmtcdn.com/data/pictures/chains/3/1401173/62f6e3eb3d15005745ab5b8701265af1_o2_featured_v2.jpg?output-format=webp",
//     "price": 110,
//     "rating": 4.2,
//     "votes": 1
//   },
export {Restaurantinput}