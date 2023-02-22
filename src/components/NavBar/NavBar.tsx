import "./nav_bar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
  <nav id="topnav" className="navbar-expand fixed-top">
    
    <div className="nav-item ">
      <NavLink to="/"  className=" nav-link ">
        GABRIELMAGLIA
      </NavLink>
    </div>

    <div className="nav-item">
      <NavLink className=" nav-link" to="/proyects" >
        Proyects
        </NavLink>
    </div>
    
    <div className="nav-item">
      <NavLink className=" nav-link" to="/contact">
        Contact
      </NavLink>
    </div>
   
  </nav>
  )
}

export default NavBar