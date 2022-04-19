import { useEffect, useState } from "react"

function Showdata() {
  const [showdata, setdata] = useState([])
  const [showdiv, setdiv] = useState(true)


  useEffect(() => {
    foodData();
  }, []);

  const foodData = async () => {
    // (`http://localhost:8080/food?_page=${prev}&_limit=5`)

    let data = await fetch(`http://localhost:4000/food`);
    let res = await data.json();
    setdata(res);


  }

  const Showlowtohigh = () => {
    let nwData = showdata.sort(
      (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
    )
    setdata(nwData);
    console.log(showdata)
  }

  const Showfunction = () => {

    return <div>
      {showdata.map((e, i) => {
        return <div className="datadiv">
          <div className="textdiv" key={i}>{e.name}</div>
          <div className="textdiv" key={i}>{e.type}</div>
          <img src={e.imge} alt="" key={i} />
          <div className="textdiv" key={i}>{e.price}</div>
          <div className="textdiv" key={i}>{e.rating}</div>
          <div className="textdiv" key={i}>{e.votes}</div>
        </div>
      })}
    </div>


  }
  const Showrating = () => {

    return <div>
      {showdata.map((e, i) => {
        return <div className="datadiv">
          <div className="textdiv" key={i}>{e.name}</div>
          <div className="textdiv" key={i}>{e.type}</div>
          <img src={e.imge} alt="" key={i} />
          <div className="textdiv" key={i}>{e.price}</div>
          <div className="textdiv" key={i}>{e.rating}</div>
          <div className="textdiv" key={i}>{e.votes}</div>
        </div>
      })}
    </div>


  }
  return <div>
    {/* <select> Show
        <option value="" onClick={()=>{
  setdiv(false), Showlowtohigh()
}}> low to high</option>
      </select> */}

    <button onClick={() => {
      setdiv(false), Showlowtohigh()
    }}>low to high</button>



    {/* <li>3 star</li>
        <li>2 star</li>
        <li>1 star</li>
      </ul> */}
    {showdiv ? <Showfunction /> : <Showrating />}





  </div>

}
export { Showdata }