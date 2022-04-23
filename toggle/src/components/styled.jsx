
import { useContext, useState } from 'react';
import styled, { css } from 'styled-components'
import {Toogle} from "./Togglebutton"
import {CartContext} from "../contexr/context"

import './class.css';
function Style(){

  const [show, setshow] = useState(true)
  const {Theme}  = useContext(CartContext)

    
    const Maindiv = styled.div`

        
        color:  ${(props )=> props.theme==="light" ? " black" : "white"};
        background: ${(props )=> props.theme==="light" ? " #F5F6FA" : "#1F2327"};
        width: 1440px;
        height: 1024px;
   
        display: flex;
    `
  
    const Leftmenu  = styled.div`
        height: 1024px;
    width: 81px;
    left: 0px;
    top: 0px;
    background: ${(props )=> props.theme==="light" ? " #FFFFFF" : "#16191C"};
    box-shadow: 0px 0px 5px #E5E9F2;
    `;

    const Userdiv = styled.div`
    background-image: url("/logo512.png");
      height: 40px;
     width: 40px;
    margin-left: 21px;
    margin-top: 34px;
    border-radius: 40px;
  
    `;
    const Statusdiv  =  styled.div`
      height: 10px;
    width: 10px;
    margin-left: 27px;
    border-radius: 5px;
    border: 2px solid white;
    background: #29CB97;
    border-radius: 10px; 
    `;

  const Navbdiv = styled.div`
    height: 425px;
    width: 85px;
    margin-top: 300px;
    
    margin-left: 0px;

  `;
  const Stats = styled.div`
 height: 70px;
width: 85px;
left: 91px;
top: 300px;
border-radius: 5px;
justify-content: center;
text-align: center;

background-color: ${(props )=> props.show ? "#578BF3" : "tranparnet"};
 
 box-shadow: ${(props )=> props.show ? "0px 5px 15px #ACB2C1;" : "tranparnet"};

;


  `; 

  const Iconediv  = styled.div`
    height: 24px;
width: 23px;
margin-left: 29px;
  padding-top: 15px;
  font-size: 24px;
  border-radius: 0px;
  color: #DADADA;

  /* border:2px solid red; */

  `;
const Rightdiv = styled.div`

  height: 588px;
width: 453px;
margin-left: 41px;
margin-top: 30px;


`;
const Mydash = styled.div`
  height: 43px;
width: 232px;
left: 122px;
top: 30px;
font-family: 'Roboto';
font-weight: 400;
font-size: 36px;
line-height: 42px;

`;

const Tooglebutton =styled.div`
display: flex;
`;

const Activeuser = styled.div`
  height: 514px;
width: 452px;
margin-top: 31px;
padding-top: 30px;
background: ${(props )=> props.theme==="light" ? "#FFFFFF" : "#292E33"};

`;
const Header = styled.div`
display: flex;
justify-content: space-between;
height: 24px;
width: 391px;
margin: auto;
top: 134px;
border-radius: 0.5px;
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: left;



`;

const Range = styled.div`
  height: 17px;
  width: 120px;
  left: 432px;
  top: 138px;
  border-radius: 0.5px;
  font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0px;
text-align: left;

 
 

`;

const User  = styled.div`
height: 92px;
width: 392px;
margin-left: 30px;
margin-top: 32px;



`;

const Seprater = styled.div`
  border: 1px solid rgba(235, 237, 244, 1);
  margin-top: 30px;
`;



const Usercenter = styled.div`
/* display: flex; */
    

`;
const Userimage  = styled.div`
    
 
    width: 40px;
    height: 40px;
`;



const UserText = styled.div`
height: 17px;
margin-left: 10px;
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0px;
text-align: left;

`;

 const Placespan  = styled.div`
 font-family: Roboto;
 margin-top: 2px;
font-size: 16px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
color:  #748AA1;  
 `;

 const Dot =  styled.div`

    font-size:20px;
   color:  #748AA1;  
   text-align: center;
 `;

const Processbar  = styled.div`
height: 4px;
width: 392px;
left: 152px;
margin-top: 17px;
border-radius: 2px;
background: ${(props )=> props.theme==="light" ? " #F5F6FA" : "#C4C4C4"};
`;

const Process = styled.div`
      height: 6px;

left: 152px;
top: 256px;
border-radius: 3px;
/* background-color: #29CB97; */
${props => props.first && css`
    background: #29CB97;
    color: white;
    width: 282px;
  `}
  ${props => props.sec && css`
background: #4072EE;
;
    color: white;
    width: 205px;
  `}
  ${props => props.third && css`
background: #B558F6;
    width: 145px;
  `}

`;

const Level  = styled.div`
  display: flex;
  justify-content: space-between;
  height: 19px;
width: 392px;
left: 152px;
margin-top: 10px;


`;



  // console.log(show)
  // let Logo =  require("./logo1.png")
   
    return <Maindiv theme={Theme}>
    <Leftmenu theme={Theme}>
        <Userdiv>
        <Statusdiv>

        </Statusdiv>
        
        </Userdiv>
        <Navbdiv>
          <Stats onClick={()=>{
                setshow(true)
            }} show={show} >
            <Iconediv >
            <i class="bi bi-reception-4"></i>
            </Iconediv>
       
          </Stats>
          <Stats  >
          <Iconediv>
          <i class="bi bi-geo-fill"></i>
            </Iconediv>

          </Stats>
          <Stats>
          <Iconediv>
          <i class="bi bi-basket"></i>
            </Iconediv>
          </Stats>
          <Stats>
          <Iconediv>
          <i class="bi bi-chat-left-text-fill"></i>
            </Iconediv>
          </Stats>
          <Stats>
          <Iconediv>
          <i class="bi bi-file-earmark-ruled"></i>
            </Iconediv>
          </Stats>
          <Stats>
          <Iconediv>
         <i class="bi bi-gear"></i>
            </Iconediv>
          
          </Stats>
        </Navbdiv>
    </Leftmenu>
            <Rightdiv>
              <div style={
                {
                  display:"flex",
                  justifyContent: "space-between"
                }
              }>

              
            <Mydash>
            My Dashboard
            </Mydash>
           
            <Tooglebutton>
           
            <Toogle/>  
            </Tooglebutton>
           
            </div>
            <Activeuser theme={Theme}>
              <Header>
              Active Users
              <Range>
                <span style={{
                  fontfamily: "Roboto",
                  fontsize: "14px",
                  fontweight: "400",
                  lineheight: "16px",
                  letterspacing: "0px",
                  textalign: "left",
                  color:  "rgba(116, 138, 161, 1)"
                  
                }}>for </span>
              August 2019
              </Range>
              </Header>
              <User>
                 <Usercenter >
                 <div style={{
                     display:"flex",
                     width:"500px",
                     justifyContent: "space-between",
                    width: "388px"
                   }}>
                     <div style={{
                       display: "flex",
                     }}>
                   <Userimage>
                   <img src="./logo1.png" alt="img" style={{
                   borderRadius: "50px",
                   weight: "40px",
                   marginLeft: "0px",
                   height: "40px"
                 }} ></img>
                   </Userimage>
                   <UserText>
                 Nrupul Dev
                 <Placespan>
                 Banglore, India
                 </Placespan>
                 </UserText>
                 </div>
                 <Dot>
                 ...
                 </Dot>
                 </div>
                  <Processbar>
                    <Process first>

                    </Process>
                  </Processbar>
                  <Level>
                    <div >Professional Level 15</div>
                    <div style={{
                    
                    fontWeight: "700"
                    
                    
                    }}> 4723 Points</div>
                  </Level>
                
                 
                 </Usercenter>
                 
                 
              </User>
                <Seprater> </Seprater>
              {/* 2nd user  */} {/* 2nd user  */}
              <User>
                 <Usercenter >
                 <div style={{
                     display:"flex",
                     width:"500px",
                     justifyContent: "space-between",
                    width: "388px"
                   }}>
                     <div style={{
                       display: "flex",
                     }}>
                   <Userimage>
                   <img src="./logo2.png" alt="img" style={{
                   borderRadius: "50px",
                   weight: "40px",
                   marginLeft: "0px",
                   height: "40px"
                 }} ></img>
                   </Userimage>
                   <UserText>
                   Sandhya
                 <Placespan>
                 Banglore, India
                 </Placespan>
                 </UserText>
                 </div>
                 <Dot>
                 ...
                 </Dot>
                 </div>
                  <Processbar>
                    <Process sec>

                    </Process>
                  </Processbar>
                  <Level>
                    <div >Professional Level 11</div>
                    <div style={{
                    
                    fontWeight: "700"
                    
                    
                    }}> 2339 Points</div>
                  </Level>
                
                 
                 </Usercenter>
                 
                 
              </User>
                <Seprater> </Seprater>
                    {/* 3rd usr */}
                    <User>
                 <Usercenter >
                 <div style={{
                     display:"flex",
                     width:"500px",
                     justifyContent: "space-between",
                    width: "388px"
                   }}>
                     <div style={{
                       display: "flex",
                     }}>
                   <Userimage>
                   <img src="./logo3.png" alt="img" style={{
                   borderRadius: "50px",
                   weight: "40px",
                   marginLeft: "0px",
                   height: "40px"
                 }} ></img>
                   </Userimage>
                   <UserText>
                   Elon Tusk
                 <Placespan>
                 California, USA
                 </Placespan>
                 </UserText>
                 </div>
                 <Dot>
                 ...
                 </Dot>
                 </div>
                  <Processbar>
                    <Process third>

                    </Process>
                  </Processbar>
                  <Level>
                    <div >Professional Level 6</div>
                    <div style={{
                    
                    fontWeight: "700"
                    
                    
                    }}> 1884 Points</div>
                  </Level>
                
                 
                 </Usercenter>
                 
                 
              </User>
          
             
            </Activeuser>
            </Rightdiv>

</Maindiv>
}
export {Style}