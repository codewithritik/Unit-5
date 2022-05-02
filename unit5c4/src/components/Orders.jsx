import { useState, useEffect } from "react";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux

  const [ show, setshow] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:8080/orders`).then(res => res.json())
    .then(data=>setshow(data))
},[])



const sort = (e)=>{
 let x  = e.target.value
 let newdata = [...show].sort((a,b)=>
  a[x]>b[x] ? 1 : a[x] < b[x] ? -1:0
  )
  setshow(newdata)
}
const handlechange = (e)=>{

}

  return (

    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress" onChange={sort}>
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
          {show.map((e,i)=>{
           
           return <tr className="orders-row">
              <td className="id"  key={i}>{e.id}</td>
              <td className="problem" key={i}>{e.problem}</td>
              <td className="owner" key={i}>{e.owner_name}</td>
              <td className="status" key={i}>{e.status}</td>
              <td className="cost" key={i}>{e.cost}</td>
              <td className="change-status" key={i}>

                {/* Show select dropdown only if status is Not Accepted */}
                <select className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept" key={i}>
                {/* Show this button only if status is Not Accepted */}
                {e.status === "Not Accepted" ? <button onChange={handlechange(e.id)}>Accept</button>:null}
                {/* on change make request to update it in db, and show changed status in table */}
              
              </td>
            </tr>
          })}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};
