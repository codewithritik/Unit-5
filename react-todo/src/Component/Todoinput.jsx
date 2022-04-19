import { useState } from "react"

import "./Todoinput.css"

function TodoInput({Getdata}){
const [Text, setText] = useState()
const Dateandweek=()=>{

    let date = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday 🖖";
    weekday[1] = "Monday 💪😀";
    weekday[2] = "Tuesday 😜";
    weekday[3] = "Wednesday 😌☕️";
    weekday[4] = "Thursday 🤗";
    weekday[5] = "Friday 🍻";
    weekday[6] = "Saturday 😴";
    
    var n = weekday[date.getDay()];
    
    var randomWordArray = Array(
        "Oh my, it's ",
        "Whoop, it's ",
        "Happy ",
        "Seems it's ",
        "Awesome, it's ",
        "Have a nice ",
        "Happy fabulous ",
        "Enjoy your "
      );
      
      var randomWord =
    randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
         return randomWord + n;
}

return <div className="TodoInput"> 
    <h1 ><i class="bi bi-check2-square"></i> Masai Todo</h1>
    <div><h2><Dateandweek/></h2></div>
    
    <div className="inputdiv">
        

    <div><i class="bi bi-plus-lg"></i></div>
    
   
        <input onChange={(e)=>{
            setText(e.target.value) 
        
        }} type="text" placeholder="✍️ Add item..." onKeyPress = {(event) => {
            if(event.key === 'Enter'){
                Getdata(Text)
            }}
          }/>
        <button  classNmae= "inputbtn"onClick={()=>{
            Getdata(Text)
        }}>Add To List</button>
      
 
 
      </div>
    </div>
   
    
    

}

export {TodoInput}