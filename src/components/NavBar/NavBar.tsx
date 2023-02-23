import { NavLink } from "react-router-dom";
import "./nav_bar.css";

const NavBar = () => {
  
  return (
  <header>
    <nav id="topnav" className=" fixed-top navbar-expand ">

      <NavLink to="/"  className="link ">
        GABRIELMAGLIA
      </NavLink>

      <NavLink className="link" to="/proyects" >
        Proyects
        </NavLink>

      <NavLink className="link " to="/contact">
        Contact
      </NavLink>

      </nav>
  </header>

  )
}

export default NavBar