

import { useState , useContext} from 'react';
import styled, { css } from 'styled-components'
import {CartContext} from "../contexr/context"
 const Onediv  = styled.div`
 width: 100px;
height: 50px;
margin-left: 5px;
 border-radius: 50px;
 background: #C4C4C4;
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 `;

const OneButton  = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 0px;
    border: 0px solid green;
     background: ${(props )=> props.show==="light" ? "#2991CB" : "#C4C4C4"};
   border-radius: 50px;

`;

const TwoButton  = styled.button`
     width: 50px;
    height: 50px;
    border: 0px solid green;
  background: ${(props )=> props.show==="dark" ? " #29CB97" : "#C4C4C4"};
 border-radius: 50px;
`;
function Toogle () {



    const {Theme, Change}  = useContext(CartContext)
 

        const First = ()=>{
            return <div>
             {Theme === "light" ? Change("dark"): Change("light")}
             {Theme === "dark" ? Change("light"): Change("dark")}
            </div>
        }
        const Second = ()=>{
          
            return <div>
           
            {Theme === "dark" ? Change("light"): Change("dark")}
            {/* {Change("dark")} */}
            
           </div>
        }
     
    return <div  style={{
        display: "flex",
        marginTop:"10px"
      }}>
          <div style={{
              marginTop:"10px"
            }}>
              {Theme} 
          
            </div>
    <Onediv>
        <div >
        <OneButton onClick={()=>{
                First()
            }}  show={Theme}>
            </OneButton>

        </div>
        <div>
        <TwoButton onClick={()=>{
               Second();
            }} show={Theme} >

            </TwoButton>
        </div>
        </Onediv>
        
        </div>
    
}

export {Toogle}

