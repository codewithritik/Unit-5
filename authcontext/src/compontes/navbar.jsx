import { Link } from "react-router-dom"
import { useContext } from "react"
import {CartContext} from "../context/authcontext"
export const Navbar =()=>{
    const {token,Change}  = useContext(CartContext);
    return(
        <div>
             <Link to={"/login"} className="linktag">{token == true? "Logout":"login"}</Link>
        </div>
    )
} 