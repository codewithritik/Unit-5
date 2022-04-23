import { useState } from "react"
import { Button } from "./Button"
import { Fetch } from "./fetchdata";


const AddStudent = () => {
  const [students, setStudent] = useState()

  const Handlechange = (e)=>{
   
    setStudent({...students,[e.target.name]: e.target.value})
  }
  
  const Submitadta = (e)=>{
    e.preventDefault();

    // fetch("http://localhost:8080/students",{
    //  method : "POST",
    //  body : JSON.stringify(Students),
    //  headers : {
    //   "content-type" : "application/json"
    //  },
    // })
    //  .then(res => res.json())
    //  .then(json=> setStudent(json.user))
    
  }

  return (
    <form className="addstudent" onSubmit={Submitadta}>
      
      
      <div>
        {" "}
        Email:
        <input
          type="text"
          name="email"
          className="email"
          placeholder="enter email"
          required
          onChange={Handlechange}
        />
      </div>
      <div>
        {" "}
       Password:
        <input
          type="text"
          name="Password"
          className="last_name"
          placeholder="enter last name"
          required
          onChange={Handlechange}
        />
      </div>

      <input className="submit" type="submit" value="Submit" onChange={()=>{
        Submitadta()
      }}/>
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};

const Navbar = ()=>{
    return <div>
    <nav style={{
       height: "50px",
       background: "blue",
       width: "100%",
    }}>
        <Button >Login</Button>
    </nav>
    <AddStudent/>
    <Fetch/>
</div>

}



export {Navbar}