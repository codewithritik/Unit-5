
// import './App.css';

function Connect({title, list}){
  return (
    <div>
       <h1>{title}</h1>
       <p>{list.map((el)=>(
         <li>{el}</li>
       ))}</p>

    </div>
     
 
  )
}

function App() {

  
  const data = [
    {
      title:"Mobile Operation Systm",
      list:["Android","BlackBerry" ,"iPhone","Windows Phone"]
    },{
      title:"Mobile manufacture Systm",
      list:["Samsung","HTC" ,"MicroMax","Apple"]

    }];
  // const data= [1,2,3];

  return (
    <div className="App">
  
    {data.map((el) => (
     
    <Connect title={el.title} list ={el.list}/>
     
      ))}
    </div>
  );
}

export default App;
