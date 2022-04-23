import {useState, useEffect} from "react"
export const ShowStudents = () => {
   const [show, setshow] = useState([])
  const [value , setvalue] = useState()

   useEffect(()=>{
    studentdata();
   }, [])

   const studentdata = async () =>{
     try{
      let data = await fetch("http://localhost:8080/employee");
      data = await data.json();

      setshow(data)
      
     }
     catch (err){
        console.log(err)
     }
   }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {show.map((e,i)=>{
            return <tr className="row">
              <td className="first_name"  key={i}>{e.name}</td>
              <td className="age"  key={i}>{e.age}</td>
              <td className="last_name"  key={i}>{e.address}</td>
              <td className="email"  key={i}>{e.Department }</td>
              <td className="gender"  key={i}>{e.Salary}</td>
              <td className="age"  key={i}>{e.marital_state}</td>

            </tr>
          })}
         
          
          
        </tbody>
      </table>
   
    </div>
  );
};
