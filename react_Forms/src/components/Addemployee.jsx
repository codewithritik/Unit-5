import {useState} from "react"
import "./css/Addsudent.css"
import {ShowStudents}  from "./showemployee"
// import {ShowStudents}  from "./showemployee"
export const AddStudent = () => {
  const [Employee, SetEmployee] = useState()
  const [Show, SetShow] = useState(false)

  const Handlechange = (e)=>{
   
    SetEmployee({...Employee,[e.target.name]: e.target.value})
  }



  const Submitadta = (e)=>{

    e.preventDefault();

    fetch("http://localhost:8080/employee",{
     method : "POST",
     body : JSON.stringify(Employee),
     headers : {
      "content-type" : "application/json"
     },
    })
     .then(res => res.json())
     .then(json=> SetEmployee(json.user))
    
     SetShow(true)

  }

  return (
      <div>
    <form className="addstudent" onSubmit={Submitadta}>
      <div>
        name:{" "}
        <input
          type="text"
          name="name"
          className="name"
          placeholder="enter first name"
          required
          onChange={Handlechange}
        />
      </div>
      <div>
        Age:{" "}
        <input
          type="text"
          name="age"
          className="name"
          placeholder="enter first age"
          required
          onChange={Handlechange}
        />
      </div>
    
      <div>
        {" "}
        Address:
        <input
          type="address"
          name="address"
          className="address"
          placeholder="adress"
          required
          onChange={Handlechange}
        />
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="Department "
          className="Department "
          required
          onChange={Handlechange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>
      <div>
        {" "}
        Salary:
        <input
          type="Salary"
          name="Salary"
          className="Salary"
          placeholder="enter Salary"
          required
          onChange={Handlechange}
        />
      </div>

      <div>
      marital statemarital state: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
        unmarried
          <input
            name="marital_state"
            className="unmarried"
            type="radio"
            value={"unmarried"}
            required
            onChange={Handlechange}
          />{" "}
          married{" "}
          <input
            name="marital_state"
            className="married"
            type="radio"
            value={"married"}
            required
            onChange={Handlechange}
          />
        </div>
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
    {Show ?  <ShowStudents/>:null }
    </div>
  );
};
