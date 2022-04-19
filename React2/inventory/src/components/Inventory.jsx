import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 12,
    notebooks: 13,
    pens: 40,
    inkpens:22
  });
    // Create add and remove functions here that changes the
    // state.

  // let books = inv.books
  // const notebooks = inv.notebooks
  // const pens = inv.pens
  // const inkpens = inv.inkpens
 
  const bookadd = ()=>{
    setInv({...inv, books:inv.books+1 })
  }
  const booksubtract = ()=>{
    if(inv.books === 0 ){
      setInv({...inv, books:0})
    }
    else{
      setInv({...inv, books:inv.books-1 })
     
  }
    
  }
      
  const notebooksadd = ()=>{
    setInv({...inv, notebooks:inv.notebooks+1 })
    
   
    
  }
  const notebooksubtract = ()=>{
    if(inv.notebooks ===0 ){
      setInv({...inv, notebooks:0})
    }
    else{
      setInv({...inv, notebooks:inv.notebooks-1 })
     
  }
  }
  const penadd = ()=>{
    setInv({...inv, pens:inv.pens+1 })
   
}
  const pensubtract = ()=>{
    if(inv.pens ===0 ){
      setInv({...inv, pens:0})
    }
    else{
      setInv({...inv, pens:inv.pens-1 })
  }
  }
      
  const inksubtract = ()=>{
    if(inv.inkpens === 0){
      setInv({...inv, inkpens:0})
    }else{
      setInv({...inv, inkpens:inv.inkpens-1 })
    }
  }
  const inkadd = ()=>{
    setInv({...inv, inkpens:inv.inkpens+1 })
    
  }
    
  const totole = ()=>{
    let t = {books:inv.books}+{notebooks:inv.notebooks}+{pens:inv.pens}+{inkpens:inv.inkpens}
  }
  return (

    <div
   
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={bookadd}>+</button>
        <button className="circlularButton" onClick={booksubtract}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={notebooksadd}>+</button>
        <button className="circlularButton" onClick={notebooksubtract}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={penadd}>+</button>
        <button className="circlularButton" onClick={pensubtract}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={inkadd}>+</button>
        <button className="circlularButton" onClick={inksubtract}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}


      total:{inv.books+inv.notebooks+inv.pens+inv.inkpens}
      </div>
  );
};
