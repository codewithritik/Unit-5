
import styled from 'styled-components';
import {Link} from "react-router-dom"
import "./navbar.css"
export const Navbar = ()=>{
   
 const Navdiv = styled.div`
     height: 40px;
     width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    color: white;
 `;


const Linkdiv = styled.div`
  margin  : 5px 20px;
  color: white !important;
 
`;


return <Navdiv>
    <Linkdiv>
    <Link to={"/tanner"} className="linktag">Tanner Goods</Link>
    </Linkdiv>
   
    <Linkdiv>
    <Link to={"/mazama"} className="linktag">Mazama Wares</Link>
    </Linkdiv>
    <Linkdiv>
    <Link to={"/apparel"} className="linktag">Apperel</Link>
    </Linkdiv>
    <Linkdiv>
    <Link to={"/featured"} className="linktag">Featured</Link>
    </Linkdiv>
    <Linkdiv>
    <Link to={"/finalsale"} className="linktag">Final Sale</Link>
    </Linkdiv>
    
    <Linkdiv>
    <Link to={"/cart"} className="icontag"> <i class="bi bi-bag"></i></Link>
    </Linkdiv>
    
</Navdiv>


};