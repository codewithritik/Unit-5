import { Link } from "react-router-dom"

export const Navbar = ()=>{
  return <>
  <Link to={"/res"}>Register</Link>
  <Link to={"/login"}>Login</Link>
  <Link to={"/dashboard"}>dash</Link>
  </>  
}